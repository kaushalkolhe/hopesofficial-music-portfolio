import { Heart, Instagram, Youtube } from 'lucide-react';
import { useTheme } from '../hooks/ThemeProvider';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent-gold), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-3">
            <img src="/logo.png" alt="HOPESOFFICIAL"
              style={{ height: '180px', width: 'auto', filter: theme === 'dark' ? 'invert(1) brightness(2)' : 'none' }} />
          </div>
          <p className="text-[0.95rem] max-w-lg mx-auto" style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            Music for Advertisements · Brand Films · Digital Campaigns
          </p>
          <p className="text-[1.13rem] mt-3 italic gold-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
            "You Tell The Story, We Set The Tone."
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {[
            { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/hopesofficialmusic' },
            { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@hopesofficialmusic' },
          ].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid var(--border-light)', color: 'var(--text-heading)' }}>
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>© 2026 HOPESOFFICIAL. All rights reserved.</div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5" style={{ color: 'var(--text-heading)', fill: 'var(--text-heading)' }} />
            <span>for music & brands</span>
          </div>
          <a href="mailto:hopesofficialmusic@gmail.com" className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}>
            hopesofficialmusic@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
