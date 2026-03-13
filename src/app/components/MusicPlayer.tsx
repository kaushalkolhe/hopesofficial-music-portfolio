import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music2 } from 'lucide-react';

const tracks = [
    { title: "Rehem Kar", artist: "Vinay Verma Collective · Saha Records", duration: "4:21" },
    { title: "Baat", artist: "Vinay Verma Collective · Saha Records", duration: "3:58" },
    { title: "Reel Star Rap Song", artist: "Patya The Doc · Shubham Bhat", duration: "3:12" },
    { title: "Tu Kahaan Hai?", artist: "Akanksha Sethi", duration: "4:05" },
    { title: "Kahani", artist: "Akanksha Sethi", duration: "3:47" },
    { title: "Paaya Maine Khudko", artist: "Lost & Found In Singapore · MX Player", duration: "4:33" },
    { title: "Nacha Danana", artist: "Super Duperr · Zee Music Marathi", duration: "3:28" },
    { title: "Vande Mataram", artist: "Vinay Verma Collective ft. Budapest Scoring Orchestra", duration: "5:15" },
];

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        handleNext();
                        return 0;
                    }
                    return prev + 0.3;
                });
            }, 100);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isPlaying, currentTrack]);

    const handleNext = () => {
        setCurrentTrack((prev) => (prev + 1) % tracks.length);
        setProgress(0);
    };

    const handlePrev = () => {
        setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
        setProgress(0);
    };

    const track = tracks[currentTrack];

    const formatProgress = (p: number) => {
        const totalSecs = (p / 100) * (parseInt(track.duration.split(':')[0]) * 60 + parseInt(track.duration.split(':')[1]));
        const m = Math.floor(totalSecs / 60);
        const s = Math.floor(totalSecs % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50"
            style={{
                background: 'rgba(248, 244, 239, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderTop: '1px solid #E0D8CE',
            }}>

            {/* Progress bar */}
            <div className="w-full h-0.5" style={{ background: '#E0D8CE' }}>
                <div
                    className="h-full transition-all duration-100"
                    style={{ width: `${progress}%`, background: '#4A1942' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                        style={{ background: '#4A1942' }}>
                        <Music2 className="w-5 h-5" style={{ color: '#F8F4EF' }} />
                    </div>
                    <div className="min-w-0">
                        <div className="text-sm font-medium truncate" style={{ color: '#2D2D2D' }}>{track.title}</div>
                        <div className="text-xs truncate" style={{ color: '#8A8A8A' }}>{track.artist}</div>
                    </div>
                </div>

                <div className="hidden sm:flex items-end gap-0.5 h-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-1 rounded-full"
                            style={{
                                background: '#4A1942',
                                height: isPlaying ? undefined : '4px',
                                animation: isPlaying ? `equalizerBar ${0.4 + i * 0.15}s ease-in-out infinite alternate` : 'none',
                                minHeight: '4px',
                            }} />
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={handlePrev} className="p-1.5 transition-colors" style={{ color: '#8A8A8A' }}>
                        <SkipBack className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: '#4A1942' }}>
                        {isPlaying
                            ? <Pause className="w-4 h-4" style={{ color: '#F8F4EF' }} />
                            : <Play className="w-4 h-4 ml-0.5" style={{ color: '#F8F4EF' }} fill="#F8F4EF" />
                        }
                    </button>
                    <button onClick={handleNext} className="p-1.5 transition-colors" style={{ color: '#8A8A8A' }}>
                        <SkipForward className="w-4 h-4" />
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-3 text-xs" style={{ color: '#8A8A8A' }}>
                    <span>{formatProgress(progress)} / {track.duration}</span>
                    <Volume2 className="w-4 h-4" />
                </div>
            </div>

            <style>{`
        @keyframes equalizerBar {
          from { height: 4px; }
          to { height: 22px; }
        }
      `}</style>
        </div>
    );
}
