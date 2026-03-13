import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/ThemeProvider';

const navItems = [
  { label: 'ABOUT', id: 'about' },
  { label: 'SHOWCASE', id: 'showcase' },
  { label: 'CONTACT', id: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'showcase', 'contact'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActive(id); },
          { threshold: 0.3 }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6" style={{ height: '70px', display: 'flex', alignItems: 'stretch' }}>
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')}
            className="flex items-center h-full hover:opacity-80 transition-opacity">
            <div style={{ height: '70px', width: '210px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/logo.png"
                alt="HOPESOFFICIAL"
                style={{
                  position: 'absolute',
                  height: '141px',
                  width: 'auto',
                  top: '50%',
                  left: '0',
                  transform: 'translateY(-50%)',
                  filter: theme === 'dark' ? 'invert(1) brightness(2)' : 'none',
                }}
              />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navItems.map(({ label, id }) => (
              <button key={id} onClick={() => scrollToSection(id)}
                className="relative text-xs font-medium transition-colors duration-200"
                style={{
                  color: active === id ? 'var(--text-heading)' : 'var(--text-muted)',
                  letterSpacing: '0.15em',
                }}>
                {label}
                <span className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: active === id ? '100%' : '0%',
                    background: 'var(--accent-gold)',
                  }} />
              </button>
            ))}

            {/* Theme toggle */}
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light'
                ? <Moon className="w-4 h-4" />
                : <Sun className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
              }
            </button>

            <button onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 text-xs font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--bg-button)',
                color: 'var(--text-on-dark)',
                letterSpacing: '0.12em',
              }}>
              WORK WITH US
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light'
                ? <Moon className="w-4 h-4" />
                : <Sun className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
              }
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-1" style={{ color: 'var(--text-heading)' }}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div style={{
          maxHeight: isOpen ? '300px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, opacity 0.25s ease',
        }}>
          <div className="flex flex-col gap-4 pt-4 pb-4">
            {navItems.map(({ label, id }) => (
              <button key={id} onClick={() => scrollToSection(id)}
                className="text-left text-xs font-medium"
                style={{ color: active === id ? 'var(--text-heading)' : 'var(--text-muted)', letterSpacing: '0.15em' }}>
                {label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 text-xs font-semibold text-center"
              style={{ background: 'var(--bg-button)', color: 'var(--text-on-dark)', letterSpacing: '0.12em' }}>
              WORK WITH US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
