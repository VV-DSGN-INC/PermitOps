#!/usr/bin/env python3
"""Generate a room plan (floor plan) reconstructed from five site photos.

The layout is an approximate as-observed plan of a double-height loft:
an open great room (living + home office/studio + kitchen/dining) plus an
enclosed bathroom and laundry/utility room off a service core. Dimensions
are estimated from the photos and are not survey-accurate.
"""
import cairosvg

# ---- scale / canvas -------------------------------------------------------
FT = 22.0                      # pixels per foot
OX, OY = 70.0, 70.0            # plan origin offset (px)
W_FT, D_FT = 34.0, 24.0        # building footprint (ft)

CANVAS_W = 1180
CANVAS_H = 900

def x(ft): return OX + ft * FT
def y(ft): return OY + ft * FT

P = []  # svg fragments
def add(s): P.append(s)

# ---- palette --------------------------------------------------------------
WALL = "#1f2937"
FURN_S = "#475569"
FURN_F = "#e2e8f0"
TXT = "#0f172a"
SUB = "#64748b"

ZONE = {
    "living":  "#eef2ff",
    "office":  "#ecfeff",
    "kitchen": "#fef3c7",
    "dining":  "#fdf4ff",
    "bath":    "#e0f2fe",
    "laundry": "#f1f5f9",
    "entry":   "#f8fafc",
}

