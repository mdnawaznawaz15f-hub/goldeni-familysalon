import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.substring(1)
    return location.pathname === href
  }

  return (
    <div className="min-h-screen bg-black text-cream overflow-x-hidden">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Golden I" className="h-14 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                  isActive(link.href) ? 'text-gold' : 'text-cream-muted hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+917349254605" 
              className="px-6 py-3 bg-gold text-black text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Call Now
            </a>
          </div>

          <button 
            className="lg:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black border-t border-white/10"
            >
              <div className="px-6 py-8 flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    key={link.name}
                  >
                    <Link
                      to={link.href}
                      className="text-xl font-heading text-cream hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <a 
                  href="tel:+917349254605"
                  className="mt-4 px-6 py-4 bg-gold text-black text-center text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>{children}</main>

      <footer className="bg-neutral-950 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src="/logo.png" alt="Golden I" className="h-20 w-auto mb-6" />
              <p className="text-cream-muted leading-relaxed text-sm">
                Because you deserve golden touch. Premium beauty and wellness services in Chitradurga.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-cream-muted hover:text-gold transition-colors text-sm uppercase tracking-wider">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-6 text-gold">Visit Us</h4>
              <address className="not-italic text-cream-muted text-sm leading-relaxed">
                <p>Near Ayyappaswamy Temple</p>
                <p>Opposite to Vaibhav Super Market</p>
                <p>Vidyanagar, Chitradurga</p>
                <p className="mt-4 text-cream">Mon – Sun: 9am – 8pm</p>
              </address>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-cream-muted/60 text-xs uppercase tracking-[0.15em]">
              © {new Date().getFullYear()} Golden I Family Salon & Spa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="tel:+917349254605"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors lg:hidden"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  )
}
