import React, { useEffect, useState } from 'react';
import { LexaLightHeroSectionB } from './LexaLightHeroSectionB';
import { LexaSurveySection } from './LexaSurveySection';
import { LexaLightProblemSectionB } from './LexaLightProblemSectionB';
import { LexaLightCloningSectionB } from './LexaLightCloningSectionB';
import { LexaLightSolutionSectionB } from './LexaLightSolutionSectionB';
import { LexaLightTrustBar } from './LexaLightTrustBar';
import { LexaLightProcessSectionB } from './LexaLightProcessSectionB';
import { LexaLightAudioDemoSection } from './LexaLightAudioDemoSection';
import { LexaLightFeaturesSectionB } from './LexaLightFeaturesSectionB';
import { LexaLightPricingSectionB } from './LexaLightPricingSectionB';
import { LexaLightFaqSectionB } from './LexaLightFaqSectionB';
import { Modal } from './Modal';
import { StickyMobileCTA } from './StickyMobileCTA';
import { ShieldCheckIcon, PhoneIcon } from './Icons';

interface LexaDemoPageProps {
    onNavigateToPrep: () => void;
}

export const LexaLightDemoPageB: React.FC<LexaDemoPageProps> = ({ onNavigateToPrep }) => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);

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
    }, []);

    return (
        <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
            <LexaLightHeroSectionB 
                onNavigateToPrep={onNavigateToPrep} 
                onOpenSurvey={() => setIsSurveyOpen(true)}
            />
            
            <LexaLightTrustBar />
            
            {/* Survey Modal */}
            <Modal
                isOpen={isSurveyOpen}
                onClose={() => setIsSurveyOpen(false)}
                maxWidthClass="max-w-4xl"
                bgClass="bg-[#0B1221]"
            >
                <LexaSurveySection insideModal={true} />
            </Modal>

            <LexaLightProblemSectionB />
            
            <LexaLightCloningSectionB />
            <LexaLightSolutionSectionB />

            <LexaLightAudioDemoSection className="bg-[#051020] border-t-0" />
            <LexaLightProcessSectionB />
            <LexaLightFeaturesSectionB />   
            <LexaLightPricingSectionB onOpenSurvey={() => setIsSurveyOpen(true)} />
            <LexaLightFaqSectionB onOpenSurvey={() => setIsSurveyOpen(true)} />

            <StickyMobileCTA onOpenSurvey={() => setIsSurveyOpen(true)} />

            {/* Final CTA Section */}
            <section id="contato" className="py-40 bg-[#051020] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/lexa_premium_hero_bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="text-gold text-[12px] font-black uppercase tracking-[0.6em] mb-12 stagger-reveal" style={{ animationDelay: '0.1s' }}>
                            DECISÃO
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight stagger-reveal" style={{ animationDelay: '0.2s' }}>
                            Pronto Para Parar de <br/> <span className="text-gold italic">Perder Ligações?</span>
                        </h2>
                        <p className="text-2xl text-slate-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto stagger-reveal" style={{ animationDelay: '0.3s' }}>
                            Cada ligação que você perde enquanto pensa sobre isso é dinheiro que outra pessoa está ganhando.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 stagger-reveal" style={{ animationDelay: '0.4s' }}>
                            <button
                                onClick={() => setIsSurveyOpen(true)}
                                className="shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-base px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_40px_100px_-15px_rgba(197,160,89,0.5)]"
                            >
                                <ShieldCheckIcon className="w-5 h-5 text-bg-1 shrink-0" />
                                <span className="leading-tight font-black uppercase tracking-widest">COMECE AGORA</span>
                            </button>
                        </div>
                        
                        <div className="mt-12 text-center reveal" style={{ animationDelay: '0.6s' }}>
                            <p className="text-slate-500 font-medium tracking-[0.2em] uppercase text-xs">
                                Formulário rápido de onboarding (5 min)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