# ===========================================================================
# helpers
# ===========================================================================
def rect(x0, y0, x1, y1, fill="none", stroke="none", sw=1, rx=0, opacity=1, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    add(f'<rect x="{x(x0):.1f}" y="{y(y0):.1f}" width="{(x1-x0)*FT:.1f}" '
        f'height="{(y1-y0)*FT:.1f}" rx="{rx}" fill="{fill}" stroke="{stroke}" '
        f'stroke-width="{sw}" opacity="{opacity}"{d}/>')

def line(x0, y0, x1, y1, stroke=WALL, sw=2, dash=None, cap="butt"):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    add(f'<line x1="{x(x0):.1f}" y1="{y(y0):.1f}" x2="{x(x1):.1f}" y2="{y(y1):.1f}" '
        f'stroke="{stroke}" stroke-width="{sw}" stroke-linecap="{cap}"{d}/>')

def circle(cx, cy, r_ft, fill="none", stroke=FURN_S, sw=1):
    add(f'<circle cx="{x(cx):.1f}" cy="{y(cy):.1f}" r="{r_ft*FT:.1f}" '
        f'fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')

def text(cx, cy, s, size=13, fill=TXT, anchor="middle", weight="400", italic=False, ls="0"):
    it = ' font-style="italic"' if italic else ""
    add(f'<text x="{x(cx):.1f}" y="{y(cy):.1f}" font-family="Geist, Inter, Arial, sans-serif" '
        f'font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"'
        f' letter-spacing="{ls}"{it}>{s}</text>')

def text_px(px, py, s, size=13, fill=TXT, anchor="start", weight="400", ls="0"):
    add(f'<text x="{px:.1f}" y="{py:.1f}" font-family="Geist, Inter, Arial, sans-serif" '
        f'font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"'
        f' letter-spacing="{ls}">{s}</text>')

def door(hx, hy, w_ft, swing="br"):
    """Draw a hinged door opening of width w_ft at (hx,hy). swing controls arc quadrant."""
    # opening gap is just absence of wall (handled by wall segments); draw leaf + arc
    import math
    if swing == "br":   # hinge left, swing down-right
        line(hx, hy, hx, hy + w_ft, stroke=FURN_S, sw=1.5)
        add(f'<path d="M {x(hx):.1f} {y(hy+w_ft):.1f} A {w_ft*FT:.1f} {w_ft*FT:.1f} 0 0 0 '
            f'{x(hx+w_ft):.1f} {y(hy):.1f}" fill="none" stroke="{SUB}" stroke-width="0.8" stroke-dasharray="3 3"/>')
    elif swing == "bl":
        line(hx, hy, hx, hy + w_ft, stroke=FURN_S, sw=1.5)
        add(f'<path d="M {x(hx):.1f} {y(hy+w_ft):.1f} A {w_ft*FT:.1f} {w_ft*FT:.1f} 0 0 1 '
            f'{x(hx-w_ft):.1f} {y(hy):.1f}" fill="none" stroke="{SUB}" stroke-width="0.8" stroke-dasharray="3 3"/>')
    elif swing == "tr":
        line(hx, hy, hx + w_ft, hy, stroke=FURN_S, sw=1.5)
        add(f'<path d="M {x(hx+w_ft):.1f} {y(hy):.1f} A {w_ft*FT:.1f} {w_ft*FT:.1f} 0 0 1 '
            f'{x(hx):.1f} {y(hy-w_ft):.1f}" fill="none" stroke="{SUB}" stroke-width="0.8" stroke-dasharray="3 3"/>')

def window(x0, y0, x1, y1):
    """Window drawn as a triple line along a wall segment (horizontal or vertical)."""
    if abs(y1 - y0) < 0.01:  # horizontal
        line(x0, y0, x1, y1, stroke="#ffffff", sw=6)
        line(x0, y0, x1, y1, stroke="#0ea5e9", sw=2)
    else:                    # vertical
        line(x0, y0, x1, y1, stroke="#ffffff", sw=6)
        line(x0, y0, x1, y1, stroke="#0ea5e9", sw=2)

def hexcluster(cx, cy, color, n=7):
    """Small Nanoleaf-style hex panel cluster on a wall."""
    import math
    r = 0.32
    offs = [(0,0),(0.58,-0.33),(0.58,0.33),(-0.58,0.33),(0,-0.66),(0.58,0.99),(-0.58,-0.33)][:n]
    for ox_, oy_ in offs:
        pts = []
        for k in range(6):
            a = math.radians(60*k - 30)
            pts.append(f"{x(cx+ox_+r*math.cos(a)):.1f},{y(cy+oy_+r*math.sin(a)):.1f}")
        add(f'<polygon points="{" ".join(pts)}" fill="{color}" fill-opacity="0.55" stroke="{color}" stroke-width="0.8"/>')

# ===========================================================================
# 0. background
# ===========================================================================
add(f'<rect width="{CANVAS_W}" height="{CANVAS_H}" fill="#ffffff"/>')

# ===========================================================================
# 1. zone floor fills
# ===========================================================================
# service core (left column, 9ft wide)
rect(0, 0, 9, 9,   fill=ZONE["laundry"])     # laundry / utility
rect(0, 9, 9, 17,  fill=ZONE["bath"])        # bathroom
rect(0, 17, 9, 24, fill=ZONE["entry"])       # entry
# open great room (right, x 9..34)
rect(9, 0, 24, 7,   fill=ZONE["kitchen"])    # kitchen
rect(24, 0, 34, 7,  fill=ZONE["dining"])     # dining
rect(9, 7, 22, 24,  fill=ZONE["living"])     # living
rect(22, 7, 34, 24, fill=ZONE["office"])     # office / studio

# subtle double-height hatch over the great room
for gx in range(9, 34, 2):
    line(gx, 0, gx, 24, stroke="#94a3b8", sw=0.3)

# ===========================================================================
# 2. walls
# ===========================================================================
# outer shell
rect(0, 0, 34, 24, fill="none", stroke=WALL, sw=6)
# service core partitions
line(9, 0, 9, 17, sw=4)              # core / open-room divider
line(0, 9, 9, 9, sw=4)              # laundry / bath
line(0, 17, 9, 17, sw=4)           # bath / entry
# kitchen-dining base wall (low) & office implied open — leave open plan
line(9, 7, 9, 7, sw=0)             # (noop)

# door openings: redraw white gaps over walls, then door leaves
def gap_v(xx, y0, y1):  line(xx, y0, xx, y1, stroke="#ffffff", sw=6)
def gap_h(yy, x0, x1):  line(x0, yy, x1, yy, stroke="#ffffff", sw=6)

# laundry door (from open area, on x=9 wall)
gap_v(9, 1.5, 4.0); door(9, 4.0, 2.5, swing="bl")
# bathroom door (from entry/living, on x=9 wall)
gap_v(9, 12.5, 15.0); door(9, 12.5, 2.5, swing="tr")
# front entry door (bottom wall)
gap_h(24, 2.0, 5.0); door(2.0, 24, 3.0, swing="tr")

# ===========================================================================
# 3. windows  (big loft glazing on right + bottom of the great room)
# ===========================================================================
window(34, 1, 34, 11)     # right wall — office/kitchen tall windows
window(34, 13, 34, 22)    # right wall — office window
window(26, 24, 33, 24)    # bottom wall — office window
window(13, 0, 22, 0)      # top wall — kitchen window

# ===========================================================================
# 4. furniture
# ===========================================================================
# ---- LAUNDRY / UTILITY (0..9 , 0..9) ----
# washer + dryer side by side against bottom wall of the room
for i, lx in enumerate([1.0, 3.6]):
    rect(lx, 6.2, lx+2.2, 8.4, fill="#ffffff", stroke=FURN_S, sw=1, rx=2)
    circle(lx+1.1, 7.3, 0.7, fill="#f8fafc", stroke=FURN_S)
# storage shelving (top wall)
rect(0.6, 0.5, 8.4, 1.6, fill=FURN_F, stroke=FURN_S, sw=1)
for sx in range(2, 8, 2):
    line(sx, 0.5, sx, 1.6, stroke=FURN_S, sw=0.6)
# fire extinguisher dot
circle(7.7, 7.4, 0.35, fill="#ef4444", stroke="#b91c1c")

# ---- BATHROOM (0..9 , 9..17) ----
# glass shower (corner, dashed glass)
rect(0.5, 13.4, 4.0, 16.5, fill="#dbeafe", stroke="#38bdf8", sw=1.2, dash="4 3")
line(0.5, 13.4, 4.0, 16.5, stroke="#7dd3fc", sw=0.8)  # glass sparkle
# toilet
rect(6.0, 15.0, 7.2, 16.4, fill="#ffffff", stroke=FURN_S, sw=1, rx=1)  # tank
add(f'<ellipse cx="{x(6.6):.1f}" cy="{y(14.4):.1f}" rx="{0.7*FT:.1f}" ry="{0.9*FT:.1f}" fill="#ffffff" stroke="{FURN_S}" stroke-width="1"/>')
# vanity + sink
rect(4.6, 9.4, 8.4, 10.8, fill=FURN_F, stroke=FURN_S, sw=1)
add(f'<ellipse cx="{x(6.5):.1f}" cy="{y(10.1):.1f}" rx="{0.6*FT:.1f}" ry="{0.4*FT:.1f}" fill="#ffffff" stroke="{FURN_S}" stroke-width="1"/>')

# ---- ENTRY (0..9 , 17..24) ----
# small bench / mat
rect(5.6, 22.2, 8.4, 23.4, fill=FURN_F, stroke=FURN_S, sw=1, rx=2)

# ---- KITCHEN (9..24 , 0..7) ----
# counter run along top wall (L shape)
rect(9.4, 0.5, 23.0, 2.2, fill=FURN_F, stroke=FURN_S, sw=1)
circle(13.0, 1.35, 0.55, fill="#ffffff", stroke=FURN_S)   # sink
circle(18.0, 1.35, 0.35, fill="#ffffff", stroke=FURN_S)   # burner
circle(19.2, 1.35, 0.35, fill="#ffffff", stroke=FURN_S)
# island / bar cart
rect(12.0, 4.2, 17.0, 5.6, fill="#ffffff", stroke=FURN_S, sw=1, rx=2)
text(14.5, 5.05, "island", size=9, fill=SUB)

# ---- DINING (24..34 , 0..7) ----
rect(26.5, 2.6, 31.5, 5.0, fill="#ffffff", stroke=FURN_S, sw=1, rx=3)  # table
for (dx, dy) in [(25.8,2.4),(25.8,3.8),(25.8,5.2),(32.2,2.4),(32.2,3.8),(32.2,5.2)]:
    circle(dx, dy, 0.45, fill=FURN_F, stroke=FURN_S)

# ---- LIVING (9..22 , 7..24) ----
# sectional couch (L) facing right
rect(9.6, 16.5, 11.4, 23.0, fill=FURN_F, stroke=FURN_S, sw=1, rx=3)   # back rest vertical
rect(11.4, 21.4, 16.5, 23.2, fill=FURN_F, stroke=FURN_S, sw=1, rx=3)  # seat horizontal
text(13.3, 19.6, "lounge", size=9, fill=SUB)
# coffee/bench
rect(13.0, 18.0, 16.0, 19.2, fill="#ffffff", stroke=FURN_S, sw=1, rx=2)
# treadmill
rect(18.5, 8.5, 20.6, 12.2, fill="#ffffff", stroke=FURN_S, sw=1, rx=2)
for ty in range(9, 12):
    line(18.7, ty+0.3, 20.4, ty+0.3, stroke=FURN_S, sw=0.5)
text(19.5, 13.0, "treadmill", size=8.5, fill=SUB)
# bike
circle(10.6, 9.0, 0.7, fill="none", stroke=FURN_S, sw=1.2)
circle(12.4, 9.0, 0.7, fill="none", stroke=FURN_S, sw=1.2)
line(10.6, 9.0, 11.7, 8.2, stroke=FURN_S, sw=1); line(11.7, 8.2, 12.4, 9.0, stroke=FURN_S, sw=1)
line(11.7, 8.2, 11.5, 9.0, stroke=FURN_S, sw=1)
# plants
for (pcx, pcy) in [(15.5, 8.4), (16.8, 10.0), (9.9, 14.5)]:
    circle(pcx, pcy, 0.6, fill="#bbf7d0", stroke="#16a34a")
# pink hex panels on living wall (left)
hexcluster(10.3, 20.0, "#ec4899")

# ---- OFFICE / STUDIO (22..34 , 7..24) ----
# desk against right window wall (L-desk)
rect(31.0, 13.0, 33.4, 21.0, fill=FURN_F, stroke=FURN_S, sw=1)        # desk run along window
rect(28.6, 18.8, 33.4, 21.0, fill=FURN_F, stroke=FURN_S, sw=1)        # return
# dual monitors
rect(31.6, 14.0, 32.0, 16.0, fill="#0f172a", stroke=FURN_S, sw=0.8)
rect(31.6, 16.4, 32.0, 18.4, fill="#0f172a", stroke=FURN_S, sw=0.8)
# office chair
circle(29.8, 16.0, 0.8, fill="#ffffff", stroke=FURN_S, sw=1.2)
# cube shelving (Kallax) along bottom wall
rect(23.0, 21.6, 29.0, 23.4, fill=FURN_F, stroke=FURN_S, sw=1)
for sx in [25, 27]:
    line(sx, 21.6, sx, 23.4, stroke=FURN_S, sw=0.7)
line(23.0, 22.5, 29.0, 22.5, stroke=FURN_S, sw=0.7)
text(26.0, 24.0, "shelving", size=8.5, fill=SUB)
# ring light
circle(28.4, 14.4, 0.55, fill="none", stroke="#f59e0b", sw=1.5)
# white hex panels on office wall (right of window区)
hexcluster(23.6, 9.0, "#38bdf8")

# ===========================================================================
# 5. room labels (name + area)
# ===========================================================================
def label(cx, cy, name, area, size=15):
    text(cx, cy, name, size=size, weight="600", fill=TXT, ls="0.3")
    text(cx, cy+0.95, area, size=10.5, fill=SUB)

label(4.5, 4.4, "LAUNDRY / UTILITY", "~81 sq ft", size=12)
label(4.5, 11.8, "BATHROOM", "~72 sq ft", size=12)
label(4.5, 20.0, "ENTRY", "~63 sq ft", size=12)
label(16.5, 3.4, "KITCHEN", "~105 sq ft", size=13)
label(29.0, 1.7, "DINING", "~70 sq ft", size=12)
label(14.5, 13.0, "LIVING", "open · double-height", size=16)
label(27.0, 11.0, "HOME OFFICE / STUDIO", "~120 sq ft", size=13)

# ===========================================================================
# 6. dimension strings
# ===========================================================================
def dim_h(x0, x1, yy, lab):
    line(x0, yy, x1, yy, stroke=SUB, sw=0.8)
    line(x0, yy-0.25, x0, yy+0.25, stroke=SUB, sw=0.8)
    line(x1, yy-0.25, x1, yy+0.25, stroke=SUB, sw=0.8)
    text((x0+x1)/2, yy-0.4, lab, size=10, fill=SUB)

def dim_v(yy0, yy1, xx, lab):
    line(xx, yy0, xx, yy1, stroke=SUB, sw=0.8)
    line(xx-0.25, yy0, xx+0.25, yy0, stroke=SUB, sw=0.8)
    line(xx-0.25, yy1, xx+0.25, yy1, stroke=SUB, sw=0.8)
    add(f'<text x="{x(xx)-6:.1f}" y="{y((yy0+yy1)/2):.1f}" font-family="Geist, Inter, Arial, sans-serif" '
        f'font-size="10" fill="{SUB}" text-anchor="middle" transform="rotate(-90 {x(xx)-6:.1f} {y((yy0+yy1)/2):.1f})">{lab}</text>')

dim_h(0, 34, -1.0, "34′ – 0″  (overall)")
dim_v(0, 24, -1.2, "24′ – 0″  (overall)")

# ===========================================================================
# 7. title block + legend + north arrow
# ===========================================================================
bx = x(34) + 40      # right column start
by = OY + 6

add(f'<rect x="{bx:.0f}" y="{by:.0f}" width="270" height="{D_FT*FT-6:.0f}" '
    f'rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>')

tx = bx + 18
ty = by + 34
text_px(tx, ty, "ROOM PLAN", size=22, weight="700", fill=TXT, ls="0.5")
text_px(tx, ty+22, "As-observed loft layout", size=12, fill=SUB)
text_px(tx, ty+38, "Reconstructed from 5 site photos", size=11, fill=SUB)

# meta rows
meta = [
    ("Drawing", "Floor plan, level 1"),
    ("Project", "PermitOps — demo"),
    ("Date", "2026-06-16"),
    ("Scale", "approx. 1/4″ = 1′"),
    ("Total area", "~580 sq ft (interior)"),
    ("Source", "IMG_6465–6470"),
]
my = ty + 66
for k, v in meta:
    text_px(tx, my, k, size=10.5, fill=SUB, weight="500")
    text_px(tx+86, my, v, size=10.5, fill=TXT, weight="500")
    my += 20

# legend
ly = my + 14
text_px(tx, ly, "LEGEND", size=11, weight="700", fill=TXT, ls="0.5")
ly += 18
def legend_row(swatch_fn, label_s):
    global ly
    swatch_fn(tx, ly)
    text_px(tx+30, ly+4, label_s, size=10.5, fill=TXT)
    ly += 22

def sw_wall(px, py): add(f'<rect x="{px}" y="{py-8}" width="20" height="6" fill="{WALL}"/>')
def sw_win(px, py):  add(f'<rect x="{px}" y="{py-6}" width="20" height="3" fill="#0ea5e9"/>')
def sw_door(px, py): add(f'<path d="M {px} {py} a 16 16 0 0 1 16 -16" fill="none" stroke="{SUB}" stroke-width="0.8" stroke-dasharray="3 3"/><line x1="{px}" y1="{py}" x2="{px}" y2="{py-16}" stroke="{FURN_S}" stroke-width="1.5"/>')
def sw_hexp(px, py): add(f'<polygon points="{px},{py-9} {px+5},{py-12} {px+10},{py-9} {px+10},{py-3} {px+5},{py} {px},{py-3}" fill="#ec4899" fill-opacity="0.55" stroke="#ec4899" stroke-width="0.8"/>')
def sw_hexw(px, py): add(f'<polygon points="{px},{py-9} {px+5},{py-12} {px+10},{py-9} {px+10},{py-3} {px+5},{py} {px},{py-3}" fill="#38bdf8" fill-opacity="0.55" stroke="#38bdf8" stroke-width="0.8"/>')

legend_row(sw_wall, "Wall")
legend_row(sw_win,  "Window / glazing")
legend_row(sw_door, "Door swing")
legend_row(sw_hexp, "Nanoleaf hex (living — pink)")
legend_row(sw_hexw, "Nanoleaf hex (office — white)")

# north arrow
nx, ny = bx + 215, by + D_FT*FT - 52
add(f'<circle cx="{nx}" cy="{ny}" r="26" fill="#ffffff" stroke="#e2e8f0"/>')
add(f'<polygon points="{nx},{ny-20} {nx-8},{ny+6} {nx},{ny} {nx+8},{ny+6}" fill="{WALL}"/>')
add(f'<text x="{nx}" y="{ny+22}" font-family="Geist, Inter, Arial, sans-serif" font-size="12" '
    f'fill="{TXT}" text-anchor="middle" font-weight="700">N</text>')

# disclaimer footer
text_px(OX, CANVAS_H-22, "Not to scale · dimensions and room areas are visual estimates from photographs, not a measured survey.",
        size=11, fill=SUB)

# ===========================================================================
# assemble + render
# ===========================================================================
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{CANVAS_W}" height="{CANVAS_H}" '
       f'viewBox="0 0 {CANVAS_W} {CANVAS_H}">' + "".join(P) + '</svg>')

with open("room-plan.svg", "w") as f:
    f.write(svg)
cairosvg.svg2png(bytestring=svg.encode(), write_to="room-plan.png", output_width=CANVAS_W*2, output_height=CANVAS_H*2)
print("wrote room-plan.svg and room-plan.png")
