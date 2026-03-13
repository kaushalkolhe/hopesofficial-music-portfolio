import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink, Youtube, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const videos = [
    { id: 'ylLcAjHB6fA', title: 'Rehem Kar', subtitle: 'Sufi Song · Vinay Verma Collective · Saha Records', category: 'Sufi / Devotional', role: 'Music Production & Composition' },
    { id: 'WNUCInThVCQ', title: 'Baat', subtitle: 'Official Music Video · Vinay Verma Collective · Saha Records', category: 'Indie / Pop', role: 'Mix, Mastering & Additional Production' },
    { id: 'hLZyBSEt9Og', title: 'Reel Star Rap Song', subtitle: 'Bagh Tuza Bap Alaa · Patya The Doc · Shubham Bhat', category: 'Hip-Hop / Rap', role: 'Beat Production & Sound Design' },
    { id: 'lcLoMjAr-3c', title: 'Tu Kahaan Hai?', subtitle: 'Akanksha Sethi · Orchard Enterprises', category: 'Indie / Soulful', role: 'Full Musical Arrangement & Scoring' },
    { id: 'Y7Wglp7wPGU', title: 'Kahani', subtitle: 'Akanksha Sethi · TuneCore · 2026', category: 'Indie / Pop', role: 'Music Production & Mix Mastering' },
    { id: '6mEieFSZv08', title: 'Paaya Maine Khudko', subtitle: 'Official Music Video · Lost & Found In Singapore · MX Player', category: 'Film / Web Series', role: 'Soundtrack Composition & Sound Design' },
    { id: 'caA4fJQdFvk', title: 'Nacha Danana', subtitle: 'Super Duperr · Lalit Prabhakar · Zee Music Marathi', category: 'Marathi / Film', role: 'Mix Engineering & Final Master' },
    { id: '5CfBJt2q6Vg', title: 'Vande Mataram', subtitle: 'Vinay Verma Collective ft. Budapest Scoring Orchestra', category: 'Orchestral / Patriotic', role: 'Orchestral Arrangement & Mixing' },
];

const brands = [
    'Réal Fruit Juice', 'Mamaearth x Zepto', 'Zouk Bags', 'TooYumm x Varun Dhawan',
    'Vadilal x Vir Das', 'TruNativ', '10X Mustard Oil', 'RealMe x Varun Sharma',
    'Bacca Bucci x Rohit Saraf', 'Flipkart x Suryakumar', 'Campus x Naila Agrawal',
    'Taco Bell x Sreeleela', "The Baker's Dozen",
];

function VideoCard({ video, onPlay }: { video: typeof videos[0]; onPlay: () => void }) {
    const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    return (
        <div className="video-card group cursor-pointer" onClick={onPlay}>
            <div className="relative overflow-hidden rounded-lg" style={{ border: '1px solid var(--border-light)' }}>
                <img src={thumb} alt={video.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }} />
                <div className="video-card-overlay">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                        style={{ background: 'var(--bg-card)' }}>
                        <Play className="w-6 h-6 ml-0.5" style={{ color: 'var(--text-heading)' }} fill="var(--text-heading)" />
                    </div>
                    <h3 className="text-white font-normal text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{video.title}</h3>
                    <p className="text-xs" style={{ color: 'rgba(245,240,232,0.7)', letterSpacing: '0.1em' }}>{video.category}</p>
                </div>
            </div>
        </div>
    );
}

function InlinePlayer({ video, onClose }: { video: typeof videos[0], onClose: () => void }) {
    const [showRole, setShowRole] = useState(true);

    // Reset role timer when video changes
    useEffect(() => {
        setShowRole(true);
        const t = setTimeout(() => setShowRole(false), 5500);
        return () => clearTimeout(t);
    }, [video.id]);

    return (
        <div className="mb-12 rounded-xl overflow-hidden relative shadow-2xl animate-fade-in" style={{ border: '1px solid var(--border-light)', animation: 'fadeIn 0.5s ease-out forwards' }}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe className="absolute inset-0 w-full h-full z-0"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title="YouTube video player" />
                
                {/* Close Button top-right, inside video container overlaying iframe */}
                <button onClick={onClose} 
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-black/50 hover:bg-black/80 hover:scale-105" 
                    style={{ color: 'var(--accent-gold)', backdropFilter: 'blur(4px)' }}>
                    <X className="w-6 h-6" />
                </button>

                {/* 5-second intro message flash INSIDE video boundaries */}
                <div className={`absolute bottom-10 left-6 md:bottom-14 md:left-8 z-20 transition-all duration-[2500ms] ease-in-out pointer-events-none ${showRole ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="rounded-md px-5 py-3 md:px-8 md:py-3.5 shadow-2xl max-w-sm md:max-w-2xl flex flex-col md:flex-row md:items-center gap-1 md:gap-5" 
                         style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                        <div className="flex items-center gap-2 text-[0.65rem] md:text-xs uppercase font-medium tracking-widest whitespace-nowrap flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent-gold)' }} />
                            Our Contribution <span className="hidden md:inline gold-accent ml-2 relative -top-[1px]">|</span>
                        </div>
                        <div className="text-base md:text-[1.15rem] leading-snug font-normal" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                            {video.role}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Showcase() {
    const [activeVideoObj, setActiveVideoObj] = useState<typeof videos[0] | null>(null);
    const sectionRef = useScrollReveal();
    const playerRef = useRef<HTMLDivElement>(null);

    const handlePlay = (video: typeof videos[0]) => {
        setActiveVideoObj(video);
        // Smooth scroll to the player area when a video is clicked so it doesn't open off-screen
        setTimeout(() => {
            playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    return (
        <section id="showcase" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-24 overflow-hidden"
            style={{ background: 'var(--bg-secondary)' }}>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 text-[0.85rem] font-medium"
                            style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                            <Youtube className="w-4 h-4 gold-accent" /> OUR WORK ON YOUTUBE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>Showcase</h2>
                        <p className="text-[1.13rem] max-w-xl italic" style={{ color: 'var(--text-muted)', fontFamily: "'Playfair Display', serif" }}>
                            Welcome to our creative space — here's your backstage pass to our world!
                        </p>
                    </div>
                    <a href="https://www.youtube.com/@hopesofficialmusic" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:scale-105 flex-shrink-0"
                        style={{ background: 'var(--bg-button)', color: 'var(--text-on-dark)', letterSpacing: '0.1em' }}>
                        <Youtube className="w-3.5 h-3.5" /> VIEW CHANNEL <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                {/* Inline Video Player Container */}
                <div ref={playerRef}>
                    {activeVideoObj && <InlinePlayer video={activeVideoObj} onClose={() => setActiveVideoObj(null)} />}
                </div>

                <div className="masonry-grid">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video}
                            onPlay={() => handlePlay(video)} />
                    ))}
                </div>

                <div className="reveal mt-16 py-8" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                    <h3 className="text-center text-[1.13rem] font-normal mb-6 italic" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                        <span className="gold-accent mr-2">✦</span> Brand Campaigns We've Scored <span className="gold-accent ml-2">✦</span>
                    </h3>
                    <div className="brand-ticker">
                        <div className="brand-ticker-track">
                            {[...brands, ...brands].map((brand, i) => (
                                <span key={`${brand}-${i}`} className="brand-ticker-item text-sm font-medium"
                                    style={{ color: 'var(--text-heading)', letterSpacing: '0.08em' }}>
                                    {brand}<span className="gold-accent mx-4">·</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
