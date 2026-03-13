import { useState } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const featuredProjects = [
  {
    id: 1,
    title: "Midnight Sessions",
    description: "A deep dive into ambient electronic soundscapes with atmospheric textures and evolving rhythms.",
    genre: "Electronic / Ambient",
    year: "2025",
    image: "https://images.unsplash.com/photo-1598847873329-ed1608fb858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG1peGluZyUyMGNvbnNvbGV8ZW58MXx8fHwxNzcxOTUzMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    genreColor: '#6366f1',
  },
  {
    id: 2,
    title: "Urban Echoes",
    description: "Hip-hop beats infused with jazz elements, creating a unique sound for the modern city.",
    genre: "Hip-Hop / Jazz",
    year: "2024",
    image: "https://images.unsplash.com/photo-1689793354800-de168c0a4c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzcxOTI2OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    genreColor: '#f97316',
  },
  {
    id: 3,
    title: "Analog Dreams",
    description: "A nostalgic journey through vintage synthesizers and tape-saturated warmth.",
    genre: "Synthwave / Retro",
    year: "2024",
    image: "https://images.unsplash.com/photo-1771013071312-89c7c68a6f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxOTUzMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    genreColor: '#ec4899',
  }
];

export function FeaturedWork() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="featured" className="py-24 relative overflow-hidden" style={{ background: '#050010' }}>
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc' }}>
            ✦ Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">My Latest Drops</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of my most recent and notable projects, spanning various genres and styles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(to bottom, rgba(30,10,60,0.9), rgba(5,0,20,0.99))',
                borderColor: 'rgba(168,85,247,0.15)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={() => { }}
              onMouseLeave={() => { }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,0,20,1) 0%, rgba(5,0,20,0.4) 50%, transparent 100%)' }} />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => setPlaying(playing === project.id ? null : project.id)}
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      boxShadow: '0 0 32px rgba(168,85,247,0.6)',
                    }}
                  >
                    {playing === project.id
                      ? <Pause className="w-5 h-5 text-white" />
                      : <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    }
                  </button>
                </div>

                {/* Genre badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: `${project.genreColor}cc`, backdropFilter: 'blur(8px)' }}>
                  {project.genre}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-white font-semibold">{project.title}</h3>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{project.year}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Equalizer bars */}
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-0.5 h-5">
                    {[1, 2, 3, 4, 5].map((k) => (
                      <div key={k} className="w-1 rounded-full"
                        style={{
                          background: project.genreColor,
                          animation: playing === project.id
                            ? `equalizerBar ${0.4 + k * 0.12}s ease-in-out infinite alternate`
                            : 'none',
                          height: playing === project.id ? undefined : '4px',
                          minHeight: '4px',
                          opacity: playing === project.id ? 1 : 0.4,
                        }} />
                    ))}
                  </div>
                  <button className="ml-auto inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
                    View Details <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 0 1px ${project.genreColor}55` }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes equalizerBar {
          from { height: 4px; }
          to   { height: 20px; }
        }
      `}</style>
    </section>
  );
}
