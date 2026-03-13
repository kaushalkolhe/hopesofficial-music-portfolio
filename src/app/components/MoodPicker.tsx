import { useState } from 'react';

const moods = [
    {
        label: 'Chill',
        emoji: '🌙',
        description: 'Laid-back ambient vibes',
        tracks: ['Midnight Sessions', 'Analog Dreams', 'Wavelength'],
        gradient: 'from-blue-900/60 to-indigo-900/40',
        glow: '#4f46e5',
        border: 'border-blue-500/40',
        bg: '#06071a',
    },
    {
        label: 'Dark',
        emoji: '⚡',
        description: 'Brooding & intense textures',
        tracks: ['Urban Echoes', 'Midnight Drive', 'Reflections'],
        gradient: 'from-gray-900/80 to-black',
        glow: '#7c3aed',
        border: 'border-purple-500/40',
        bg: '#05000f',
    },
    {
        label: 'Energetic',
        emoji: '🔥',
        description: 'High-energy beats & drops',
        tracks: ['Electric Soul', 'Neon Nights', 'Urban Echoes'],
        gradient: 'from-orange-900/50 to-red-900/40',
        glow: '#f97316',
        border: 'border-orange-500/40',
        bg: '#1a0800',
    },
    {
        label: 'Romantic',
        emoji: '💜',
        description: 'Soft melodies & warmth',
        tracks: ['Summer Frequencies', 'Analog Dreams', 'Reflections'],
        gradient: 'from-pink-900/50 to-rose-900/40',
        glow: '#ec4899',
        border: 'border-pink-500/40',
        bg: '#1a0010',
    },
    {
        label: 'Epic',
        emoji: '🎬',
        description: 'Cinematic & orchestral power',
        tracks: ["Echoes of Tomorrow", 'Starbound Odyssey', 'Neon Nights'],
        gradient: 'from-emerald-900/50 to-teal-900/40',
        glow: '#10b981',
        border: 'border-emerald-500/40',
        bg: '#001a12',
    },
];

export function MoodPicker() {
    const [active, setActive] = useState<number | null>(null);
    const selected = active !== null ? moods[active] : null;

    return (
        <section
            id="mood"
            className="relative py-24 overflow-hidden transition-colors duration-700"
            style={{
                background: selected
                    ? `radial-gradient(ellipse at center, ${selected.glow}22 0%, ${selected.bg} 70%)`
                    : 'linear-gradient(to bottom, #0a0015, #050010)',
            }}
        >
            {/* Decorative animated ring */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: selected
                        ? `radial-gradient(circle at 50% 50%, ${selected.glow}18 0%, transparent 70%)`
                        : 'none',
                    transition: 'all 0.8s ease',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border text-sm"
                        style={{ borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.08)', color: '#c084fc' }}
                    >
                        <span className="animate-pulse">●</span> Interactive Experience
                    </div>
                    <h2 className="text-4xl md:text-5xl text-white mb-4">
                        What's Your <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vibe</span> Today?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Pick a mood — discover the tracks that match your energy right now.
                    </p>
                </div>

                {/* Mood cards */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {moods.map((mood, i) => (
                        <button
                            key={mood.label}
                            onClick={() => setActive(active === i ? null : i)}
                            className={`group relative px-6 py-4 rounded-2xl border transition-all duration-400 flex flex-col items-center gap-2 min-w-[120px] ${mood.border} ${active === i
                                    ? `bg-gradient-to-br ${mood.gradient}`
                                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                                }`}
                            style={{
                                boxShadow: active === i ? `0 0 24px ${mood.glow}55` : 'none',
                                transform: active === i ? 'translateY(-4px) scale(1.06)' : 'none',
                                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }}
                        >
                            <span className="text-3xl">{mood.emoji}</span>
                            <span className="text-white font-semibold text-sm">{mood.label}</span>
                        </button>
                    ))}
                </div>

                {/* Track list reveal */}
                <div
                    style={{
                        maxHeight: selected ? '220px' : '0px',
                        opacity: selected ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.5s ease, opacity 0.4s ease',
                    }}
                >
                    {selected && (
                        <div className="max-w-lg mx-auto rounded-2xl border border-white/10 p-6"
                            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)' }}>
                            <div className="text-center mb-4">
                                <p className="text-purple-300 text-sm mb-1">{selected.emoji} {selected.label} — {selected.description}</p>
                                <p className="text-gray-500 text-xs">Tracks that match this vibe</p>
                            </div>
                            <div className="space-y-3">
                                {selected.tracks.map((track, j) => (
                                    <div key={j} className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                                        style={{ background: `${selected.glow}18`, border: `1px solid ${selected.glow}30` }}>
                                        <div className="flex items-end gap-0.5 h-5">
                                            {[1, 2, 3].map(k => (
                                                <div key={k} className="w-0.5 rounded-full"
                                                    style={{
                                                        background: selected.glow,
                                                        animation: `equalizerBar ${0.4 + k * 0.2}s ease-in-out infinite alternate`,
                                                        minHeight: '3px',
                                                    }} />
                                            ))}
                                        </div>
                                        <span className="text-white text-sm">{track}</span>
                                        <span className="ml-auto text-gray-500 text-xs">#{j + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes equalizerBar {
          from { height: 3px; }
          to   { height: 18px; }
        }
      `}</style>
        </section>
    );
}
