import { Mail, Send, Instagram, Youtube, Music2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-24 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="reveal flex items-center justify-center gap-3 mb-12">
          <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }} />
          <span className="gold-accent" style={{ fontSize: '0.75rem' }}>✦</span>
          <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="reveal text-[0.85rem] font-medium mb-4" style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
              <span className="gold-accent mr-2">✦</span> LET'S MAKE SOMETHING GREAT
            </div>
            <h2 className="reveal text-5xl md:text-6xl font-normal mb-5" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>Work With Us</h2>

            <div className="reveal inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-600 text-sm">Studio is Open — Available for Projects</span>
            </div>

            <p className="reveal text-[1.13rem] mb-8 leading-relaxed italic" style={{ color: 'var(--text-body)', fontFamily: "'Playfair Display', serif" }}>
              Whether you need music for a brand campaign, film, digital ad, or any creative project —
              we'd love to hear your story and craft the perfect soundtrack for it.
            </p>

            <div className="reveal space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                  <Mail className="w-5 h-5" style={{ color: 'var(--text-heading)' }} />
                </div>
                <div>
                  <div className="text-[0.85rem] mb-0.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>EMAIL</div>
                  <a href="mailto:hopesofficialmusic@gmail.com" className="text-[1.13rem] font-medium transition-colors"
                    style={{ color: 'var(--text-heading)' }}>hopesofficialmusic@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="text-[0.85rem] mb-3" style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>FOLLOW US</div>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/hopesofficialmusic' },
                  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@hopesofficialmusic' },
                  { icon: Music2, label: 'Music', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-heading)' }}>
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal rounded-lg p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>Get The Scoop</h3>
            <form className="space-y-5">
              {[
                { id: 'name', label: 'NAME', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'EMAIL', type: 'email', placeholder: 'your.email@example.com' },
                { id: 'brand', label: 'BRAND / COMPANY', type: 'text', placeholder: 'Your brand or project name' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-[0.65rem] mb-1.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}>{label}</label>
                  <input type={type} id={id} placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{ background: 'var(--bg-input)', border: '1px solid var(--border-light)', color: 'var(--text-heading)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(197,160,89,0.1)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.boxShadow = 'none'; }} />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-[0.65rem] mb-1.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}>TELL US ABOUT YOUR PROJECT</label>
                <textarea id="message" rows={4} placeholder="What kind of music are you looking for?"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all duration-200"
                  style={{ background: 'var(--bg-input)', border: '1px solid var(--border-light)', color: 'var(--text-heading)' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(197,160,89,0.1)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.boxShadow = 'none'; }} />
              </div>
              <button type="submit"
                className="w-full py-3.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'var(--bg-button)', color: 'var(--text-on-dark)', letterSpacing: '0.12em' }}>
                SEND MESSAGE <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
