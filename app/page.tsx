import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { VietnamClock } from './components/vietnam-clock'
import {
    Home as HomeIcon,
    Briefcase,
    BookText,
    Images,
    Github,
    Linkedin,
    MessageCircle,
    Mail,
    ChevronRight,
    Facebook,
} from 'lucide-react'

export default function Home() {
  return (
        <div className="relative">
            

            <div className="mx-auto max-w-6xl px-6 pt-10">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Asia/Ho_Chi_Minh</span>
                    <VietnamClock />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
                    <aside className="hidden lg:block">
                        <div className="sticky top-28 space-y-6 text-sm">
                            <a
                                href="#intro"
                                className="block text-muted-foreground hover:text-foreground"
                            >
                                Introduction
                            </a>
                            <a
                                href="#experience"
                                className="block text-muted-foreground hover:text-foreground"
                            >
                                Work Experience
                            </a>
                            <a
                                href="#studies"
                                className="block text-muted-foreground hover:text-foreground"
                            >
                                Studies
                            </a>
                            <a
                                href="#skills"
                                className="block text-muted-foreground hover:text-foreground"
                            >
                                Soft skills
                            </a>
                        </div>
                    </aside>

                    <main>
                        <section id="intro" className="">
                            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="relative h-28 w-28 overflow-hidden rounded-full border bg-white shadow md:h-32 md:w-32">
                                        <Image
                                            src={'/assets/images/avatar.jpg'}
                                            alt="avatar"
                                            fill
                                            sizes="(min-width: 768px) 128px, 112px"
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                                            Nguyen Vo My Linh
                                        </h1>
                                        <p className="mt-1 text-lg text-muted-foreground">
                                            Sale Executive
                                        </p>
                                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                            <span className="inline-flex items-center gap-1 rounded-full border bg-white/70 px-2 py-1">
                                                Asia/Ho Chi Minh
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border bg-white/70 px-2 py-1">
                                                English
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border bg-white/70 px-2 py-1">
                                                Vietnamese
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full gap-2 sm:w-auto">
                                    <Button
                                        className="w-full sm:w-auto"
                                        size="lg"
                                    >
                                        Schedule a call{' '}
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5"
                                >
                                    <Facebook className="h-4 w-4" /> Facebook
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5"
                                >
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5"
                                >
                                    <MessageCircle className="h-4 w-4" />{' '}
                                    Threads
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5"
                                >
                                    <Mail className="h-4 w-4" /> Email
                                </a>
                            </div>

                            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
                                I am a dynamic sales professional with over 3 years of experience in technology
                                services and education. Skilled in communication, negotiation, and customer care, I
                                consistently meet and exceed monthly sales targets, reaching 200%–300% in some months.
                                In addition, I have hands-on experience as a teaching assistant, working closely with
                                foreign teachers to ensure a high-quality learning environment for students. I aim to
                                leverage my skills and experience to contribute to the sustainable growth of the
                                organization.
                            </p>
                        </section>

                        <section id="experience" className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Work Experience
                            </h2>
                            <div className="mt-6 space-y-8">
                                <div>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span className="font-semibold text-foreground">
                                            Digital World Technology Solutions JSC
                                        </span>
                                        <span>2024 – 2025</span>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Senior Account Executive
                                    </p>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                                        <li>Made outbound calls to introduce services to business owners in the software and technology sector.</li>
                                        <li>Researched potential customer data from sources such as Facebook and business directories.</li>
                                        <li>Met with both individual and corporate clients to introduce and consult on the company’s services.</li>
                                        <li>Updated industry and service knowledge through the Internet and internal training courses.</li>
                                        <li>Achieved 80%–100% of monthly sales targets; exceeded targets by 200%–300% in several months.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span className="font-semibold text-foreground">MindX Technology School JSC</span>
                                        <span>2022 – 2024</span>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">Sales Executive</p>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                                        <li>Introduced programming and technology courses to students from grades 3 to 12.</li>
                                        <li>Researched potential customer data online and arranged meetings with parents for consultation.</li>
                                        <li>Provided customer care and support during the course period.</li>
                                        <li>Contributed to creating a positive learning environment for students.</li>
                                        <li>Consistently achieved over 80% of monthly sales targets.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span className="font-semibold text-foreground">IALC English Center</span>
                                        <span>Apr 2024 – Aug 2024</span>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">Teaching Assistant</p>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                                        <li>Assisted foreign teachers in maintaining class order and ensuring lesson quality.</li>
                                        <li>Provided translations for difficult words, sentences, and terms when necessary.</li>
                                        <li>Supported students in completing class assignments and checked homework completion.</li>
                                        <li>Monitored student progress and reported regularly to the Academic Department.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="studies" className="mt-14">
                            <h2 className="text-2xl font-semibold">Studies</h2>
                            <div className="mt-3 space-y-2 text-muted-foreground">
                                <p>
                                    <span className="font-medium text-foreground">University of Finance – Marketing</span> (2018 – 2022)
                                </p>
                                <p>Bachelor’s Degree in General Business Administration</p>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold">Certificates</h3>
                                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                                    <li>TOEIC 2 Skills: 525</li>
                                </ul>
                            </div>
                        </section>

                        <section id="skills" className="mt-14">
                            <h2 className="text-2xl font-semibold">Soft skills</h2>
                            <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
                                <li>Communication</li>
                                <li>Fluent speaking</li>
                                <li>Presentation skills</li>
                                <li>Quick problem-solving and situational handling</li>
                                <li>Fast decision-making in English</li>
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
    </div>
    )
}
