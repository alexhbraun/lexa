import React from 'react';
import { XIcon, CheckCircleIcon } from './Icons';

const ComparisonItem: React.FC<{ text: string; isPositive: boolean; isDark?: boolean }> = ({ text, isPositive, isDark }) => (
    <li className="flex items-start gap-4">
        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${isPositive ? 'bg-gold/10 text-gold' : 'bg-slate-100 text-slate-400'}`}>
            {isPositive ? (
                <CheckCircleIcon className="w-4 h-4" />
            ) : (
                <XIcon className="w-4 h-4" />
            )}
        </div>
        <span className={`text-lg leading-relaxed ${isPositive ? 'text-white font-bold' : 'text-slate-400 font-medium'}`}>
            {text}
        </span>
    </li>
);

export const LexaLightComparisonSection: React.FC = () => {
    return (
        <section id="comparativo" className="py-24 md:py-48 bg-[#051020] reveal relative overflow-hidden">
            {/* Decorative backgrounds */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-5xl mx-auto mb-32">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                        PROTEÇÃO & PRESTÍGIO
                    </div>
                    <h2 className="text-3xl md:text-7xl font-serif font-black text-white mb-8 leading-tight tracking-tight">
                        Por que escritórios confiam <span className="text-gold italic font-light">na Lexa</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Veja a diferença entre atender como antes e atender com a Lexa.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Column: Without Lexa */}
                    <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                        <div className="inline-flex items-center gap-2 mb-10 bg-slate-100 px-4 py-1 rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Fluxo tradicional</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#051020] mb-10 uppercase tracking-tight">Sem a Lexa</h3>
                        <ul className="space-y-8 flex-grow">
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mt-1">
                                    <XIcon className="w-4 h-4" />
                                </div>
                                <span className="text-lg leading-relaxed text-slate-500 font-medium">Interrupções constantes durante audiências</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mt-1">
                                    <XIcon className="w-4 h-4" />
                                </div>
                                <span className="text-lg leading-relaxed text-slate-500 font-medium">Secretária sobrecarregada nos horários de pico</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mt-1">
                                    <XIcon className="w-4 h-4" />
                                </div>
                                <span className="text-lg leading-relaxed text-slate-500 font-medium">Chamadas perdidas quando ninguém pode atender</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mt-1">
                                    <XIcon className="w-4 h-4" />
                                </div>
                                <span className="text-lg leading-relaxed text-slate-500 font-medium">Clientes desistem e ligam para outro escritório</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mt-1">
                                    <XIcon className="w-4 h-4" />
                                </div>
                                <span className="text-lg leading-relaxed text-slate-500 font-medium">Informações incompletas ou esquecidas</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column: With Lexa (Glassmorphism Card) */}
                    <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="inline-flex items-center gap-2 mb-10 bg-gold/10 px-4 py-1 rounded-full border border-gold/10">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Proteção inteligente</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tight">Com a Lexa</h3>
                        <ul className="space-y-8 relative z-10">
                            <ComparisonItem isPositive={true} text="Você trabalha sem interrupções" />
                            <ComparisonItem isPositive={true} text="Toda ligação é atendida profissionalmente" />
                            <ComparisonItem isPositive={true} text="Nenhum contato se perde, mesmo fora do horário" />
                            <ComparisonItem isPositive={true} text="O cliente sente atenção imediata" />
                            <ComparisonItem isPositive={true} text="Você recebe tudo organizado por e-mail ou planilha" />
                        </ul>

                        {/* Decoration */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gold/20 blur-[100px] rounded-full pointing-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
