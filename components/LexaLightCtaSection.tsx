import React from 'react';
import { ShieldCheckIcon } from './Icons';

interface LexaLightCtaSectionProps {
    onOpenSurvey: () => void;
}

export const LexaLightCtaSection: React.FC<LexaLightCtaSectionProps> = ({ onOpenSurvey }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-50 reveal">
            <div className="container mx-auto px-6 text-center">
                <button
                    onClick={onOpenSurvey}
                    className="shimmer w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-4 bg-navy-acc text-white font-bold text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)]"
                >
                    <ShieldCheckIcon className="w-5 h-5 text-gold shrink-0" />
                    <span className="leading-tight">Testar Lexa 7 dias grátis</span>
                </button>
                <div className="mt-6 text-center reveal" style={{ animationDelay: '0.2s' }}>
                     <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs">
                         Análise Gratuita e Sem Compromisso
                     </p>
                </div>
            </div>
        </section>
    );
};
