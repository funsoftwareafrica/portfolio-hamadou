'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdoulatif360@gmail.com',
    href: 'mailto:abdoulatif360@gmail.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: 'Disponible sur demande',
    href: null,
  },
  {
    icon: MessageSquare,
    label: 'Chat IA',
    value: 'Utilisez le chat en bas à droite',
    href: null,
  },
  {
    icon: Clock,
    label: 'Réponse',
    value: 'Sous 24h en moyenne',
    href: null,
  },
]

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Erreur serveur')

      setSubmitted(true)
      toast({
        title: 'Message envoyé !',
        description: 'Je vous répondrai sous 24h.',
      })
    } catch {
      toast({
        title: 'Erreur',
        description: 'Veuillez réessayer ou me contacter directement par email.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/3 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Parlons de votre{' '}
            <span className="gradient-text">projet</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Décrivez-moi votre projet et je vous recontacterai rapidement avec une
            proposition adaptée à vos besoins.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((info) => (
              <Card
                key={info.label}
                className="border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <info.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Trust note */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">Confidentialité garantie</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Vos informations sont protégées et ne seront jamais partagées
                    avec des tiers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="size-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Message envoyé !</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Merci pour votre message. Je vous répondrai sous 24h maximum.
                      En attendant, vous pouvez utiliser le chat IA pour des
                      questions rapides.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={() => setSubmitted(false)}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nom complet <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Votre nom"
                          className="rounded-xl border-border/60"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="votre@email.com"
                          className="rounded-xl border-border/60"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+223 XX XX XX XX"
                          className="rounded-xl border-border/60"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Sujet <span className="text-destructive">*</span>
                        </label>
                        <Select name="subject" required>
                          <SelectTrigger className="rounded-xl border-border/60">
                            <SelectValue placeholder="Choisir un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="application-web">Application Web / SaaS</SelectItem>
                            <SelectItem value="e-commerce">E-commerce / Boutique en ligne</SelectItem>
                            <SelectItem value="fintech-paiement">Fintech / Paiement</SelectItem>
                            <SelectItem value="api-backend">API / Backend</SelectItem>
                            <SelectItem value="dashboard">Tableau de Bord / Analytics</SelectItem>
                            <SelectItem value="mobile">Application Mobile</SelectItem>
                            <SelectItem value="site-vitrine">Site Vitrine / Landing Page</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Budget estimé
                      </label>
                      <Select name="budget">
                        <SelectTrigger className="rounded-xl border-border/60">
                          <SelectValue placeholder="Sélectionner une fourchette" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<500k">Moins de 500 000 FCFA</SelectItem>
                          <SelectItem value="500k-1m">500 000 - 1M FCFA</SelectItem>
                          <SelectItem value="1m-3m">1M - 3M FCFA</SelectItem>
                          <SelectItem value="3m-5m">3M - 5M FCFA</SelectItem>
                          <SelectItem value="5m+">Plus de 5M FCFA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                        className="rounded-xl border-border/60"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-11 w-full gap-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
