import React from 'react';
import { ShieldCheckIcon, IconAtendimento24h, IconAgendaAutomatica, IconResumosAutomaticos } from './Icons';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="group bg-white p-10 rounded-[50px] border border-slate-50 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
        <div className="h-16 w-16 mb-8 text-gold bg-slate-50 rounded-2xl p-4 flex items-center justify-center transition-all duration-500 group-hover:bg-navy-acc group-hover:text-gold group-hover:scale-110">
            {icon}
        </div>
        <h3 className="text-xl font-black text-[#051020] mb-4">{title}</h3>
        <p className="text-slate-500 text-[16px] leading-relaxed font-light">{text}</p>
    </div>
);

export const LexaLightBenefitsSection: React.FC = () => {
    return (
        <section className="py-48 bg-white reveal">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                        DIFERENCIAIS DE ELITE
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        A proteção operacional que o <br className="hidden md:block" />
                        seu escritório <span className="text-gold italic font-light">exige agora.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <BenefitCard
                        icon={<IconAtendimento24h className="w-full h-full" />}
                        title="Prevenção de perdas"
                        text="Garantia de que nenhuma ligação importante encontre o silêncio ou a indisponibilidade do escritório."
                    />
                    <BenefitCard
                        icon={<IconAgendaAutomatica className="w-full h-full" />}
                        title="Resposta imediata"
                        text="Preservação da oportunidade no exato momento da dor do cliente, onde a decisão de contratação é tomada."
                    />
                    <BenefitCard
                        icon={<IconResumosAutomaticos className="w-full h-full" />}
                        title="Controle operacional"
                        text="Eliminação do erro humano no registro de chamadas, convertendo cada contato em um resumo estratégico."
                    />
                </div>

                <div className="mt-28 text-center">
                    <div className="inline-block px-10 py-6 glass-card rounded-full border border-slate-100 bg-slate-50/50">
                        <p className="text-slate-500 font-medium">
                            <span className="text-gold mr-2">✦</span> 
                            Assuma o controle da sua porta de entrada e elimine os erros invisíveis de atendimento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
