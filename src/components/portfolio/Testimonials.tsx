'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amadou Diallo',
    role: 'CEO, PayTech Solutions',
    content:
      "Hamadou a développé notre plateforme de paiement en un temps record. Sa maîtrise des systèmes Fintech et sa rigueur dans le code sont remarquables. Je le recommande vivement.",
    rating: 5,
  },
  {
    name: 'Fatimata Bâ',
    role: 'Directrice Produit, FinLoan',
    content:
      "Travailleur exceptionnel ! Il a su comprendre nos besoins complexes et les transformer en une solution élégante. Sa communication est excellente et les délais ont été respectés.",
    rating: 5,
  },
  {
    name: 'Ibrahim Keïta',
    role: 'CTO, AgriDigital',
    content:
      "Nous avons fait appel à Hamadou pour refondre notre dashboard d'analyse. Le résultat dépasse nos attentes. Performant, beau et fonctionnel. Un vrai professionnel.",
    rating: 5,
  },
  {
    name: 'Mariam Touré',
    role: 'Fondatrice, WalletPro',
    content:
      "Hamadou a intégré notre solution Mobile Money avec une grande expertise technique. Il comprend les enjeux de sécurité du secteur financier. Excellent choix !",
    rating: 5,
  },
  {
    name: 'Oumar Sidibé',
    role: 'PM, InsaPay',
    content:
      "Sa capacité à livrer rapidement sans compromettre la qualité est impressionnante. Il a été un atout majeur pour notre lancement. Nous continuons de collaborer.",
    rating: 5,
  },
  {
    name: 'Aïcha Ndiaye',
    role: 'CEO, DataVision',
    content:
      "Un développeur qui va au-delà des attentes. Hamadou a proposé des améliorations que nous n'avions pas envisagées. Son expertise technique est un véritable atout.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/3 blur-[100px]" />
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
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ce que disent{' '}
            <span className="gradient-text">mes clients</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            La satisfaction de mes clients est ma meilleure publicité. Découvrez
            leurs retours d&apos;expérience.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Quote icon */}
                  <Quote className="mb-4 size-8 text-primary/20" />

                  {/* Stars */}
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {t.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
