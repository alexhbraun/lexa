import React from 'react';
import { ShieldCheckIcon } from './Icons';

const PricingCard: React.FC<{
    title: string;
    price: string;
    features: string[];
    description: string;
    highlight?: boolean;
    onCta?: () => void;
}> = ({ title, price, features, description, highlight, onCta }) => (
    <div className={`relative p-8 rounded-[40px] border flex flex-col h-full transition-all duration-500 ${highlight ? 'bg-[#051020] text-white border-navy-acc shadow-2xl scale-105 z-10' : 'bg-white text-slate-900 border-slate-100 shadow-lg hover:shadow-xl'}`}>
        {highlight && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-navy-acc text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                Mais Popular
            </div>
        )}
        
        <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-white' : 'text-[#051020]'}`}>{title}</h3>
        <p className={`text-sm mb-8 h-10 ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
        
        <div className="mb-8">
            <span className="text-4xl font-serif font-black">{price}</span>
            <span className={`text-sm ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>/mês</span>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span className={highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                </li>
            ))}
        </ul>

        <button 
            onClick={onCta}
            className={`w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${highlight ? 'bg-gold text-navy-acc hover:bg-white' : 'bg-slate-100 text-slate-900 hover:bg-[#051020] hover:text-white'}`}
        >
            INICIAR TESTE DE 3 DIAS (GRÁTIS E SEM CARTÃO)
        </button>
        <p className="text-center mt-3 text-xs text-slate-400 font-medium opacity-80">
            Sem compromisso · Veja na prática
        </p>
    </div>
);

export const LexaLightPricingSectionB: React.FC<{ onOpenSurvey?: () => void }> = ({ onOpenSurvey }) => {
    return (
        <section className="py-24 bg-slate-50 reveal">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        INVESTIMENTO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-6">
                        Preços Simples e Transparentes
                    </h2>
                    <p className="text-xl text-slate-500">
                        Até mesmo um cliente salvo paga por meses de serviço. Faça as contas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    <PricingCard
                        title="Plano Básico"
                        price="R$297"
                        description="Perfeito para escritórios menores com volume moderado."
                        features={[
                            "Até 150 minutos de chamadas",
                            "Notificações por e-mail",
                            "Painel completo organizado",
                            "Configuração personalizada"
                        ]}
                        onCta={onOpenSurvey}
                    />
                    <PricingCard
                        title="Plano Plus"
                        price="R$497"
                        description="Para escritórios que precisam de alertas móveis instantâneos."
                        highlight={true}
                        features={[
                            "Até 400 minutos de chamadas",
                            "Notificações WhatsApp + E-mail",
                            "Painel completo organizado",
                            "Configuração personalizada",
                            "Suporte prioritário"
                        ]}
                        onCta={onOpenSurvey}
                    />
                    <PricingCard
                        title="Plano Ilimitado"
                        price="R$997"
                        description="Para escritórios movimentados com alto volume."
                        features={[
                            "Minutos Ilimitados",
                            "Notificações WhatsApp + E-mail",
                            "Painel completo organizado",
                            "Configuração personalizada",
                            "Consultoria de fluxo"
                        ]}
                        onCta={onOpenSurvey}
                    />
                </div>
            </div>
        </section>
    );
};
