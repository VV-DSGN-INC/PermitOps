import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Send, Sparkles, FileText } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import {
  chatTranscript,
  suggestedPrompts,
  type ChatMessage,
} from "@/lib/home-mock"
import { useT } from "@/lib/home-i18n"

/**
 * Marker prefix for the scripted assistant fallback so its localized body +
 * follow-ups can be looked up by key at render time (rather than baking the
 * English string into the message at send time, which wouldn't react to a
 * locale switch).
 */
const FALLBACK_ID_PREFIX = "a-fallback-"

/**
 * The single chat surface. Scripted so the demo always has something
 * compelling to show, but the user can also type — we just append a scripted
 * answer.
 */
export function HomeAskPage() {
  const t = useT()
  const [messages, setMessages] = useState<ChatMessage[]>(chatTranscript)
  const [draft, setDraft] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages.length])

  function handleSend(rawText?: string) {
    const text = (rawText ?? draft).trim()
    if (!text) return
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    }
    // The scripted reply is identified by a marker id so MessageBubble can
    // resolve its localized body + follow-ups from keys (reacting to locale
    // switches), rather than freezing the English copy at send time.
    const assistantMsg: ChatMessage = {
      id: `${FALLBACK_ID_PREFIX}${Date.now() + 1}`,
      role: "assistant",
      content: "",
    }
    setMessages((m) => [...m, userMsg, assistantMsg])
    setDraft("")
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-3xl flex-col px-6 pt-4">
      <div className="flex items-center justify-between pb-3">
        <Link
          to="/home"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-[14px]"
        >
          <ArrowLeft className="size-3.5" />
          {t("ask.back")}
        </Link>
        <div className="text-muted-foreground inline-flex items-center gap-1.5 text-[13px]">
          <Sparkles className="text-home-accent size-3.5" />
          {t("ask.knows")}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 space-y-6 overflow-y-auto py-6"
      >
        {messages.map((m, idx) => (
          <MessageBubble
            key={m.id}
            message={m}
            isLast={idx === messages.length - 1}
            onFollowUp={(prompt) => handleSend(prompt)}
          />
        ))}
      </div>

      {messages.length <= 4 ? (
        <SuggestedPrompts onPick={(p) => handleSend(p)} />
      ) : null}

      <div className="border-home-border/70 bg-card sticky bottom-4 mt-3 mb-4 flex items-end gap-2 rounded-2xl border p-2 shadow-[0_8px_28px_-12px_rgb(0_0_0_/_0.12)]">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
          placeholder={t("ask.placeholder")}
          rows={1}
          className="placeholder:text-muted-foreground/70 max-h-32 flex-1 resize-none border-0 bg-transparent px-3 py-2.5 text-[16px] leading-relaxed outline-none"
        />
        <Button
          onClick={() => handleSend()}
          disabled={!draft.trim()}
          size="sm"
          className="bg-foreground text-background hover:bg-foreground/90 disabled:opacity-40 h-9 gap-1.5 rounded-xl px-3 text-[14px]"
        >
          <Send className="size-3.5" />
          {t("ask.send")}
        </Button>
      </div>
    </div>
  )
}

function MessageBubble({
  message,
  isLast,
  onFollowUp,
}: {
  message: ChatMessage
  isLast: boolean
  onFollowUp: (prompt: string) => void
}) {
  const t = useT()
  const isFallback = message.id.startsWith(FALLBACK_ID_PREFIX)
  // Canonical transcript ids (m1…) carry data.chat.<id> keys; the scripted
  // reply uses data.chat.fallback.*. Anything else is a user-typed message
  // and renders verbatim.
  const chatKey = isFallback ? "data.chat.fallback" : `data.chat.${message.id}`

  // Resolve content + follow-ups by key, falling back to the mock English.
  const content =
    isFallback || message.id.startsWith("m")
      ? t(chatKey, message.content)
      : message.content
  const followUps = isFallback
    ? [
        t("data.chat.fallback.followup.1"),
        t("data.chat.fallback.followup.2"),
      ]
    : (message.followUps ?? []).map((f, i) =>
        t(`${chatKey}.followup.${i + 1}`, f),
      )

  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-foreground text-background max-w-[80%] rounded-3xl rounded-br-md px-5 py-3 text-[16px] leading-relaxed shadow-sm">
          {content}
        </div>
      </div>
    )
  }
  return (
    <div className="flex gap-3">
      <span className="bg-home-accent/15 text-home-accent inline-flex size-9 shrink-0 items-center justify-center rounded-full">
        <Sparkles className="size-4" />
      </span>
      <div className="max-w-[85%] space-y-3">
        <div className="text-foreground text-[16px] leading-relaxed whitespace-pre-line">
          {content}
        </div>
        {message.references && message.references.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {message.references.map((ref) => (
              <Link
                key={ref.label}
                to={ref.permitId ? `/home/permit/${ref.permitId}` : "/home"}
                className="border-home-border/80 bg-home-canvas hover:bg-home-accent-soft/60 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px]"
              >
                <FileText className="text-muted-foreground size-3" />
                {ref.permitId
                  ? t(`${chatKey}.ref.${ref.permitId}`, ref.label)
                  : ref.label}
              </Link>
            ))}
          </div>
        ) : null}
        {followUps.length > 0 && isLast ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {followUps.map((f) => (
              <button
                key={f}
                onClick={() => onFollowUp(f)}
                className={cn(
                  "border-home-border/70 bg-card hover:border-foreground/30 hover:bg-foreground/[0.03]",
                  "text-foreground/85 hover:text-foreground rounded-full border px-3.5 py-1.5 text-[13px] transition",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function SuggestedPrompts({ onPick }: { onPick: (prompt: string) => void }) {
  const t = useT()
  return (
    <div className="border-home-border/60 border-t pt-4">
      <div className="text-muted-foreground mb-2.5 text-[12.5px] font-semibold tracking-[0.08em] uppercase">
        {t("ask.tryAsking")}
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestedPrompts.map((p, i) => {
          const label = t(`data.prompt.${i + 1}`, p)
          return (
            <button
              key={p}
              onClick={() => onPick(label)}
              className="border-home-border/70 bg-card hover:bg-home-accent-soft/60 text-foreground/85 hover:text-foreground rounded-full border px-3.5 py-1.5 text-[13px] transition"
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
