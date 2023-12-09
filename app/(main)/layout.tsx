import "@/app/globals.css"

import React from "react"
import { type Metadata } from "next"
import { Inter, Lexend } from "next/font/google"

import { cn } from "@/lib/utils"
import { Header } from "@/app/components/Header"

export const metadata: Metadata = {
  title: {
    template: "%s - Search",
    default: "Search - POC",
  },
  description: "Simple search_rsc POC.",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
