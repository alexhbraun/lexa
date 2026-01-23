import React from 'react';
import { ShieldCheckIcon, PhoneIcon, IconAtendimento24h } from './Icons';

interface LexaHeroSectionProps {
    onNavigateToPrep: () => void;
    onOpenSurvey?: () => void;
}

export const LexaLightHeroSectionB: React.FC<LexaHeroSectionProps> = ({ onNavigateToPrep, onOpenSurvey }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 reveal bg-white">
            {/* Premium Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 -z-10" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.35)' }}>
                <img
                    src="https://ik.imagekit.io/rgqefde41/Gemini_Generated_Image_ih93sbih93sbih93.png"
                    alt="Boutique Law Office Brazil"
                    className="w-full h-full object-cover object-center"
                />
                {/* Global Veil (Super Light) */}
                <div 
                    className="absolute inset-0"
                    style={{ background: 'rgba(245,242,238,0.22)' }}
                ></div>
                {/* Legibility Island (Radial Gradient) */}
                <div 
                    className="absolute inset-0" 
                    style={{ 
                        background: 'radial-gradient(circle at 50% 40%, rgba(245,242,238,0.78) 0%, rgba(245,242,238,0.58) 35%, rgba(245,242,238,0.22) 60%, rgba(245,242,238,0.00) 80%)' 
                    }}
                ></div>
            </div>

            <div className="relative z-10 mx-auto max-w-[820px] py-10 px-6 text-center">
                <h1 className="text-[50px] md:text-[90px] font-serif font-black text-[#141414] mb-6 leading-[1.05] reveal">
                        Nunca Mais Perca <br className="hidden md:block" />
                        <span className="text-gold italic font-light">Uma Ligação de Cliente.</span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl text-[#3e3e3e] font-medium mb-10 leading-relaxed reveal space-y-3" style={{ animationDelay: '0.2s' }}>
                        <p>Seu telefone toca.</p>
                        <p>Você está em reunião com um cliente.</p>
                        <p>Um caso potencial de R$20.000 vai para a caixa postal — e direto para seu concorrente.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 reveal w-full sm:w-auto px-4 sm:px-0 mb-8" style={{ animationDelay: '0.4s' }}>
                        <button 
                            onClick={onOpenSurvey || onNavigateToPrep}
                            className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-4 bg-black text-white font-bold text-xs sm:text-lg px-5 py-3 sm:px-12 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)]"
                        >
                            <span className="leading-tight uppercase">Iniciar Teste de 3 Dias (Grátis e Sem Cartão)</span>
                            <div className="bg-gold p-1.5 sm:p-2 rounded-full group-hover:rotate-12 transition-transform">
                                <IconAtendimento24h className="w-4 h-4 sm:w-5 sm:h-5 text-navy-acc" />
                            </div>
                        </button>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 reveal" style={{ animationDelay: '0.6s' }}>
                        <div className="flex items-center justify-center gap-3 text-[#051020] font-black text-sm uppercase tracking-wide">
                             Onboarding em 1-2 dias.
                        </div>
                         <p className="text-sm text-slate-900 font-bold">
                            Teste real · Sem compromisso · Sem cartão
                        </p>
                </div>
            </div>
        </section>
    );
};
