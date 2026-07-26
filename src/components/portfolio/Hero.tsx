'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Wallet,
  Sparkles,
  Play,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '30+', label: 'Clients satisfaits' },
  { value: '5 ans', label: "D'expérience" },
  { value: '99%', label: 'Taux de satisfaction' },
]

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="grid-pattern absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="mb-6 gap-2 rounded-full border-primary/30 px-4 py-2 text-sm font-medium text-primary"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Disponible pour de nouvelles missions
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Je développe des applications{' '}
            <span className="gradient-text">web &amp; mobile</span>
            <br className="hidden sm:block" />
            qui font grandir votre{' '}
            <span className="gradient-text">business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            Développeur Full-Stack avec plus de 5 ans d&apos;expérience.
            Sites web, applications métier, e-commerce, et une expertise
            reconnue en <strong className="text-foreground">Fintech &amp; Paiement</strong>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <a href="#contact">
                Démarrer un projet
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 gap-2 rounded-full border-border/60 px-8 text-base font-semibold"
            >
              <a href="#projects">
                <Play className="size-4" />
                Voir mes projets
              </a>
            </Button>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Code2, label: 'React / Next.js' },
              { icon: Wallet, label: 'Fintech / E-commerce' },
              { icon: Sparkles, label: 'API / Backend' },
            ].map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
              >
                <tech.icon className="size-4 text-primary" />
                {tech.label}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
