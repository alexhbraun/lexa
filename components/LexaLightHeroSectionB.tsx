import React from 'react';
import { ShieldCheckIcon, PhoneIcon, IconAtendimento24h } from './Icons';
import { sendFacebookCAPI, generateEventId } from '../utils/facebookCAPI';

interface LexaHeroSectionProps {
    onNavigateToPrep: () => void;
    onOpenSurvey?: () => void;
}

export const LexaLightHeroSectionB: React.FC<LexaHeroSectionProps> = ({ onNavigateToPrep, onOpenSurvey }) => {
    
    const handleHeroClick = () => {
        // Track Click Event
        const eventId = generateEventId('init_checkout');
        
        // 1. Pixel
        if ((window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
                content_name: 'Hero CTA',
            }, { eventID: eventId });
        }

        // 2. CAPI (Anonymous)
        // Since we don't have user data yet, this will be a low-match-quality event,
        // but it tracks the server-side signal.
        sendFacebookCAPI('InitiateCheckout', eventId);

        // Navigate
        if (onOpenSurvey) {
            onOpenSurvey();
        } else {
            onNavigateToPrep();
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 reveal bg-white">
            {/* Premium Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 -z-10" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.35)' }}>
                <img
                    src="/assets/images/lexa_hero_v4_phone.png"
                    alt="Boutique Law Office Brazil"
                    className="w-full h-full object-cover object-left md:object-center"
                />
                {/* Global Veil (Reduced) */}
                <div 
                    className="absolute inset-0"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                ></div>
                {/* Localized Spotlight for Text Legibility */}
                <div 
                    className="absolute inset-0" 
                    style={{ 
                        background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0) 70%)' 
                    }}
                ></div>
            </div>

            <div className="relative z-10 mx-auto max-w-[820px] py-10 px-6 text-center">
                <h1 className="text-[38px] md:text-[90px] font-serif font-black text-[#141414] mb-4 md:mb-6 leading-[1.05] reveal">
                        Nunca Mais Perca <br className="hidden md:block" />
                        <span className="text-gold italic font-light">Uma Ligação de Cliente.</span>
                    </h1>
                    
                    <div className="text-lg md:text-2xl text-[#3e3e3e] font-medium mb-6 md:mb-10 leading-relaxed reveal space-y-2 md:space-y-3" style={{ animationDelay: '0.2s' }}>
                        <p>Seu telefone toca.</p>
                        <p>Você está em reunião com um cliente.</p>
                        <p>Um caso potencial de R$20.000 vai para a caixa postal — e direto para seu concorrente.</p>
                        <p className="font-bold text-[#051020]">Com a Lexa, essa ligação seria atendida e registrada.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 reveal w-full sm:w-auto px-4 sm:px-0 mb-6 md:mb-8" style={{ animationDelay: '0.4s' }}>
                        <button 
                            onClick={handleHeroClick}
                            className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-4 bg-black text-white font-bold text-xs sm:text-lg px-5 py-3 sm:px-12 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)]"
                        >
                            <span className="leading-tight uppercase">Iniciar Teste de 7 Dias (30 min. grátis)</span>
                            <div className="bg-gold p-1.5 sm:p-2 rounded-full group-hover:rotate-12 transition-transform">
                                <IconAtendimento24h className="w-4 h-4 sm:w-5 sm:h-5 text-navy-acc" />
                            </div>
                        </button>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 reveal" style={{ animationDelay: '0.6s' }}>
                        <div className="flex items-center justify-center gap-3 text-[#051020] font-black text-sm uppercase tracking-wide">
                             Onboarding em até 2 dias úteis.
                        </div>
                         <p className="text-sm text-slate-900 font-bold">
                            Teste real · Sem compromisso · Sem cartão
                        </p>
                </div>
            </div>
        </section>
    );
};
