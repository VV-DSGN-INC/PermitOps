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

/**
 * The single chat surface. Scripted so the demo always has something
 * compelling to show, but the user can also type — we just append a scripted
 * answer.
 */
export function HomeAskPage() {
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
    const assistantMsg: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      role: "assistant",
      content:
        "Good question. Based on what I know about your permit, here's what's likely: Berkeley's review queue typically moves on Tuesdays and Thursdays. If they're going to ask for changes, you usually hear within the first week. So far yours has been quiet — that's a good sign.",
      followUps: ["What does a typical review comment look like?", "Should I be worried?"],
    }
    setMessages((m) => [...m, userMsg, assistantMsg])
    setDraft("")
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-3xl flex-col px-6 pt-4">
      <div className="flex items-center justify-between pb-3">
        <Link
          to="/home"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-[13px]"
        >
          <ArrowLeft className="size-3.5" />
          Back to your renovation
        </Link>
        <div className="text-muted-foreground inline-flex items-center gap-1.5 text-[12px]">
          <Sparkles className="text-home-accent size-3.5" />
          AI knows your project
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
          placeholder="Ask anything about your renovation…"
          rows={1}
          className="placeholder:text-muted-foreground/70 max-h-32 flex-1 resize-none border-0 bg-transparent px-3 py-2.5 text-[14.5px] leading-relaxed outline-none"
        />
        <Button
          onClick={() => handleSend()}
          disabled={!draft.trim()}
          size="sm"
          className="bg-foreground text-background hover:bg-foreground/90 disabled:opacity-40 h-9 gap-1.5 rounded-xl px-3 text-[13px]"
        >
          <Send className="size-3.5" />
          Send
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
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-foreground text-background max-w-[80%] rounded-3xl rounded-br-md px-5 py-3 text-[14.5px] leading-relaxed shadow-sm">
          {message.content}
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
        <div className="text-foreground text-[14.5px] leading-relaxed whitespace-pre-line">
          {message.content}
        </div>
        {message.references && message.references.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {message.references.map((ref) => (
              <Link
                key={ref.label}
                to={ref.permitId ? `/home/permit/${ref.permitId}` : "/home"}
                className="border-home-border/80 bg-home-canvas hover:bg-home-accent-soft/60 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px]"
              >
                <FileText className="text-muted-foreground size-3" />
                {ref.label}
              </Link>
            ))}
          </div>
        ) : null}
        {message.followUps && isLast ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {message.followUps.map((f) => (
              <button
                key={f}
                onClick={() => onFollowUp(f)}
                className={cn(
                  "border-home-border/70 bg-card hover:border-foreground/30 hover:bg-foreground/[0.03]",
                  "text-foreground/85 hover:text-foreground rounded-full border px-3.5 py-1.5 text-[12.5px] transition",
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
  return (
    <div className="border-home-border/60 border-t pt-4">
      <div className="text-muted-foreground mb-2.5 text-[11.5px] font-semibold tracking-[0.08em] uppercase">
        Try asking
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestedPrompts.map((p) => (
          <button
            key={p}
            onClick={() => onPick(p)}
            className="border-home-border/70 bg-card hover:bg-home-accent-soft/60 text-foreground/85 hover:text-foreground rounded-full border px-3.5 py-1.5 text-[12.5px] transition"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}
