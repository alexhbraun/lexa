import React from 'react';
import { ShieldCheckIcon, PhoneIcon, IconAtendimento24h } from './Icons';

interface LexaHeroSectionProps {
    onNavigateToPrep: () => void;
    onOpenSurvey?: () => void;
}

export const LexaLightHeroSection: React.FC<LexaHeroSectionProps> = ({ onNavigateToPrep, onOpenSurvey }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 reveal bg-white">
            {/* Premium Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/assets/images/lexa_brazil_boutique_hero.png"
                    alt="Boutique Law Office Brazil"
                    className="w-full h-full object-cover object-center"
                />
                {/* Refined overlays: Balanced for visibility and contrast */}
                <div className="absolute inset-0 bg-white/30"></div>
                {/* Darker gradient overlay for psychological weight on the headline */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 opacity-60"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-3xl md:text-7xl font-serif font-black text-[#051020] mb-8 leading-[1.1] reveal">
                    Quando o seu telefone toca e ninguém atende, <br className="hidden md:block" />
                    o cliente toma a decisão de <span className="text-gold italic font-light">buscar o próximo escritório.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-3xl mx-auto mb-16 leading-relaxed reveal" style={{ animationDelay: '0.2s' }}>
                    Preserve a oportunidade de contato no exato momento em que ela surge, garantindo atendimento profissional sempre que você estiver em audiência ou indisponível.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 reveal w-full sm:w-auto px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
                    <button 
                        onClick={onOpenSurvey || onNavigateToPrep}
                        className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-navy-acc text-white font-bold text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)]"
                    >
                        <span className="leading-tight">Testar Lexa 7 dias grátis</span>
                        <div className="bg-gold p-2 rounded-full group-hover:rotate-12 transition-transform">
                            <IconAtendimento24h className="w-5 h-5 text-navy-acc" />
                        </div>
                    </button>
                    <a
                        href="#demo-audio"
                        className="w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-2 text-navy-acc font-bold text-lg px-8 sm:px-6 py-4 rounded-full hover:text-gold transition-all duration-300 border border-transparent hover:border-navy-acc/10"
                    >
                        <PhoneIcon className="w-5 h-5" />
                        Ver demonstração
                    </a>
                </div>

                <div className="mt-8 flex items-center justify-center gap-3 text-slate-500 font-bold text-sm reveal" style={{ animationDelay: '0.6s' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
                    Atendimento profissional, sem improviso.
                </div>
            </div>
        </section>
    );
};
