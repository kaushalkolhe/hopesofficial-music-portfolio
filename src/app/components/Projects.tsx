import { useState } from 'react';
import { Users, Film, Headphones, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Film Score — 'Echoes of Tomorrow'",
    category: "Film Scoring",
    description: "Original soundtrack for an independent sci-fi film, featuring orchestral arrangements and electronic elements.",
    icon: Film,
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    glow: '#3b82f6',
  },
  {
    id: 2,
    title: "Brand Campaign — TechFlow",
    category: "Commercial",
    description: "Created a suite of audio branding elements including logo sounds, background music, and sonic identity.",
    icon: Sparkles,
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    glow: '#a855f7',
  },
  {
    id: 3,
    title: "Collaboration with ARIA",
    category: "Artist Collaboration",
    description: "Produced and co-wrote 5 tracks for emerging artist ARIA's debut EP, blending pop and electronic influences.",
    icon: Users,
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
    glow: '#f97316',
  },
  {
    id: 4,
    title: "Podcast Theme Music",
    category: "Audio Branding",
    description: "Composed theme music and transition sounds for 'The Future Forward' podcast series.",
    icon: Headphones,
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    glow: '#10b981',
  },
  {
    id: 5,
    title: "Video Game Soundtrack",
    category: "Game Audio",
    description: "Created adaptive music system for indie adventure game 'Starbound Odyssey' with 20+ dynamic tracks.",
    icon: Sparkles,
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
    glow: '#6366f1',
  },
  {
    id: 6,
    title: "Live Performance Series",
    category: "Live Events",
    description: "Curated and performed in a monthly electronic music showcase at local venues, featuring original productions.",
    icon: Users,
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    glow: '#ec4899',
  }
];

const testimonials = [
  { text: '"The score elevated our film to a whole new level."', name: '— Alex R., Film Director' },
  { text: '"HOPES has an ear for emotion that is truly rare."', name: '— Maya L., Artist' },
  { text: '"Our brand sound is now instantly recognizable."', name: '— TechFlow Marketing' },
  { text: '"Working with HOPES was a game-changer for us."', name: '— ARIA, Singer' },
  { text: '"The game soundtrack is hauntingly beautiful."', name: '— Starbound Studios' },
];

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: '#050010' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 55%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc' }}>
            ✦ Projects & Collaborations
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">Creative Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A diverse range of creative work spanning film, commercials, collaborations, and live performances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const Icon = project.icon;
            const isHov = hovered === project.id;
            return (
              <div
                key={project.id}
                className="group relative p-6 rounded-2xl border transition-all duration-400 cursor-default"
                style={{
                  background: isHov
                    ? `linear-gradient(135deg, ${project.glow}14 0%, rgba(5,0,20,0.98) 100%)`
                    : 'rgba(15,5,30,0.8)',
                  borderColor: isHov ? `${project.glow}44` : 'rgba(255,255,255,0.06)',
                  boxShadow: isHov ? `0 8px 40px ${project.glow}22` : 'none',
                  transform: isHov ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)',
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300"
                  style={{
                    background: project.gradient,
                    boxShadow: isHov ? `0 0 20px ${project.glow}66` : 'none',
                    transform: isHov ? 'scale(1.1)' : 'scale(1)',
                  }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-xs font-semibold mb-2 transition-colors"
                  style={{ color: isHov ? project.glow : '#9ca3af' }}>
                  {project.category}
                </div>

                <h3 className="text-base text-white font-semibold mb-3 leading-snug">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                {/* Bottom gradient bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-500"
                  style={{
                    width: isHov ? '100%' : '0%',
                    background: project.gradient,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl border"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.05))',
              borderColor: 'rgba(168,85,247,0.25)',
              backdropFilter: 'blur(12px)',
            }}>
            <h3 className="text-2xl text-white font-bold mb-3">Interested in Collaborating?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I'm always open to new creative projects and partnerships. Let's make something amazing together.
            </p>
            <button
              className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                boxShadow: '0 0 28px rgba(168,85,247,0.4)',
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scrolling testimonials marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 px-6 py-4 rounded-xl border min-w-64"
                style={{ background: 'rgba(168,85,247,0.06)', borderColor: 'rgba(168,85,247,0.15)' }}>
                <p className="text-gray-300 text-sm italic mb-2">{t.text}</p>
                <p className="text-purple-400 text-xs">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
