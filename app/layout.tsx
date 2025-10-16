import ConfettiOnScroll from "@/components/ConfettiOnScroll"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { AnimatePresence } from "framer-motion"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kumar Pooja Store - Divine Traditions. Pure Offerings.",
  description:
    "Kumar Pooja Store offers authentic pooja items, lamps, kumkum, oils, dhoops, and other temple essentials rooted in South Indian tradition.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#FFF8E1]`}>
        <ConfettiOnScroll />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  )
}
