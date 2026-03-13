import { useState, useEffect } from 'react';
import { Play, Headphones } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useMagneticButton } from '../hooks/useMagneticButton';
import { useTheme } from '../hooks/ThemeProvider';

const roles = ['Music Producers', 'Composers', 'Sound Designers', 'Ad Scoring Experts'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const sectionRef = useScrollReveal();
  const magneticWatch = useMagneticButton(0.25);
  const magneticMeet = useMagneticButton(0.25);
  const { theme } = useTheme();

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex((c) => c + 1); }, 85);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex((c) => c - 1); }, 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.35) brightness(0.45)' }}
          poster="https://images.unsplash.com/photo-1634041695335-ee19a4155abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080">
          <source src="https://cdn.pixabay.com/video/2020/08/09/46332-449702891_large.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2016/09/01/4898-181380498_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'var(--bg-hero-overlay)' }} />
        {theme === 'dark' && (
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 70%, var(--bg-hero-gradient-end) 100%)` }} />
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Role badge */}
        <div className="reveal inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full"
          style={{ background: 'rgba(248,244,239,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(248,244,239,0.2)' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-gold)' }} />
          <span className="text-xs uppercase" style={{ color: '#F5F0E8', letterSpacing: '0.15em' }}>
            {displayed || '\u00A0'}<span className="animate-pulse font-thin">|</span>
          </span>
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-[5.5rem] font-normal mb-2 leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: '#F5F0E8' }}>
          You Tell The Story,
        </h1>
        <h1 className="reveal text-5xl md:text-7xl lg:text-[5.5rem] font-normal mb-10 leading-[1.1] tracking-tight italic"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--accent-gold-light)' }}>
          We Set The Tone.
        </h1>

        <p className="reveal text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(245,240,232,0.75)' }}>
          Powerful music for <em style={{ color: '#F5F0E8' }}>advertisements</em>, <em style={{ color: '#F5F0E8' }}>brand films</em>, and digital
          campaigns. We make your message unforgettable.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button ref={magneticWatch.ref} onMouseMove={magneticWatch.onMouseMove} onMouseLeave={magneticWatch.onMouseLeave}
            onClick={() => scrollTo('showcase')}
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: '#4A1942', color: '#F5F0E8', fontSize: '0.7rem', letterSpacing: '0.15em' }}>
            <Play className="w-3.5 h-3.5" fill="#F5F0E8" />
            WATCH OUR WORK
          </button>
          <button ref={magneticMeet.ref} onMouseMove={magneticMeet.onMouseMove} onMouseLeave={magneticMeet.onMouseLeave}
            onClick={() => scrollTo('about')}
            className="px-8 py-4 transition-all duration-300 hover:scale-105"
            style={{ border: '1px solid rgba(245,240,232,0.4)', color: '#F5F0E8', fontSize: '0.7rem', letterSpacing: '0.15em' }}>
            <span className="flex items-center gap-3 justify-center">
              <Headphones className="w-3.5 h-3.5" />
              MEET THE TEAM
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: 'rgba(245,240,232,0.3)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background: 'var(--accent-gold)' }} />
        </div>
      </div>
    </section>
  );
}
