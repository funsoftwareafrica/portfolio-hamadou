'use client'

import { Terminal, ArrowUpRight, Heart } from 'lucide-react'

const footerLinks = {
  Navigation: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Application Web', href: '#contact' },
    { label: 'Fintech & Paiement', href: '#contact' },
    { label: 'API & Backend', href: '#contact' },
    { label: 'Consulting', href: '#contact' },
  ],
}

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#accueil"
              onClick={(e) => handleNavClick(e, '#accueil')}
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex size-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Terminal className="size-4.5 text-primary" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-mono text-sm font-semibold text-foreground">
                  H.<span className="text-primary">A</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Full-Stack Dev
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Développeur Full-Stack créant des solutions web et mobile
              performantes, avec une expertise reconnue en Fintech & Paiement.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Démarrer un projet
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hamadou Ali Abdoul-Latif. Construit avec
            <Heart className="size-3 fill-red-500 text-red-500" />
            et Next.js
          </p>
          <p className="text-xs text-muted-foreground">
            Disponible pour missions freelance remote
          </p>
        </div>
      </div>
    </footer>
  )
}
