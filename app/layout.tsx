import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppHeader } from './components/app-header'
import { SmoothScroll } from './components/smooth-scroll'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Nguyen Vo My Linh | Sale Executive',
    description: 'My portfolio website make by Baro Pham',
    icons: {
        icon: '/assets/images/avatar.jpg',
        shortcut: '/assets/images/avatar.jpg',
        apple: '/assets/images/avatar.jpg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main className="min-h-screen font-sans">
                    <SmoothScroll />
                    <AppHeader />
                    <div
                        className="
    pointer-events-none absolute inset-0 -z-10
    bg-[radial-gradient(2000px_1000px_at_50%_0%,rgba(186,230,253,0.6)_0%,rgba(255,255,255,1)_70%)]
    dark:bg-[radial-gradient(2000px_1000px_at_50%_0%,rgba(56,189,248,0.3)_0%,rgba(2,6,23,1)_85%)]
  "
                    />

                    <div className="mt-20">{children}</div>
                </main>
            </body>
        </html>
    )
}
