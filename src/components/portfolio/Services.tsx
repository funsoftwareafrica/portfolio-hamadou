'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  ShieldCheck,
  BarChart3,
  Smartphone,
  CreditCard,
  ShoppingBag,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Globe,
    title: 'Sites Web & Applications',
    description:
      "Sites vitrines, landing pages, SaaS et applications métier sur mesure avec React, Next.js et TypeScript. Performance et UX optimales.",
    features: ['Sites vitrines & Landing pages', 'SaaS & Applications métier', 'Progressive Web Apps'],
    featured: false,
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description:
      'Boutiques en ligne complètes avec gestion de catalogue, panier, paiement, commandes et tableau de bord administrateur.',
    features: ['Boutiques en ligne', 'Gestion de stock & commandes', 'Intégration paiement'],
    featured: false,
  },
  {
    icon: CreditCard,
    title: 'Fintech & Paiement',
    description:
      'Mon expertise différenciante : intégration de systèmes de paiement, portefeuilles numériques et applications financières sécurisées.',
    features: ['Mobile Money & Stripe', 'Portefeuilles numériques', 'Compliance & sécurité'],
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: 'APIs & Backend',
    description:
      "APIs REST et GraphQL robustes avec authentification, autorisation et documentation complète. Scalabilité garantie.",
    features: ['REST & GraphQL', 'Authentification JWT/OAuth', 'Documentation Swagger'],
    featured: false,
  },
  {
    icon: BarChart3,
    title: 'Tableaux de Bord & Analytics',
    description:
      "Dashboards interactifs avec visualisation de données en temps réel. Prenez des décisions éclairées grâce à vos données.",
    features: ['Visualisation temps réel', 'Rapports automatisés', 'KPIs personnalisés'],
    featured: false,
  },
  {
    icon: Layers,
    title: 'Applications Mobiles',
    description:
      "Applications mobiles cross-platform avec React Native. Une seule base de code pour iOS et Android.",
    features: ['React Native', 'iOS & Android', 'Notifications push'],
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/3 blur-[100px]" />
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
            Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tout ce qu&apos;il faut pour votre{' '}
            <span className="gradient-text">projet digital</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Du site vitrine à l&apos;application complexe, je couvre l&apos;ensemble de vos
            besoins. Et si votre projet touche à la finance, c&apos;est là que mon
            expertise fait la différence.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className={`group h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${service.featured ? 'ring-1 ring-primary/20' : ''}`}>
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <service.icon className="size-6 text-primary" />
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    {service.featured && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                        Expertise
                      </span>
                    )}
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mb-4 flex flex-col gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    En savoir plus
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
