
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrepPage } from './components/PrepPage';

import { LexaLightDemoPage } from './components/LexaLightDemoPage';

// Funnel Components
import { LexaFunnelRegistrar } from './components/LexaFunnelRegistrar';
import { LexaFunnelConfirmed } from './components/LexaFunnelConfirmed';
import { LexaFunnelStatus } from './components/LexaFunnelStatus';
import { LexaFunnelReady } from './components/LexaFunnelReady';
import { LexaFunnelStarted } from './components/LexaFunnelStarted';
import { LexaFunnelTrial } from './components/LexaFunnelTrial';

type ViewState = 'landing' | 'prep' | 'lexa-light' | 
                 'registrar' | 'reserva-confirmada' | 'status' | 'pronta-para-teste' | 'teste-iniciado' | 'trial';

function App() {
  const [view, setView] = useState<ViewState>('landing');

  useEffect(() => {
    // Basic routing logic
    const path = window.location.pathname;
    const search = window.location.search;

    if (path.includes('/registrar')) setView('registrar');
    else if (path.includes('/reserva-confirmada')) setView('reserva-confirmada');
    else if (path.includes('/status')) setView('status');
    else if (path.includes('/pronta-para-teste')) setView('pronta-para-teste');
    else if (path.includes('/teste-iniciado')) setView('teste-iniciado');
    else if (path.includes('/trial')) setView('trial');
    else if (search.includes('lexa') || path.includes('/lexa')) setView('lexa-light');
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
    window.history.pushState({}, '', '/');
    setView('landing');
  };

  const navigateTo = (newView: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL bar without reload
    const path = newView === 'landing' ? '/' : `/${newView}`;
    window.history.pushState({}, '', path);
    setView(newView);
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

  // FUNNEL PAGES
  if (view === 'registrar') return <LexaFunnelRegistrar onNavigate={navigateTo} />;
  if (view === 'reserva-confirmada') return <LexaFunnelConfirmed onNavigate={navigateTo} />;
  if (view === 'status') return <LexaFunnelStatus onNavigate={navigateTo} />;
  if (view === 'pronta-para-teste') return <LexaFunnelReady onNavigate={navigateTo} />;
  if (view === 'teste-iniciado') return <LexaFunnelStarted onNavigate={navigateTo} />;
  if (view === 'trial') return <LexaFunnelTrial onNavigate={navigateTo} />;


  if (view === 'lexa-light' || view === 'landing') {
    return (
      <div className="bg-white text-slate-900 font-sans antialiased relative min-h-screen text-[17px] leading-[1.6]">
        <Header onLogoClick={handleBackToLanding} />
        <main>
          <LexaLightDemoPage onNavigateToPrep={() => navigateTo('registrar')} />
        </main>
        <Footer />
      </div>
    );
  }


  return null;
}

export default App;
