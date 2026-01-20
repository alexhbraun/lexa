
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrepPage } from './components/PrepPage';

import { LexaLightDemoPage } from './components/LexaLightDemoPage';
import { LexaReservationPage } from './components/LexaReservationPage';
import { LexaOnboardingPage } from './components/LexaOnboardingPage';

function App() {
  const [view, setView] = useState<'landing' | 'prep' | 'lexa-light' | 'reservar' | 'onboarding'>('landing');

  useEffect(() => {
    // Basic routing for the new demo pages
    const path = window.location.pathname;
    const search = window.location.search;

    if (search.includes('reservar') || path.includes('/reservar')) {
      setView('reservar');
    } else if (search.includes('lexa') || path.includes('/lexa')) {
       // Catches both /lexa and /lexa-light
      setView('lexa-light');
    } else if (search.includes('onboarding') || path.includes('/onboarding')) {
      setView('onboarding');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [view]);

  const handleNavigateToPrep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('prep');
  };

  const handleBackToLanding = () => {
    setView('landing');
  };

  if (view === 'prep') {
    return (
      <div className="bg-gradient-to-b from-bg-1 to-bg-2 text-ink-2 font-sans antialiased relative min-h-screen text-[17px] leading-[1.6]">
        <Header onLogoClick={handleBackToLanding} />
        <main>
          <PrepPage />
        </main>
        <Footer />
      </div>
    );
  }


  if (view === 'lexa-light' || view === 'landing') {
    return (
      <div className="bg-white text-slate-900 font-sans antialiased relative min-h-screen text-[17px] leading-[1.6]">
        <Header onLogoClick={handleBackToLanding} />
        <main>
          <LexaLightDemoPage onNavigateToPrep={handleNavigateToPrep} />
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'reservar') {
    return (
      <div className="bg-white text-slate-900 font-sans antialiased relative min-h-screen text-[17px] leading-[1.6]">
        <Header onLogoClick={handleBackToLanding} />
        <main>
          <LexaReservationPage onNavigateToPrep={handleNavigateToPrep} />
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'onboarding') {
    return (
      <div className="bg-white text-slate-900 font-sans antialiased relative min-h-screen text-[17px] leading-[1.6]">
        <Header onLogoClick={handleBackToLanding} />
        <main>
          <LexaOnboardingPage onBackToLanding={handleBackToLanding} />
        </main>
        <Footer />
      </div>
    );
  }

  return null;
}

export default App;
