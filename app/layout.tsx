import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TKC - Tucumán Kayak Club | Turismo Aventura",
  description:
    "Descubre la emoción del turismo aventura en Tucumán con TKC. Kayak, rappel, trekking y más actividades de aventura.",
  keywords: "kayak, turismo aventura, Tucumán, rappel, trekking, canyoning, excursiones",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
