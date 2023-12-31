import { Header } from '@/components/features/header'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-100 dark:bg-slate-800")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Header />
          <ScrollArea className='w-full'>
            {children}
          </ScrollArea>
          {/* <section className='fixed bottom-0 left-0 right-0 bg-background flex'>
            <div className='px-3 py-2 bg-accent'>
              PENGUMUNAN
            </div>
          </section> */}
        </ThemeProvider>

      </body>
    </html>
  )
}
