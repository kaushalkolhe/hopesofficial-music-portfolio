import { useState } from 'react';
import { Music, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const releases = [
  {
    id: 1,
    title: "Neon Nights",
    type: "Album",
    year: "2025",
    tracks: 12,
    image: "https://images.unsplash.com/photo-1603850121303-d4ade9e5ba65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHBsYXllcnxlbnwxfHx8fDE3NzE5MTgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    color: '#a855f7',
  },
  {
    id: 2,
    title: "Wavelength",
    type: "EP",
    year: "2024",
    tracks: 6,
    image: "https://images.unsplash.com/photo-1771013071312-89c7c68a6f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxOTUzMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: '#6366f1',
  },
  {
    id: 3,
    title: "Summer Frequencies",
    type: "Single",
    year: "2024",
    tracks: 1,
    image: "https://images.unsplash.com/photo-1689793354800-de168c0a4c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzcxOTI2OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: '#f97316',
  },
  {
    id: 4,
    title: "Reflections",
    type: "Album",
    year: "2023",
    tracks: 10,
    image: "https://images.unsplash.com/photo-1598847873329-ed1608fb858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG1peGluZyUyMGNvbnNvbGV8ZW58MXx8fHwxNzcxOTUzMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: '#10b981',
  },
  {
    id: 5,
    title: "Midnight Drive",
    type: "EP",
    year: "2023",
    tracks: 5,
    image: "https://images.unsplash.com/photo-1634041695335-ee19a4155abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y2VyJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NzE4NzU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: '#ec4899',
  },
  {
    id: 6,
    title: "Electric Soul",
    type: "Single",
    year: "2022",
    tracks: 1,
    image: "https://images.unsplash.com/photo-1747494749226-2d5c08da6849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBpbnN0cnVtZW50cyUyMG11c2ljfGVufDF8fHx8MTc3MTk1MzM5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: '#eab308',
  }
];

export function Discography() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="discography" className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #07001a, #050010)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc' }}>
            ✦ Discography
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">All Releases</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A complete collection of my released works, from full albums to singles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((release) => (
            <div
              key={release.id}
              className="group relative rounded-2xl overflow-hidden border transition-all duration-500"
              style={{
                background: release.featured
                  ? `linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(5,0,20,0.99) 100%)`
                  : 'rgba(15,5,30,0.8)',
                borderColor: release.featured ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.06)',
                boxShadow: release.featured ? '0 0 32px rgba(168,85,247,0.12)' : 'none',
                transform: hovered === release.id ? 'translateY(-4px)' : 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setHovered(release.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {release.featured && (
                <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', boxShadow: '0 0 12px rgba(168,85,247,0.5)' }}>
                  🔥 Latest
                </div>
              )}

              {/* Vinyl record + cover image */}
              <div className="relative h-56 overflow-hidden flex items-center justify-center"
                style={{ background: '#08001f' }}>

                {/* Spinning vinyl behind cover */}
                <div
                  className="absolute w-48 h-48 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, #1a1a2e, #16213e, #0f3460, #1a1a2e)`,
                    animation: hovered === release.id ? 'vinylSpin 3s linear infinite' : 'none',
                    boxShadow: hovered === release.id ? `0 0 40px ${release.color}44` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}
                >
                  <div className="absolute inset-4 rounded-full border-2" style={{ borderColor: `${release.color}44` }} />
                  <div className="absolute inset-8 rounded-full border" style={{ borderColor: `${release.color}22` }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-black border-2" style={{ borderColor: release.color }} />
                  </div>
                </div>

                {/* Cover art on top */}
                <div className="relative w-28 h-28 rounded-lg overflow-hidden z-10 shadow-2xl transition-transform duration-500"
                  style={{ transform: hovered === release.id ? 'scale(0.88) rotate(-3deg)' : 'scale(1)' }}>
                  <ImageWithFallback
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${release.color}22`, color: release.color }}>
                    {release.type}
                  </span>
                </div>
                <h3 className="text-lg text-white font-semibold mb-3">{release.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /><span>{release.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Music className="w-3.5 h-3.5" />
                    <span>{release.tracks} {release.tracks === 1 ? 'track' : 'tracks'}</span>
                  </div>
                </div>
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300"
                  style={{
                    background: hovered === release.id
                      ? `linear-gradient(135deg, ${release.color}cc, ${release.color}88)`
                      : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${hovered === release.id ? release.color + '55' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes vinylSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
