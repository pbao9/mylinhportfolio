"use client"

import { useEffect, useState } from 'react'

type VietnamClockProps = {
    className?: string
}

function formatVietnamTime(date: Date): string {
    return new Intl.DateTimeFormat('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Ho_Chi_Minh',
    }).format(date)
}

export function VietnamClock({ className }: VietnamClockProps) {
    const [time, setTime] = useState<string>('')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setTime(formatVietnamTime(new Date()))
        const intervalId = setInterval(() => {
            setTime(formatVietnamTime(new Date()))
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <span suppressHydrationWarning className={className}>
            {mounted ? time : ''}
        </span>
    )
}


