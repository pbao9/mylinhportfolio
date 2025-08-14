'use client'

import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Initialize from localStorage or prefers-color-scheme
        const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const enableDark = stored ? stored === 'dark' : prefersDark
        if (enableDark) {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }, [])

    const toggle = () => {
        const next = !isDark
        setIsDark(next)
        const root = document.documentElement
        if (next) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggle}
            className="rounded-full p-1.5 hover:bg-gray-200/60 dark:hover:bg-white/10 transition-colors"
        >
            {isDark ? (
                <SunIcon className="h-4 w-4" />
            ) : (
                <MoonIcon className="h-4 w-4" />
            )}
        </button>
    )
}


