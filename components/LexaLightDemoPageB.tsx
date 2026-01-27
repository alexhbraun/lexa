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
import { LexaLightFaqSectionB } from './LexaLightFaqSectionB';
import { LexaLightStorySection } from './LexaLightStorySection';
import { LexaLightBridge } from './LexaLightBridge';
import { Modal } from './Modal';
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
            <LexaLightProcessSectionB onOpenSurvey={() => setIsSurveyOpen(true)} />
            <LexaLightFeaturesSectionB />   
            <LexaLightFaqSectionB onOpenSurvey={() => setIsSurveyOpen(true)} />
            <LexaLightStorySection />
            
            <LexaLightBridge />

            {/* Final CTA Section */}
            <section id="contato" className="py-40 bg-[#051020] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/lexa_premium_hero_bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-gold text-[12px] font-black uppercase tracking-[0.6em] mb-12 stagger-reveal" style={{ animationDelay: '0.1s' }}>
                            DECISÃO
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-8 leading-tight stagger-reveal" style={{ animationDelay: '0.2s' }}>
                            Próximos Passos
                        </h2>
                        
                        <div className="text-xl text-slate-300 font-light leading-relaxed mb-10 stagger-reveal space-y-4" style={{ animationDelay: '0.3s' }}>
                            <p>Se você chegou até aqui, provavelmente se identificou com o problema que descrevemos.</p>
                            <p>A boa notícia é que a solução está disponível e você pode testá-la sem nenhum risco.</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 stagger-reveal mb-12" style={{ animationDelay: '0.4s' }}>
                            <button
                                onClick={() => setIsSurveyOpen(true)}
                                className="shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-base px-10 py-5 rounded-full transition-all duration-500 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                            >
                                <span className="leading-tight font-black uppercase tracking-widest text-[#051020]">COMEÇAR TESTE GRATUITO DE 3 DIAS</span>
                            </button>
                        </div>
                        
                        <div className="text-lg text-slate-400 font-light leading-relaxed stagger-reveal space-y-6" style={{ animationDelay: '0.5s' }}>
                            <p>
                                Nos próximos 3 dias, você vai descobrir como é ter um atendimento profissional <br className="hidden md:block" />
                                funcionando 24/7, sem custos fixos elevados.
                            </p>
                            <p>
                                E então você decide se faz sentido para o seu negócio.
                            </p>
                            <p className="text-white font-bold text-xl">
                                Simples assim.
                            </p>
                            <p className="pt-4">
                                Estamos aqui para ajudar você a capturar mais oportunidades e crescer seu negócio.
                            </p>
                        </div>

                        <div className="mt-16 stagger-reveal" style={{ animationDelay: '0.6s' }}>
                             <p className="text-gold font-serif italic text-2xl mb-2">
                                Atenciosamente,
                            </p>
                            <p className="text-white font-black uppercase tracking-widest">
                                Equipe Lexa
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
