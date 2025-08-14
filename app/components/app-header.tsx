'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Briefcase, Images, HomeIcon, BookText, User2Icon } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type NavItem = {
    href: string
    label: string
    Icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
    { href: '/about', label: 'About', Icon: User2Icon },
    { href: '/work', label: 'Work', Icon: Briefcase },
    { href: '/blog', label: 'Blog', Icon: BookText },
    { href: '/gallery', label: 'Gallery', Icon: Images },
]

export const AppHeader = () => {
    const pathname = usePathname()

    // hàm check active: exact cho root, startsWith cho các route khác
    const isActivePath = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href)

    // Indicator (top nav) using measured position so it glides between items on route change
    const containerRef = useRef<HTMLDivElement | null>(null)
    const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
    const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null)

    useEffect(() => {
        const activeHref = ['/','/about','/work','/blog','/gallery'].find(h => isActivePath(h)) || '/'
        const el = itemRefs.current[activeHref]
        const parent = containerRef.current
        if (el && parent) {
            const parentRect = parent.getBoundingClientRect()
            const rect = el.getBoundingClientRect()
            setIndicator({ left: rect.left - parentRect.left, width: rect.width })
        }
    }, [pathname])

    return (
        <>
            {/* Desktop / tablet: top nav */}
            <header className="hidden md:block fixed top-8 left-0 right-0 z-50 mx-auto max-w-md">
                <nav
                    className={[
                        'mt-4 flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm backdrop-blur-md',
                        'bg-white/70 border-black/10',
                        'dark:bg-neutral-900/60 dark:border-white/10',
                        'overflow-x-auto whitespace-nowrap',
                    ].join(' ')}
                >
                    {/* Home */}
                    <Link
                        href="/"
                        aria-label="Home"
                        className={[
                            'mr-1 border-r pr-3',
                            'border-black/10 dark:border-white/10',
                            'text-foreground/80 hover:text-foreground',
                            'transition-colors',
                        ].join(' ')}
                    >
                        <HomeIcon className="h-4 w-4" />
                    </Link>

                    {/* Nav items */}
                    <LayoutGroup>
                        <div ref={containerRef} className="relative flex w-full justify-between gap-1">
                            {indicator && (
                                <motion.span
                                    aria-hidden
                                    className="absolute top-1/2 -z-10 h-[28px] -translate-y-1/2 rounded-full bg-black/[0.06] dark:bg-white/[0.10]"
                                    animate={{ left: indicator.left, width: indicator.width }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            {navItems.map(({ href, label, Icon }) => {
                                const active = isActivePath(href)
                                return (
                                    <div key={href} className="relative flex items-center">
                                        <Link
                                            href={href}
                                            aria-current={active ? 'page' : undefined}
                                            className={[
                                                'group relative flex items-center gap-2 rounded-full px-2 py-1 text-sm transition-all',
                                                'text-muted-foreground hover:text-foreground',
                                                'hover:bg-black/[0.04] dark:hover:bg-white/[0.06]',
                                                active
                                                    ? [
                                                          'bg-black/[0.06] dark:bg-white/[0.10]',
                                                          'text-foreground',
                                                          'border border-black/10 dark:border-white/10',
                                                          'shadow-sm',
                                                      ].join(' ')
                                                    : 'border border-transparent',
                                            ].join(' ')}
                                            ref={(el) => {
                                                itemRefs.current[href] = el
                                            }}
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span>{label}</span>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </LayoutGroup>

                    {/* Theme toggle */}
                    <div
                        className={[
                            'ml-1 border-l pl-3',
                            'border-black/10 dark:border-white/10',
                        ].join(' ')}
                    >
                        <ThemeToggle />
                    </div>
                </nav>
            </header>

            {/* Mobile: bottom fixed nav with small icons */}
            <div className="md:hidden fixed bottom-4 left-1/2 z-50 w-[min(480px,92%)] -translate-x-1/2">
                <nav className="flex items-center justify-between rounded-full border bg-white/80 px-2 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70">
                    <LayoutGroup>
                        <div className="flex w-full items-center justify-between">
                            {[{ href: '/', label: 'Home', Icon: HomeIcon }, ...navItems].map(
                                ({ href, label, Icon }) => {
                                    const active = isActivePath(href)
                                    return (
                                        <Link
                                            key={href}
                                            href={href}
                                            aria-label={label}
                                            aria-current={active ? 'page' : undefined}
                                            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                                        >
                                            <Icon className="h-4 w-4" />
                                            <AnimatePresence>
                                                {active && (
                                                    <motion.span
                                                        layoutId="active-pill"
                                                        className="absolute inset-0 -z-10 rounded-full bg-black/[0.06] dark:bg-white/[0.10]"
                                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </Link>
                                    )
                                }
                            )}
                            <div className="relative flex h-9 w-9 items-center justify-center rounded-full">
                                <ThemeToggle />
                            </div>
                        </div>
                    </LayoutGroup>
                </nav>
            </div>
        </>
    )
}
