'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, Mail, Briefcase } from 'lucide-react'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Nginx', 'Linux'] },
  { category: 'Fintech', items: ['Stripe', 'Mobile Money', 'PCI-DSS', 'JWT/OAuth', 'WebSocket'] },
  { category: 'Outils', items: ['Git', 'Figma', 'Jira', 'Postman', 'Vercel'] },
]

const experiences = [
  {
    period: '2023 - Présent',
    title: 'Développeur Full-Stack Senior',
    company: 'Freelance',
    description: 'Développement de solutions web et mobile pour des startups et PME : e-commerce, SaaS, applications métier, avec une spécialisation Fintech & Paiement.',
  },
  {
    period: '2021 - 2023',
    title: 'Développeur Backend',
    company: 'TechFintech SARL',
    description: "Conception d'APIs, backends et tableaux de bord pour divers secteurs : e-commerce, éducation, logistique et finance.",
  },
  {
    period: '2020 - 2021',
    title: 'Développeur Web Junior',
    company: 'Digital Solutions',
    description: 'Création de sites web et applications pour des clients variés. Formation continue aux technologies modernes.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/3 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: About text + experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              À propos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Pourquoi travailler{' '}
              <span className="gradient-text">avec moi</span> ?
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis <strong className="text-foreground">Hamadou Ali Abdoul-Latif</strong>, développeur
                Full-Stack avec plus de 5 ans d&apos;expérience. Je construis des solutions
                web et mobile pour tous types de projets, avec une <strong className="text-foreground">expertise
                reconnue en Fintech &amp; Paiement</strong> qui fait ma différence.
              </p>
              <p>
                Ma passion : transformer des idées complexes en solutions numériques
                simples et efficaces. Je m&apos;investis dans chaque projet comme si
                c&apos;était le mien, avec un engagement total vers la qualité et les
                délais.
              </p>
            </div>

            {/* Key strengths */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                'Code propre & maintenable',
                'Communication transparente',
                'Respect des délais',
                'Support post-livraison',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Info badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm">
                <MapPin className="size-4 text-primary" />
                <span className="text-muted-foreground">Remote / Afrique</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm">
                <Mail className="size-4 text-primary" />
                <span className="text-muted-foreground">abdoulatif360@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm">
                <Briefcase className="size-4 text-primary" />
                <span className="text-muted-foreground">Disponible maintenant</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills + Experience timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Skills */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Compétences techniques</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h4 className="mb-2.5 text-sm font-medium text-primary">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-border/50 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Parcours professionnel</h3>
              <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
                {experiences.map((exp) => (
                  <div key={exp.period} className="relative flex gap-4 pl-6">
                    <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-background" />
                    <div>
                      <span className="text-xs font-medium text-primary">
                        {exp.period}
                      </span>
                      <h4 className="text-sm font-semibold">{exp.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
