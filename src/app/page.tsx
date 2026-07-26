import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/portfolio/Hero'
import { Services } from '@/components/portfolio/Services'
import { Projects } from '@/components/portfolio/Projects'
import { About } from '@/components/portfolio/About'
import { Testimonials } from '@/components/portfolio/Testimonials'
import { Contact } from '@/components/portfolio/Contact'
import { ChatBot } from '@/components/portfolio/ChatBot'
import { Footer } from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}
