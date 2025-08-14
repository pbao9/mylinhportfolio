import Link from 'next/link'
import { Github, Linkedin, MessageCircle, Mail, Facebook, Instagram } from 'lucide-react'

export const AppFooter = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="mx-auto max-w-6xl px-6 py-8 md:py-10 mb-16">
            <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                <div className="flex flex-wrap items-center gap-1">
                    <span>© {year} /</span>
                    <span className="font-medium text-foreground">
                        Nguyen Vo My Linh
                    </span>
                    <span>/</span>
                    <span>Build your portfolio with</span>
                    <Link
                        href="https://baro-dev.io.vn"
                        target="_blank"
                        className="text-primary hover:underline"
                    >
                        Baro Dev
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Facebook className="h-4 w-4" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Threads"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Instagram className="h-4 w-4" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Email"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Mail className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
