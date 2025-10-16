"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with temple-inspired pattern and light rays */}
      <div className="absolute inset-0 bg-[url('/images/temple-pattern.png')] opacity-10" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/50 to-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Light rays animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-playfair font-bold text-deepRed mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Kumar Pooja Store
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-deepRed/90 mb-8 font-playfair"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Divine Traditions. Pure Offerings.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/products"
            className="inline-block bg-deepRed text-white px-8 py-3 rounded-lg font-medium hover:bg-gold transition-colors duration-300"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    </div>
  )
}