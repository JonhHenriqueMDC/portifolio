import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import ScrollSpy from './components/ScrollSpy/ScrollSpy';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const mainScroll = document.getElementById('main-scroll');
    if (!mainScroll) return;
    scrollRef.current = mainScroll;

    const availableSections = ['hero', 'sobre', 'skills', 'projetos', 'timeline', 'contato'];

    const handleWheel = (e) => {
      // Disable teleport on mobile/small screens to allow native touch scroll
      if (window.innerWidth <= 900) return;

      // Only teleport if we are not already scrolling
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      // Detect direction
      const delta = e.deltaY;
      if (Math.abs(delta) < 30) return; // Ignore small scrolls

      const currentIdx = availableSections.indexOf(activeSection);
      let nextIdx = currentIdx;

      if (delta > 0 && currentIdx < availableSections.length - 1) {
        nextIdx++;
      } else if (delta < 0 && currentIdx > 0) {
        nextIdx--;
      }

      if (nextIdx !== currentIdx) {
        e.preventDefault();
        isScrolling.current = true;
        const targetId = availableSections[nextIdx];
        const targetEl = document.getElementById(targetId);
        
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
          
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000); // Wait for animation
        } else {
          isScrolling.current = false;
        }
      }
    };

    // Intersection Observer to keep state in sync if scrolled via other means
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible && !isScrolling.current) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    availableSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      observer.disconnect();
    };
  }, [activeSection]);

  return (
    <>
      <div className="bg-gradient-glow"></div>
      <Header activeSection={activeSection} />
      <ScrollSpy activeSection={activeSection} />
      <main id="main-scroll" className="snap-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}

export default App;
