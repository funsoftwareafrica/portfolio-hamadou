'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const QUICK_REPLIES = [
  '🛒 Créer une boutique en ligne',
  '📱 Développer une app mobile',
  '💰 Vos tarifs et délais ?',
  '📋 Vos services',
]

function BotMessage({ content }: { content: string }) {
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-strong:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

export function ChatBot() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Bonjour ! 👋\n\nJe suis l\'assistant virtuel de **Hamadou Ali Abdoul-Latif**, développeur Full-Stack.\n\nComment puis-je vous aider ?\n',
    },
  ])
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }, 100)
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
        }),
      })

      if (!res.ok) throw new Error('Erreur')

      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Désolé, une erreur est survenue. Veuillez réessayer ou utiliser le **formulaire de contact** en bas de la page.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setOpen(true)}
              size="icon"
              className="size-14 rounded-full bg-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            >
              <MessageCircle className="size-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[420px]"
          >
            <Card className="flex h-[560px] flex-col overflow-hidden border-border/60 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 bg-primary/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Assistant Hamadou</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      En ligne · IA
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-4" />
                </Button>
              </CardHeader>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex gap-2.5 ${
                        msg.role === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                          msg.role === 'user'
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          <User className="size-3.5" />
                        ) : (
                          <Bot className="size-3.5" />
                        )}
                      </div>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {msg.role === 'assistant' ? (
                          <BotMessage content={msg.content} />
                        ) : (
                          <p>{msg.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="flex gap-2.5">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Bot className="size-3.5" />
                      </div>
                      <div className="rounded-2xl bg-muted px-4 py-3">
                        <div className="flex gap-1">
                          <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0ms]" />
                          <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:150ms]" />
                          <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:300ms]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {messages.length <= 1 && !loading && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {QUICK_REPLIES.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-t border-border/50 p-3"
              >
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez un message..."
                    disabled={loading}
                    className="flex-1 rounded-xl border-border/60"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={loading || !input.trim()}
                    className="size-10 shrink-0 rounded-xl bg-primary text-primary-foreground"
                  >
                    {loading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}