import React from 'react';
import { ShieldCheckIcon } from './Icons';

interface LexaLightCtaSectionProps {
    onOpenSurvey: () => void;
}

export const LexaLightCtaSection: React.FC<LexaLightCtaSectionProps> = ({ onOpenSurvey }) => {
    return (
        <section className="py-24 bg-white reveal">
            <div className="container mx-auto px-6 text-center">
                <button
                    onClick={onOpenSurvey}
                    className="shimmer inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)]"
                >
                    <ShieldCheckIcon className="w-6 h-6 text-gold shrink-0" />
                    <span className="leading-tight">Analisar elegibilidade do escritório</span>
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
