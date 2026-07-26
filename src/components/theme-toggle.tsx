'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="relative size-9 rounded-full border border-border/60 bg-background/40 backdrop-blur-sm transition-colors hover:bg-accent/60"
    >
      {mounted ? (
        resolvedTheme === 'dark' ? (
          <Sun className="size-4 text-amber-400 transition-all duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="size-4 text-primary transition-all duration-300 rotate-0 scale-100" />
        )
      ) : (
        <Sun className="size-4" />
      )}
      <span className="sr-only">Basculer le thème</span>
    </Button>
  )
}
