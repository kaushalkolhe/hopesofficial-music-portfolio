export function FloatingNotes() {
    const notes = [
        { symbol: '♪', left: '4%', delay: '0s', duration: '14s', size: '1.6rem' },
        { symbol: '♫', left: '12%', delay: '2.5s', duration: '18s', size: '1.2rem' },
        { symbol: '♬', left: '20%', delay: '5s', duration: '16s', size: '1.8rem' },
        { symbol: '♩', left: '30%', delay: '1.2s', duration: '20s', size: '1.3rem' },
        { symbol: '♪', left: '40%', delay: '3.8s', duration: '15s', size: '1.5rem' },
        { symbol: '♫', left: '50%', delay: '6s', duration: '22s', size: '1.1rem' },
        { symbol: '♬', left: '60%', delay: '1.8s', duration: '17s', size: '1.7rem' },
        { symbol: '♩', left: '70%', delay: '4s', duration: '19s', size: '1.4rem' },
        { symbol: '♪', left: '80%', delay: '0.8s', duration: '21s', size: '1.2rem' },
        { symbol: '♫', left: '88%', delay: '5.5s', duration: '16s', size: '1.5rem' },
        { symbol: '♬', left: '95%', delay: '3s', duration: '20s', size: '1.3rem' },
        { symbol: '♩', left: '55%', delay: '7s', duration: '24s', size: '1.9rem' },
        { symbol: '♪', left: '25%', delay: '8s', duration: '18s', size: '1rem' },
        { symbol: '♫', left: '75%', delay: '9s', duration: '15s', size: '1.6rem' },
        { symbol: '♬', left: '45%', delay: '6.5s', duration: '23s', size: '1.2rem' },
    ];

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'hidden',
        }}>
            {notes.map((note, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: note.left,
                        bottom: '-5%',
                        fontSize: note.size,
                        color: 'var(--note-color)',
                        animation: `floatNoteCinematic ${note.duration} ${note.delay} infinite linear`,
                        userSelect: 'none',
                    }}
                >
                    {note.symbol}
                </div>
            ))}
        </div>
    );
}
