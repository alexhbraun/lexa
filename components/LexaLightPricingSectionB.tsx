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
    <div 
        className={`relative p-8 rounded-[40px] border flex flex-col h-full transition-all duration-500 overflow-hidden group ${highlight ? 'text-white border-gold shadow-[0_30px_80px_-10px_rgba(197,160,89,0.15)] scale-105 z-10' : 'text-slate-300 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:border-gold/30 hover:-translate-y-2'}`}
        style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))'
        }}
    >
        {/* Aura Halo for Highlight Card */}
        {highlight && (
            <div className="absolute inset-0 pointer-events-none -z-10"
                 style={{ background: 'radial-gradient(circle at top center, rgba(180,138,58,0.15), transparent 70%)' }}>
            </div>
        )}
        
        {highlight && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-[#051020] text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg border border-white/20">
                Mais Popular
            </div>
        )}
        
        <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-white' : 'text-white/90'}`}>{title}</h3>
        <p className={`text-sm mb-8 h-10 leading-relaxed ${highlight ? 'text-white/70' : 'text-white/50'}`}>{description}</p>
        
        <div className="mb-8">
            <span className="text-4xl font-serif font-black text-white">{price}</span>
            <span className="text-sm text-white/40">/mês</span>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span className={highlight ? 'text-white/80' : 'text-white/60'}>{feature}</span>
                </li>
            ))}
        </ul>

        <button 
            onClick={onCta}
            className={`w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 border ${highlight ? 'bg-gold text-[#051020] border-gold hover:bg-white hover:border-white' : 'bg-white/5 text-white border-white/10 hover:bg-gold hover:text-[#051020] hover:border-gold'}`}
        >
            INICIAR TESTE DE 3 DIAS (GRÁTIS E SEM CARTÃO)
        </button>
        <p className="text-center mt-3 text-xs text-white/30 font-medium">
            Sem compromisso · Veja na prática
        </p>
    </div>
);

export const LexaLightPricingSectionB: React.FC<{ onOpenSurvey?: () => void }> = ({ onOpenSurvey }) => {
    return (
        <section className="py-24 bg-[#051020] reveal border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        INVESTIMENTO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
                        Preços Simples e Transparentes
                    </h2>
                    <p className="text-xl text-slate-400 font-light">
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
