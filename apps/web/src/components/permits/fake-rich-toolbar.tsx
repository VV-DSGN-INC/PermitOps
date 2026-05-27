import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Link as LinkIcon,
  Heading1,
  Heading2,
  Pilcrow,
  List,
  ListOrdered,
  Quote,
  Minus,
} from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

type ToolButton = {
  icon: typeof Bold
  label: string
}

const groups: ToolButton[][] = [
  [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Strikethrough, label: "Strikethrough" },
    { icon: Code, label: "Code" },
    { icon: LinkIcon, label: "Link" },
  ],
  [
    { icon: Heading1, label: "Heading 1" },
    { icon: Heading2, label: "Heading 2" },
    { icon: Pilcrow, label: "Paragraph" },
  ],
  [
    { icon: List, label: "Bullet list" },
    { icon: ListOrdered, label: "Numbered list" },
    { icon: Quote, label: "Quote" },
    { icon: Minus, label: "Divider" },
  ],
]

export function FakeRichToolbar() {
  return (
    <div
      className="flex flex-wrap items-center gap-0.5 rounded-t-lg border border-b-0 border-input bg-muted/30 px-1.5 py-1"
      role="toolbar"
      aria-label="Description formatting"
    >
      {groups.map((group, i) => (
        <div key={i} className="flex items-center gap-0.5">
          {i > 0 && <span className="mx-1 h-4 w-px bg-border" aria-hidden />}
          {group.map((tool) => {
            const Icon = tool.icon
            return (
              <button
                key={tool.label}
                type="button"
                disabled
                aria-label={tool.label}
                title={tool.label}
                className={cn(
                  "inline-flex size-6 items-center justify-center rounded-md text-muted-foreground/70",
                  "cursor-not-allowed"
                )}
              >
                <Icon className="size-3.5" />
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
