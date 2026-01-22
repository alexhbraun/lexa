import React from 'react';
import { ShieldCheckIcon } from './Icons';

interface LexaLightTrialStepsSectionProps {
    onOpenSurvey: () => void;
}

const TrialStep: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="flex gap-6 md:gap-10 pb-16 last:pb-0 relative">
        <div className="shrink-0 flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-xl md:text-2xl font-bold text-gold">
                {number}
            </div>
            <div className="w-px h-full bg-slate-200 absolute top-16 left-6 md:left-8 -z-10 last:hidden"></div>
        </div>
        <div className="pt-2 md:pt-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#051020] mb-4">{title}</h3>
            <div className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                {children}
            </div>
        </div>
    </div>
);

export const LexaLightTrialStepsSection: React.FC<LexaLightTrialStepsSectionProps> = ({ onOpenSurvey }) => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="md:text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-6 leading-tight">
                        Como funciona o teste de 3 dias <span className="text-gold italic font-light">da Lexa</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
                        Você testa a Lexa em funcionamento real, no seu número, com ligações reais do seu escritório.
                        <br className="hidden md:block" />
                        Sem cartão. Sem compromisso. Sem interrupções.
                    </p>
                </div>

                <div className="bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100 shadow-sm mb-16">
                    <TrialStep number="1" title="Você solicita o teste">
                        <p>Ao reservar o teste, você informa seus dados básicos e o número onde a Lexa irá atuar.</p>
                        <p className="mt-2 font-medium text-slate-900">Não é uma demonstração. É um teste operacional.</p>
                    </TrialStep>

                    <TrialStep number="2" title="Preparamos a Lexa para o seu ambiente">
                        <p>Criamos um ambiente dedicado da Lexa para o seu escritório e validamos a configuração técnica necessária.</p>
                        <p className="mt-2">Esse preparo normalmente leva até o próximo dia útil.</p>
                        <p className="mt-4 text-sm text-slate-500 uppercase tracking-widest font-bold">O período de teste só começa quando a Lexa atender a primeira ligação real.</p>
                    </TrialStep>

                    <TrialStep number="3" title="A Lexa atende ligações reais por três dias">
                        <p className="mb-4">Durante o teste, quando você não puder atender, a Lexa atende a ligação, registra as informações essenciais e organiza tudo para retorno.</p>
                        <p>Você vê, na prática:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>como as ligações são atendidas</li>
                            <li>quais dados são registrados</li>
                            <li>como o retorno fica mais organizado</li>
                        </ul>
                        <p className="mt-4 font-medium text-slate-900">Nada é simulado.</p>
                    </TrialStep>

                    <TrialStep number="4" title="Você decide com base no uso real">
                        <p>Ao final do teste, você decide se faz sentido continuar.</p>
                        <p className="mt-2">Se quiser seguir, escolhe um plano e continua sem interrupção.</p>
                        <p>Se não fizer sentido, o teste simplesmente se encerra.</p>
                        <p className="mt-4 font-medium text-slate-900">Sem pressão. Sem pegadinhas.</p>
                    </TrialStep>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={onOpenSurvey}
                        className="shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-base px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_40px_100px_-15px_rgba(197,160,89,0.5)]"
                    >
                        <ShieldCheckIcon className="w-5 h-5 text-bg-1 shrink-0" />
                        <span className="leading-tight font-black uppercase tracking-widest">Testar a Lexa gratuitamente</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
