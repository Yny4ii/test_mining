import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import ThemeSwitcher from '@/app/shared/ui/ThemeSwitcher'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mining Pools Dashboard',
  description: 'Real-time monitoring of mining pools performance and statistics',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background min-h-screen">
            <header className="bg-card border-b">
              <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <h1 className="text-xl font-bold">Mining Pools</h1>
                <ThemeSwitcher />
              </div>
            </header>

            <main className="flex-1">
              {modal}
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
