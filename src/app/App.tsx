import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingNotes } from './components/FloatingNotes';
import { ThemeProvider } from './hooks/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="size-full" style={{ background: 'var(--bg-primary)', minHeight: '100vh', transition: 'background-color 0.4s ease' }}>
        {/* Ambient floating music notes */}
        <FloatingNotes />

        <Navigation />

        <main id="hero">
          <Hero />
          <About />
          <Showcase />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
