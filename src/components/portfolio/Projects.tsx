'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'FinPay - Plateforme de Paiement',
    description:
      'Plateforme de paiement complète avec intégration Mobile Money, tableau de bord admin et gestion des transactions en temps réel.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'WebSocket'],
    category: 'Fintech',
    featured: true,
  },
  {
    title: 'ShopMali - E-commerce',
    description:
      'Boutique en ligne complète avec catalogue produits, panier, système de commande, paiement Mobile Money et dashboard administrateur.',
    tags: ['Next.js', 'Prisma', 'Tailwind', 'Stripe', 'Vercel'],
    category: 'E-commerce',
    featured: true,
  },
  {
    title: 'AgriConnect - App Livraison',
    description:
      "Application de mise en relation entre agriculteurs et consommateurs avec suivi de commandes, géolocalisation et paiement intégré.",
    tags: ['React Native', 'Node.js', 'MongoDB', 'Maps API'],
    category: 'Mobile',
    featured: false,
  },
  {
    title: 'EduPlatform - SaaS Formation',
    description:
      'Plateforme SaaS de formation en ligne avec vidéos, quiz, suivi de progression, certificats et gestion des abonnements.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3'],
    category: 'SaaS',
    featured: false,
  },
  {
    title: 'BlogPro - CMS Personnalisé',
    description:
      "CMS sur mesure pour un groupe média avec gestion multi-auteurs, éditeur riche, SEO automatique et analytics intégrés.",
    tags: ['React', 'Strapi', 'PostgreSQL', 'Docker'],
    category: 'Web',
    featured: false,
  },
  {
    title: 'TradeDash - Dashboard Analytics',
    description:
      "Tableau de bord analytique en temps réel avec graphiques interactifs, alertes personnalisées et rapports automatisés.",
    tags: ['Next.js', 'D3.js', 'WebSocket', 'Python'],
    category: 'Analytics',
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/3 blur-[100px]" />
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
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projets <span className="gradient-text">réalisés</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            E-commerce, SaaS, applications mobiles, Fintech… Chaque projet
            est différent. Voici un aperçu de ma polyvalence.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Project image placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-cyan-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-1.5">
                      <div className="size-2 rounded-full bg-primary/40" />
                      <div className="size-2 rounded-full bg-primary/30" />
                      <div className="size-2 rounded-full bg-primary/20" />
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 border-0 bg-primary/90 text-xs text-primary-foreground">
                      Projet phare
                    </Badge>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="size-10 rounded-full"
                    >
                      <ExternalLink className="size-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="size-10 rounded-full"
                    >
                      <Github className="size-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="gap-2 rounded-full border-border/60 px-6"
          >
            <a href="#contact">
              Vous avez un projet similaire ? Parlons-en
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
