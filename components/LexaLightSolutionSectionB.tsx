import React from 'react';
import { ShieldCheckIcon } from './Icons';

export const LexaLightSolutionSectionB: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 reveal">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Centered Header & Narrative */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        SOLUÇÃO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Conheça Sua Nova Recepcionista de IA <br/>
                        <span className="text-gold italic font-light">Feita para Escritórios de Advocacia</span>
                    </h2>
                    
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                        Imagine se cada ligação para seu escritório fosse atendida por uma assistente profissional e inteligente.
                    </p>

                    <div className="space-y-6">
                         <p className="text-2xl font-bold text-[#051020]">
                            É exatamente isso que nosso Agente de IA por Voz faz.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                            Ele atende suas ligações recebidas como uma recepcionista de verdade, coleta todas as informações relevantes e te envia um resumo acionável para que você possa decidir o que fazer em seguida.
                        </p>
                    </div>
                </div>

                {/* Comparison Cards: Two Distinct Cards Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
                    
                    {/* Card 1: What Lexa Does (White, Elevated) */}
                    <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] h-full">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-navy-acc/10 flex items-center justify-center shrink-0">
                                <span className="text-navy-acc font-black text-sm">✓</span>
                            </div>
                            <h3 className="text-sm font-black text-[#051020] uppercase tracking-widest">O QUE A LEXA FAZ</h3>
                        </div>
                        <ul className="space-y-5">
                            {[
                                "Atende ligações imediatamente (24/7)",
                                "Entende o motivo da ligação",
                                "Coleta nome, telefone e dados críticos",
                                "Fala naturalmente com profissionalismo",
                                "Encaminha o resumo para sua decisão"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="text-navy-acc font-bold text-lg leading-none mt-1">✓</span>
                                    <span className="text-slate-700 text-[16px] font-medium leading-normal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: What Lexa Never Does (Light Gray, Subtle) */}
                    <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 h-full">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                <span className="text-slate-400 font-black text-xs">✕</span>
                            </div>
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">O QUE ELA NUNCA FAZ</h3>
                        </div>
                        <ul className="space-y-5">
                            {[
                                "Não dá aconselhamento jurídico",
                                "Não negocia honorários ou valores",
                                "Não promete resultados de causa",
                                "Não inventa respostas que não sabe",
                                "Não substitui a inteligência do advogado"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 opacity-70 hover:opacity-100 transition-opacity">
                                    <span className="text-slate-300 font-bold text-lg leading-none mt-1">✕</span>
                                    <span className="text-slate-500 text-[16px] font-medium leading-normal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
