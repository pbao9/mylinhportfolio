import Link from 'next/link'
import {
    Info,
    FileText,
    FolderKanban,
    Cog,
    MessageCircle,
    BookOpenText,
    Mail,
} from 'lucide-react'

type NavItem = {
    label: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    active?: boolean
}

const navItems: NavItem[] = [
    { label: 'About Me', href: '#about', icon: Info, active: true },
    { label: 'Resume', href: '#resume', icon: FileText },
    { label: 'Portfolio', href: '#portfolio', icon: FolderKanban },
    { label: 'Service', href: '#service', icon: Cog },
    { label: 'Testimonial', href: '#testimonial', icon: MessageCircle },
    { label: 'Blog', href: '#blog', icon: BookOpenText },
    { label: 'Contact', href: '#contact', icon: Mail },
]

export const Sidebar = () => {
    return (
        <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-3">
                {navItems.map(({ label, href, icon: Icon, active }) => (
                    <Link
                        key={label}
                        href={href}
                        className={`flex items-center gap-3 rounded-xl border px-5 py-4 transition-colors ${
                            active
                                ? 'border-primary bg-secondary text-foreground'
                                : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                    >
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{label}</span>
                    </Link>
                ))}
            </div>
        </aside>
    )
}


