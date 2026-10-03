import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight, MapPin, Phone, Clock } from 'lucide-react'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    'Threading',
    'Haircut & Styling',
    'Hair Colour',
    'Hair Spa',
    'Facials',
    'Waxing',
    'De-Tan',
    'Manicure & Pedicure',
    'Nail Extensions',
    'Body Polishing'
  ]

  const testimonials = [
    { name: 'Amara Williams', text: 'Golden I is my go-to salon. The staff is professional and the results are always beautiful.', rating: 5 },
    { name: 'Sophia Chen', text: 'A wonderful experience every time. Clean, elegant, and truly relaxing.', rating: 5 },
    { name: 'Isabella Romano', text: 'The best salon in Chitradurga. I always leave feeling refreshed and confident.', rating: 5 }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.7, ease: 'easeOut' as const }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/salon-bg.jpg" 
            alt="Golden I Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="relative z-10 mb-6"
        >
          <img src="/logo.png" alt="Golden I Family Salon & Spa" className="h-52 md:h-80 w-auto mx-auto drop-shadow-2xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.7 }}
          className="relative z-10 font-heading text-2xl md:text-3xl italic text-cream/95 max-w-xl mb-10 leading-relaxed"
        >
          Because you deserve golden touch
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.1 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4"
        >
          <Link to="/menu" className="px-10 py-4 bg-gold text-black text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors">
            View Menu
          </Link>
          <a href="tel:+917349254605" className="px-10 py-4 border border-gold text-gold text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors">
            Book Now
          </a>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">What We Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl">Our Services</h2>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service}
                to="/menu"
                className="group px-6 py-5 border border-white/10 text-center hover:border-gold hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-cream group-hover:text-gold transition-colors text-sm uppercase tracking-wider">{service}</span>
              </Link>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-10 text-center">
            <Link to="/menu" className="inline-block px-10 py-4 border border-gold text-gold text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors">
              See Full Menu & Prices
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Why Visit Us</p>
            <h2 className="font-heading text-4xl md:text-5xl">The Golden I Experience</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Expert Staff', desc: 'Trained professionals dedicated to your care.' },
              { title: 'Quality Products', desc: 'Premium products for lasting results.' },
              { title: 'Relaxing Ambience', desc: 'A clean, calm space to unwind and refresh.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10"
              >
                <h3 className="font-heading text-2xl text-gold mb-3">{item.title}</h3>
                <p className="text-cream-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl">What Our Guests Say</h2>
          </motion.div>

          <div className="relative text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-heading text-2xl md:text-3xl italic mb-6">"{testimonials[activeTestimonial].text}"</p>
                <p className="text-gold uppercase tracking-wider text-sm">{testimonials[activeTestimonial].name}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 border border-white/20 flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-colors" aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setActiveTestimonial(index)} className={`w-2 h-2 rounded-full transition-all ${index === activeTestimonial ? 'bg-gold w-6' : 'bg-white/30'}`} aria-label={`Go to ${index + 1}`} />
                ))}
              </div>
              <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="w-10 h-10 border border-white/20 flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-colors" aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Get in Touch</p>
            <h2 className="font-heading text-4xl md:text-5xl">Visit Us Today</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10">
              <MapPin className="w-6 h-6 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-2">Address</h3>
              <p className="text-cream-muted text-sm leading-relaxed">
                Near Ayyappaswamy Temple<br />
                Opposite to Vaibhav Super Market<br />
                Vidyanagar, Chitradurga
              </p>
            </div>
            <div className="text-center p-8 border border-white/10">
              <Phone className="w-6 h-6 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-2">Phone</h3>
              <a href="tel:+917349254605" className="text-cream-muted hover:text-gold transition-colors text-sm">+91 73492 54605</a>
            </div>
            <div className="text-center p-8 border border-white/10">
              <Clock className="w-6 h-6 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-2">Hours</h3>
              <p className="text-cream-muted text-sm">Mon – Sun<br />9:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
