import React, { useEffect, useState } from 'react';
import { LexaLightHeroSection } from './LexaLightHeroSection';
import { LexaSurveySection } from './LexaSurveySection';
import { LexaLightProblemSection } from './LexaLightProblemSection';
import { LexaLightTrustBar } from './LexaLightTrustBar';

import { LexaLightComparisonSection } from './LexaLightComparisonSection';
import { LexaLightProcessSection } from './LexaLightProcessSection';
import { LexaLightAudioDemoSection } from './LexaLightAudioDemoSection';
import { LexaLightShowcaseSection } from './LexaLightShowcaseSection';
import { LexaLightBenefitsSection } from './LexaLightBenefitsSection';
import { LexaLightCtaSection } from './LexaLightCtaSection';
import { LexaLightFaqSection } from './LexaLightFaqSection';
import { LexaLightTrialStepsSection } from './LexaLightTrialStepsSection';
import { Modal } from './Modal';
import { StickyMobileCTA } from './StickyMobileCTA';
import { ShieldCheckIcon, PhoneIcon } from './Icons';

interface LexaDemoPageProps {
    onNavigateToPrep: () => void;
}

export const LexaLightDemoPage: React.FC<LexaDemoPageProps> = ({ onNavigateToPrep }) => {
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
            <LexaLightHeroSection 
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

            <LexaLightProblemSection />

            <LexaLightAudioDemoSection />
            <LexaLightProcessSection />
            <LexaLightComparisonSection />   
            <LexaLightShowcaseSection />
            <LexaLightCtaSection onOpenSurvey={() => setIsSurveyOpen(true)} />
            
            <LexaLightTrialStepsSection onOpenSurvey={() => setIsSurveyOpen(true)} />
            <LexaLightFaqSection onOpenSurvey={() => setIsSurveyOpen(true)} />
            <StickyMobileCTA onOpenSurvey={() => setIsSurveyOpen(true)} />

            {/* Final CTA Section */}
            <section id="contato" className="py-64 bg-[#051020] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/lexa_premium_hero_bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="text-gold text-[12px] font-black uppercase tracking-[0.6em] mb-12 stagger-reveal" style={{ animationDelay: '0.1s' }}>
                            PRÓXIMO PASSO
                        </div>

                        <div className="mb-8 stagger-reveal" style={{ animationDelay: '0.15s' }}>
                            <span className="text-2xl md:text-3xl font-serif font-black text-white italic">"Chamadas perdidas não voltam."</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-12 leading-tight stagger-reveal" style={{ animationDelay: '0.2s' }}>
                            Quando o seu telefone tocar amanhã, quem estará ouvindo o cliente?
                        </h2>
                        <p className="text-2xl text-slate-400 font-light leading-relaxed mb-20 max-w-3xl mx-auto stagger-reveal" style={{ animationDelay: '0.3s' }}>
                            A decisão não é sobre tecnologia. É sobre se você está disposto a continuar ignorando as perdas de atendimento do seu escritório.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 stagger-reveal" style={{ animationDelay: '0.4s' }}>
                            <button
                                onClick={() => setIsSurveyOpen(true)}
                                className="shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-base px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_40px_100px_-15px_rgba(197,160,89,0.5)]"
                            >
                                <ShieldCheckIcon className="w-5 h-5 text-bg-1 shrink-0" />
                                <span className="leading-tight font-black uppercase tracking-widest">Testar a Lexa 3 dias sem compromisso</span>
                            </button>
                        </div>
                        
                        <div className="mt-16 text-center reveal" style={{ animationDelay: '0.6s' }}>
                            <p className="text-slate-500 font-medium tracking-[0.2em] uppercase text-xs">
                                Sem compromisso. Sem risco.
                            </p>
                        </div>

                        <div className="mt-24 flex items-center justify-center gap-12 stagger-reveal" style={{ animationDelay: '0.5s' }}>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-black text-white mb-2">24h</div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Disponibilidade</div>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-black text-white mb-2">100%</div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Auditorável</div>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-black text-white mb-2">0.5s</div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Latência</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
