'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Terminal, ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'

type NavLink = {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projects' },
  { label: 'À propos', href: '#about' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const SCROLL_THRESHOLD = 24

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>('accueil')
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // Track scroll position to toggle navbar appearance
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: highlight the nav link of the section in view
  React.useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Navigation principale"
          className={cn(
            'mt-3 flex h-16 items-center justify-between gap-3 rounded-2xl px-4 transition-all duration-300 sm:px-5',
            scrolled
              ? 'border border-border/60 bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl'
              : 'border border-transparent bg-transparent',
          )}
        >
          {/* Brand */}
          <a
            href="#accueil"
            onClick={(e) => handleNavClick(e, '#accueil')}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="Retour à l'accueil"
          >
            <span
              className={cn(
                'relative flex size-9 items-center justify-center rounded-xl border transition-all duration-300',
                scrolled
                  ? 'border-primary/30 bg-primary/10'
                  : 'border-border/40 bg-background/40 backdrop-blur-sm',
              )}
            >
              <Terminal className="size-4.5 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
                H.<span className="text-primary">A</span>
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                Full-Stack Dev
              </span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-lg bg-primary/10 ring-1 ring-inset ring-primary/20"
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="hidden h-9 gap-1.5 rounded-full bg-primary px-4 text-primary-foreground shadow-sm transition-all hover:shadow-md hover:shadow-primary/20 sm:inline-flex"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Me contacter
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 rounded-full border border-border/60 bg-background/40 backdrop-blur-sm lg:hidden"
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="size-4.5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-border/60 bg-background/95 p-0 backdrop-blur-xl sm:max-w-sm"
              >
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <div className="flex h-full flex-col">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between border-b border-border/60 px-5 py-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                        <Terminal className="size-4.5 text-primary" />
                      </span>
                      <div className="flex flex-col leading-none">
                        <span className="font-mono text-sm font-semibold text-foreground">
                          H.<span className="text-primary">A</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          Full-Stack Dev
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile links */}
                  <nav className="flex-1 overflow-y-auto px-3 py-4">
                    <ul className="flex flex-col gap-1">
                      {NAV_LINKS.map((link, index) => {
                        const isActive =
                          activeSection === link.href.replace('#', '')
                        return (
                          <li key={link.href}>
                            <AnimatePresence>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.05 * index,
                                  duration: 0.25,
                                }}
                              >
                                <SheetClose asChild>
                                  <a
                                    href={link.href}
                                    onClick={(e) =>
                                      handleNavClick(e, link.href)
                                    }
                                    className={cn(
                                      'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors',
                                      isActive
                                        ? 'bg-primary/10 text-foreground ring-1 ring-inset ring-primary/20'
                                        : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                                    )}
                                  >
                                    <span className="flex items-center gap-3">
                                      <span
                                        className={cn(
                                          'font-mono text-xs',
                                          isActive
                                            ? 'text-primary'
                                            : 'text-muted-foreground/60',
                                        )}
                                      >
                                        0{index + 1}
                                      </span>
                                      {link.label}
                                    </span>
                                    {isActive && (
                                      <span className="size-1.5 rounded-full bg-primary" />
                                    )}
                                  </a>
                                </SheetClose>
                              </motion.div>
                            </AnimatePresence>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>

                  {/* Mobile footer CTA */}
                  <div className="mt-auto border-t border-border/60 p-5">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="h-11 w-full gap-1.5 rounded-xl bg-primary text-primary-foreground shadow-sm transition-all hover:shadow-md hover:shadow-primary/20"
                      >
                        <a
                          href="#contact"
                          onClick={(e) => handleNavClick(e, '#contact')}
                        >
                          Démarrer un projet
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                    </SheetClose>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Disponible pour missions freelance
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
