import React from 'react';
import { CheckCircleIcon } from './Icons';

export const LexaLightControlSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#FAFAF9] reveal relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto bg-white rounded-[60px] p-12 md:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col lg:flex-row gap-20 items-center">

                    <div className="lg:w-1/2">
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                            CONTROLE TOTAL
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-[#051020] mb-8 leading-tight">
                            Você mantém o controle. <br />
                            A Lexa garante <span className="text-gold font-boutique italic font-light">a presença.</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                            Nada muda quando você pode atender. Tudo muda quando você não pode.<br />
                            A Lexa só assume o controle quando o silêncio seria a única resposta, sem gerar conflito com sua autoridade.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Intervenção Cirúrgica", desc: "Só atendemos se o escritório não atender." },
                                { title: "Protocolo de Ausência", desc: "Funciona em audiências, reuniões ou fora de horário." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                                        <CheckCircleIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-[#051020]">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-light italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent blur-[100px] rounded-full"></div>
                         <img 
                            src="/assets/images/lexa_dashboard_mockup.png" 
                            alt="Painel de Controle Lexa" 
                            className="relative z-10 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-all duration-700"
                        />
                         {/* Fallback visual if image missing - generic control dashboard abstract */}
                         <div className="absolute top-10 right-10 w-24 h-24 bg-navy-acc/5 rounded-full blur-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};
