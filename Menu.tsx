import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface MenuItem {
  name: string
  price: number
  unit?: string
}

interface MenuSubsection {
  title: string
  items: MenuItem[]
}

interface MenuSection {
  title: string
  items?: MenuItem[]
  subsections?: MenuSubsection[]
}

const menuData: MenuSection[] = [
  {
    title: 'Threading',
    items: [
      { name: 'Eyebrow', price: 50 },
      { name: 'Upper Lip', price: 30 },
      { name: 'Forehead', price: 30 },
      { name: 'Chin', price: 30 },
      { name: 'Eyebrow + Upper Lip + Chin', price: 150 },
      { name: 'Full Face', price: 350 }
    ]
  },
  {
    title: 'Haircut & Styling',
    items: [
      { name: 'Haircut', price: 600 },
      { name: 'Child Haircut', price: 300 },
      { name: 'Shampoo & Blow Dry', price: 500 },
      { name: 'Shampoo & Conditioner', price: 200 },
      { name: 'Ironing', price: 800 },
      { name: 'Haircut & Styling', price: 900 },
      { name: 'Premium Haircut & Styling', price: 1100 }
    ]
  },
  {
    title: 'Hair Colour',
    items: [
      { name: 'Root Touch-Up', price: 1200 },
      { name: 'Global Colour', price: 2000 },
      { name: 'Highlights Per Streak', price: 400 }
    ]
  },
  {
    title: 'Hair Spa',
    items: [
      { name: 'Hair Spa', price: 1000 },
      { name: 'Deep Nourishing Hair Spa', price: 1600 }
    ]
  },
  {
    title: 'Facials',
    items: [
      { name: 'Aroma Facial', price: 1000 },
      { name: 'Gold Moroccan Facial', price: 2500 },
      { name: 'Berry Fruit Facial', price: 2800 },
      { name: 'Gold Facial', price: 1000 },
      { name: 'Diamond Facial', price: 2000 },
      { name: 'Fruit Facial', price: 800 },
      { name: 'Peel-Off Mask', price: 500 },
      { name: 'Hydra Facial', price: 2000 },
      { name: 'Hydra Facial Premium', price: 2500 }
    ]
  },
  {
    title: 'Waxing',
    items: [
      { name: 'Full Hand', price: 400 },
      { name: 'Full Leg', price: 650 },
      { name: 'Half Leg', price: 400 },
      { name: 'Stomach', price: 500 },
      { name: 'Back', price: 500 },
      { name: 'Full Body', price: 2500 },
      { name: 'Upper Lip', price: 50 },
      { name: 'Chin', price: 50 },
      { name: 'Full Face', price: 500 },
      { name: 'Under Arms', price: 200 },
      { name: 'Side Face (Both Sides)', price: 200 },
      { name: 'Bikini Line', price: 500 },
      { name: 'Bikini', price: 2000 }
    ]
  },
  {
    title: 'De-Tan',
    items: [
      { name: 'Face De-Tan', price: 500 },
      { name: 'Hand De-Tan', price: 800 },
      { name: 'Legs De-Tan', price: 1000 },
      { name: 'Feet De-Tan', price: 400 },
      { name: 'Under Arm De-Tan', price: 400 },
      { name: 'Round Neck De-Tan', price: 500 }
    ]
  },
  {
    title: 'Manicure & Pedicure',
    items: [
      { name: 'Organic Manicure', price: 650 },
      { name: 'Organic Pedicure', price: 650 },
      { name: 'Chocolate Manicure', price: 650 },
      { name: 'Chocolate Pedicure', price: 850 },
      { name: 'Ice Cream Pedicure', price: 1500 }
    ]
  },
  {
    title: 'Nail Extensions',
    subsections: [
      {
        title: 'Basic Nail Service',
        items: [
          { name: 'Nail Cut & File', price: 150 }
        ]
      },
      {
        title: 'Essential Nail Service',
        items: [
          { name: 'Gel Polish Application', price: 500 },
          { name: 'French Gel Polish', price: 500 },
          { name: 'Builder Gel Overlays + BIAB', price: 900 }
        ]
      },
      {
        title: 'Nail Enhancement — Gel',
        items: [
          { name: 'Inbuilt Gel Extension — Glitters/Mylars', price: 1600 },
          { name: 'Natural Gel Extensions with Gel Polish — Full Set', price: 1600 },
          { name: 'French Nail Extension', price: 1600 }
        ]
      },
      {
        title: 'Nail Enhancement — Acrylic',
        items: [
          { name: 'Inbuilt Acrylic Extension — Glitters/Mylars', price: 1300 },
          { name: 'Natural Acrylic Extensions with Gel Polish — Full Set', price: 1700 },
          { name: 'French Nail Extension', price: 100, unit: 'per finger' }
        ]
      },
      {
        title: 'Nail Art',
        items: [
          { name: '3D Flower Art', price: 150, unit: 'per finger' },
          { name: 'Glitter Nail Art', price: 50, unit: 'per finger' },
          { name: 'Mylar Nail Art', price: 50, unit: 'per finger' },
          { name: 'Chrome Art', price: 60, unit: 'per finger' },
          { name: 'Gel 3D Art', price: 100, unit: 'per finger' },
          { name: 'Ultra Glitter Gel Nail Art', price: 60, unit: 'per finger' },
          { name: 'Spider Gel Nail Art', price: 100, unit: 'per finger' },
          { name: 'Metallic Gel Nail Art', price: 500, unit: 'per hand' },
          { name: '9D Cat Eye Nail Art (Ding Dong Polish)', price: 100, unit: 'per finger' },
          { name: 'Free Hand Nail Art (Painting/Embossed Gel)', price: 550, unit: 'per hand' }
        ]
      },
      {
        title: 'Removal',
        items: [
          { name: 'Removal of Extension', price: 300 }
        ]
      }
    ]
  },
  {
    title: 'Body Polishing',
    items: [
      { name: 'Essential Body Polishing', price: 3000 },
      { name: 'Premium Body Polishing', price: 3500 }
    ]
  }
]

