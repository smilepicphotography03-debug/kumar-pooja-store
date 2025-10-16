"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#B22222] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Store Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Kumar Pooja Store</h3>
            <p className="text-sm opacity-90 mb-2">Divine Traditions. Pure Offerings.</p>
            <p className="text-sm opacity-90">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919489830438"
                className="flex items-center space-x-2 hover:text-[#DAA520] transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>94898 30438</span>
              </a>
              <a 
                href="tel:+919489657260"
                className="flex items-center space-x-2 hover:text-[#DAA520] transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>94896 57260</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/jsHqrF89j5cmVFXn8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 hover:text-[#DAA520] transition-colors"
              >
                <MapPinIcon className="w-5 h-5 mt-1" />
                <span>
                  Ambai Rd, Opp. TPV Multiplex,<br />
                  Alangulam, Tamil Nadu – 627851
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/products" className="block hover:text-[#DAA520] transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block hover:text-[#DAA520] transition-colors">
                Contact
              </Link>
              <a 
                href="https://wa.me/919489830438"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#DAA520] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
