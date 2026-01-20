import React from 'react';

const ComparisonItem: React.FC<{ text: string; type: 'bad' | 'good' }> = ({ text, type }) => (
    <li className="flex items-start gap-4">
        <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-[12px] font-bold shadow-sm transition-all duration-500 hover:scale-110 ${type === 'bad' ? 'bg-slate-100 text-slate-400' : 'bg-gold/10 text-gold'}`}>
            {type === 'bad' ? '✕' : '✓'}
        </span>
        <span className={`text-xl ${type === 'bad' ? 'text-slate-400 font-light' : 'text-slate-800 font-normal underline decoration-gold/10 underline-offset-8'}`}>{text}</span>
    </li>
);

export const LexaLightComparisonSection: React.FC = () => {
    return (
        <section id="comparativo" className="py-24 md:py-48 bg-slate-50 reveal"> {/* Warmer background tint */}
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-24 gap-12">
                    <div className="max-w-3xl border-l-[1px] border-gold/40 pl-8 md:pl-12 py-4"> {/* Gold vertical accent line */}
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                            PROTEÇÃO & PRESTÍGIO
                        </div>
                        <h2 className="text-3xl md:text-7xl font-serif font-black text-[#051020] leading-tight">
                            A prevenção do erro silencioso de <span className="text-gold italic font-light">não atender quem ligou.</span>
                        </h2>
                    </div>
                </div>
                
                <div className="text-center max-w-3xl mx-auto mb-20 text-xl text-slate-600 font-light">
                    <p>
                        O problema não é sua competência jurídica. O problema é descobrir, tarde demais, que alguém ligou e você nunca soube.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
                    {/* Before Column */}
                    <div className="glass-card p-12 md:p-16 rounded-[60px] border border-slate-100 bg-[#FCFCFD]">
                        <h3 className="text-xl font-black text-slate-300 mb-12 uppercase tracking-[0.2em] text-center italic">Sem a Lexa</h3>
                        <ul className="space-y-10">
                            <ComparisonItem text="Silêncio na primeira tentativa" type="bad" />
                            <ComparisonItem text="Informações perdidas no vácuo" type="bad" />
                            <ComparisonItem text="Retornos tardios e incertos" type="bad" />
                        </ul>
                    </div>

                    {/* After Column */}
                    <div className="shimmer glass-card p-12 md:p-16 rounded-[60px] border border-gold/10 bg-white shadow-[0_40px_100px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-3xl rounded-full -mr-24 -mt-24"></div>
                        <h3 className="text-xl font-black text-gold mb-12 uppercase tracking-[0.2em] text-center">Com a Lexa</h3>
                        <ul className="space-y-10">
                            <ComparisonItem text="Atendimento profissional imediato" type="good" />
                            <ComparisonItem text="Resumos claros e estruturados" type="good" />
                            <ComparisonItem text="Retorno com contexto estratégico" type="good" />
                        </ul>
                    </div>
                </div>

                <div className="mt-28 text-center">
                    <div className="inline-block p-12 glass-card rounded-[60px] border border-slate-50 max-w-4xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gold/20"></div>
                        <p className="text-2xl md:text-4xl font-boutique italic text-navy-acc leading-relaxed px-4">
                            "A Lexa elimina a falha invisível de não atender o cliente no momento da dor. Agora eu foco na estratégia enquanto ela protege a porta de entrada."
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-6">
                            <div className="h-[1px] w-16 bg-gold/20"></div>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Escritório Boutique, Londrina</span>
                            <div className="h-[1px] w-16 bg-gold/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