export default function Menu() {
  const [activeSection, setActiveSection] = useState<string>(menuData[0].title)

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/logo.png" alt="Golden I" className="h-44 md:h-56 w-auto mx-auto mb-6" />
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">For Women</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-4">Menu</h1>
          <p className="text-cream-muted max-w-xl mx-auto">Simple, transparent pricing for all our services.</p>
        </motion.div>
      </section>

      {/* Section Tabs */}
      <div className="sticky top-[72px] z-40 bg-black/95 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {menuData.map((section) => (
              <button
                key={section.title}
                onClick={() => {
                  setActiveSection(section.title)
                  document.getElementById(section.title)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider transition-colors border ${
                  activeSection === section.title
                    ? 'bg-gold text-black border-gold'
                    : 'text-cream-muted border-white/10 hover:border-gold hover:text-gold'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu List */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {menuData.map((section) => (
              <motion.div
                key={section.title}
                id={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                onViewportEnter={() => setActiveSection(section.title)}
                className="scroll-mt-32"
              >
                <h2 className="font-heading text-3xl md:text-4xl text-gold mb-6 pb-3 border-b border-gold/30">
                  {section.title}
                </h2>

                {/* Simple items list */}
                {section.items && (
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-3 border-b border-white/5 hover:bg-white/5 px-2 -mx-2 transition-colors"
                      >
                        <span className="text-cream text-base pr-4">{item.name}</span>
                        <span className="font-heading text-xl text-gold whitespace-nowrap">
                          ₹{item.price}
                          {item.unit && <span className="text-xs text-cream-muted ml-1">{item.unit}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subsections list */}
                {section.subsections && (
                  <div className="space-y-10">
                    {section.subsections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="font-heading text-xl text-cream/80 mb-3 pl-2 border-l-2 border-gold/40">
                          {sub.title}
                        </h3>
                        <div className="space-y-1">
                          {sub.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center justify-between py-3 border-b border-white/5 hover:bg-white/5 px-2 -mx-2 transition-colors"
                            >
                              <span className="text-cream text-base pr-4">{item.name}</span>
                              <span className="font-heading text-xl text-gold whitespace-nowrap">
                                ₹{item.price}
                                {item.unit && <span className="text-xs text-cream-muted ml-1">{item.unit}</span>}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-black border-t border-white/10 text-center px-6">
        <p className="text-cream-muted text-sm max-w-2xl mx-auto">
          All prices are in Indian Rupees (₹) and are starting rates. Final pricing may vary based on hair length and product selection.
        </p>
      </section>

      {/* Back CTA */}
      <section className="py-12 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-2 text-cream-muted hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Home</span>
          </Link>
          <a href="tel:+917349254605" className="px-8 py-3 bg-gold text-black text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors">
            Book Appointment
          </a>
        </div>
      </section>
    </>
  )
}
