import React from 'react';

export const LexaLightShowcaseSection: React.FC = () => {
    return (
        <section className="py-24 md:py-48 bg-white reveal overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="lg:w-1/2">
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8 stagger-reveal" style={{ animationDelay: '0.1s' }}>
                            VISIBILIDADE E CONTROLE
                        </div>
                        <h2 className="text-3xl md:text-6xl font-serif font-black text-[#051020] mb-10 leading-tight stagger-reveal" style={{ animationDelay: '0.2s' }}>
                            A segurança de saber exatamente <br className="hidden md:block" />
                            quem ligou e <span className="text-gold italic font-light">o que foi solicitado.</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 stagger-reveal" style={{ animationDelay: '0.3s' }}>
                            Cada ligação gera um registro objetivo e imediato. Você elimina a ansiedade de descobrir, dias depois, que uma oportunidade importante se perdeu no silêncio do escritório.
                            <br /><br />
                            Menos incerteza. Mais clareza para o seu próximo passo estratégico.
                        </p>
                        
                        <div className="space-y-6 stagger-reveal" style={{ animationDelay: '0.4s' }}>
                            {[
                                "Triagem semântica imediata",
                                "Registro auditável da chamada",
                                "Controle absoluto do histórico"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:border-gold/30 transition-all duration-500">
                                        <div className="w-5 h-5 text-gold flex items-center justify-center font-bold">✓</div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#051020]">{item}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative stagger-reveal" style={{ animationDelay: '0.5s' }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[120px] -z-10 rounded-full"></div>
                        
                        <div className="glass-card rounded-[60px] p-6 md:p-12 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden bg-white/40">
                            {/* Inner Header */}
                            <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#051020] flex items-center justify-center text-white shadow-lg">
                                        <div className="w-6 h-6 border-2 border-white/30 rounded-full border-t-white animate-spin"></div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Escritório de Elite</div>
                                        <div className="text-sm font-bold text-[#051020]">Controle de Recepção</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-gold/40"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                </div>
                            </div>

                            {/* Dossier Items with darker background elements */}
                            <div className="space-y-6 bg-slate-50/50 p-6 rounded-[40px] border border-slate-100 shadow-inner">
                                <div className="p-6 rounded-[32px] bg-white shadow-xl border border-slate-50 flex items-center justify-between animate-float" style={{ animationDelay: '0s' }}>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] flex items-center justify-center text-green-600 font-bold">RC</div>
                                        <div>
                                            <div className="text-sm font-black text-[#051020]">Ricardo Costa</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400">Ação Trabalhista • Urgente</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-green-100">NOVO LEAD</div>
                                </div>

                                <div className="p-6 rounded-[32px] bg-white shadow-xl border border-slate-50 flex items-center justify-between translate-x-4 animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-purple-600 font-bold">MA</div>
                                        <div>
                                            <div className="text-sm font-black text-[#051020]">Maria Almeida</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400">Família • Consulta Agendada</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">CONFIRMADO</div>
                                </div>

                                <div className="p-6 rounded-[32px] bg-white/80 backdrop-blur-sm border border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold">JS</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-400 line-through">João Silva</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-300">Dúvida Processual • Resolvido</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">ARQUIVADO</div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
