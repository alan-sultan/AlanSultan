import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "./theme-script"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Alan Sultan - Software Engineer</title>
        <meta name="description" content="Alan Sultan's portfolio - Software Engineer" />
      </head>
      <body>
        <ThemeScript />
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
