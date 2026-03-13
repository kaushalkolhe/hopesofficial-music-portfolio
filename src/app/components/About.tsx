import { Music2, Headphones, Award, Mic2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
    { value: '50+', label: 'BRAND CAMPAIGNS', icon: Award },
    { value: '10+', label: 'YEARS COMBINED', icon: Music2 },
    { value: '20+', label: 'BRAND CLIENTS', icon: Mic2 },
    { value: '∞', label: 'STORIES TOLD', icon: Headphones },
];

export function About() {
    const sectionRef = useScrollReveal();

    return (
        <section id="about" ref={sectionRef as React.RefObject<HTMLElement>} className="relative overflow-hidden"
            style={{ background: 'var(--bg-primary)' }}>

            {/* Tagline */}
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="reveal text-lg md:text-xl leading-relaxed italic"
                    style={{ color: 'var(--text-body)', fontFamily: "'Playfair Display', serif" }}>
                    Our soundtracks enhance emotion, elevate storytelling, and make your
                    message unforgettable.{' '}
                    <span style={{ color: 'var(--text-heading)' }}>
                        When your brand speaks, we make sure it's heard — and felt.
                    </span>
                </p>
                <div className="reveal flex items-center justify-center gap-3 mt-12 mb-12">
                    <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }} />
                    <span className="gold-accent" style={{ fontSize: '0.75rem' }}>✦</span>
                    <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }} />
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <div className="reveal stats-grid" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '0.5rem' }}>
                    {stats.map(({ value, label, icon: Icon }) => (
                        <div key={label} className="text-center py-8 px-4">
                            <Icon className="w-5 h-5 mx-auto mb-3 gold-accent" />
                            <div className="text-4xl md:text-5xl font-normal mb-2"
                                style={{ color: 'var(--text-heading)', fontFamily: "'Playfair Display', serif" }}>
                                {value}
                            </div>
                            <div className="text-[0.65rem] font-medium" style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* THE DUO */}
            <div className="reveal text-center pb-8">
                <div className="flex items-center justify-center gap-4">
                    <span className="gold-accent" style={{ fontSize: '0.6rem' }}>✦</span>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-muted)', letterSpacing: '0.25em' }}>
                        T H E &nbsp; D U O
                    </span>
                    <span className="gold-accent" style={{ fontSize: '0.6rem' }}>✦</span>
                </div>
            </div>

            {/* Sharan */}
            <div className="glow-card grid md:grid-cols-2 gap-0 mb-0">
                <div className="relative overflow-hidden" style={{ minHeight: '520px' }}>
                    <img src="/team/sharan.jpg" alt="Sharan Moolethara" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center" style={{ background: 'var(--bg-card)' }}>
                    <div className="mb-4 text-[0.85rem] font-medium italic"
                        style={{ color: 'var(--text-heading)', letterSpacing: '0.08em', fontFamily: "'Playfair Display', serif" }}>
                        MUSIC PRODUCER · COMPOSER <span className="gold-accent ml-1">♬</span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-normal mb-2"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>Sharan</h3>
                    <p className="text-[0.9rem] mb-6 font-medium uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}>Sharan Moolethara</p>
                    <p className="text-[1.13rem] leading-[1.8] mb-8 italic" style={{ color: 'var(--text-body)', fontFamily: "'Playfair Display', serif" }}>
                        A music producer, pianist, composer, and occasionally a writer. With extensive experience in advertising music,
                        he crafts soundscapes that tell stories. Playing piano since the age of 8, music is at the heart of everything.
                        Holds a degree in Audio Engineering from <strong style={{ color: 'var(--text-heading)', fontStyle: 'normal' }}>KM Music Conservatory, A.R. Rahman</strong>.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Piano', 'Music Production', 'Composition', 'Ad Scoring', 'Songwriting'].map((skill) => (
                            <span key={skill} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Aditya */}
            <div className="glow-card grid md:grid-cols-2 gap-0">
                <div className="p-10 md:p-14 flex flex-col justify-center order-2 md:order-1" style={{ background: 'var(--bg-card)' }}>
                    <div className="mb-4 text-[0.85rem] font-medium italic"
                        style={{ color: 'var(--text-heading)', letterSpacing: '0.08em', fontFamily: "'Playfair Display', serif" }}>
                        MIX & MASTERING · SOUND DESIGNER <span className="gold-accent ml-1">♬</span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-normal mb-2"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>Aditya</h3>
                    <p className="text-[0.9rem] mb-6 font-medium uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}>Aditya Rana</p>
                    <p className="text-[1.13rem] leading-[1.8] mb-8 italic" style={{ color: 'var(--text-body)', fontFamily: "'Playfair Display', serif" }}>
                        A mix mastering engineer and sound designer specializing in SFX for films. Crafting high-quality mixes for a
                        wide array of ads, he brings depth and clarity to every sound. A guitarist for <strong style={{ color: 'var(--text-heading)', fontStyle: 'normal' }}>10+ years</strong>,
                        he pursued Audio Engineering at <strong style={{ color: 'var(--text-heading)', fontStyle: 'normal' }}>KM Music Conservatory, A.R. Rahman</strong>.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Mix & Mastering', 'Sound Design', 'Film SFX', 'Guitar', 'Audio Engineering'].map((skill) => (
                            <span key={skill} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden order-1 md:order-2" style={{ minHeight: '520px' }}>
                    <img src="/team/aditya.jpg" alt="Aditya Rana" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
                </div>
            </div>

            {/* Quote */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="reveal text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }} />
                        <span className="gold-accent" style={{ fontSize: '0.75rem' }}>✦</span>
                        <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }} />
                    </div>
                    <blockquote className="text-lg md:text-xl leading-relaxed italic px-6 py-8 rounded-lg"
                        style={{ color: 'var(--text-body)', fontFamily: "'Playfair Display', serif", background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                        <span className="text-2xl leading-none mr-1" style={{ color: 'var(--text-heading)' }}>"</span>
                        Together, we craft everything from catchy jingles to cinematic scores, ensuring seamless
                        music and sound design for any project.
                        <span className="text-2xl leading-none ml-1" style={{ color: 'var(--text-heading)' }}>"</span>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
