import React from 'react';
import { IconAtendimento24h, IconResumosAutomaticos, IconTransferenciaHumana } from './Icons';

export const LexaLightFeaturesSectionB: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-[#051020] reveal">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        TUDO INCLUSO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
                        O Que Você Recebe. <br/>
                        <span className="text-gold italic font-light">Realmente.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div 
                        className="group relative p-8 rounded-[40px] border border-white/10 transition-all duration-700 hover:-translate-y-2 hover:border-gold/30 overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
                        }}
                    >
                         {/* Aura Halo */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                             style={{ background: 'radial-gradient(circle at center, rgba(180,138,58,0.15), transparent 70%)' }}>
                        </div>

                        <div className="w-12 h-12 bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-gold mb-6 border border-gold/20 backdrop-blur-sm relative z-10">
                            <IconTransferenciaHumana className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white/95 mb-4 relative z-10">Notificações Instantâneas</h3>
                        <p className="text-white/70 text-[15px] font-light leading-relaxed relative z-10">
                            Seja alertado no momento em que uma ligação chega — por e-mail no nosso plano Básico, ou via WhatsApp nos nossos planos Plus e Ilimitado. Você decide quando responder.
                        </p>
                    </div>

                    <div 
                        className="group relative p-8 rounded-[40px] border border-white/10 transition-all duration-700 hover:-translate-y-2 hover:border-gold/30 overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
                        }}
                    >
                         {/* Aura Halo */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                             style={{ background: 'radial-gradient(circle at center, rgba(180,138,58,0.15), transparent 70%)' }}>
                        </div>

                        <div className="w-12 h-12 bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-gold mb-6 border border-gold/20 backdrop-blur-sm relative z-10">
                            <IconResumosAutomaticos className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white/95 mb-4 relative z-10">Painel de Chamadas Organizado</h3>
                        <p className="text-white/70 text-[15px] font-light leading-relaxed relative z-10">
                            Cada ligação registrada automaticamente em uma planilha limpa. Nome, número de telefone, tipo de caso, urgência, notas — tudo organizado para que você possa priorizar e fazer follow-up rapidamente.
                        </p>
                    </div>

                    <div 
                        className="group relative p-8 rounded-[40px] border border-white/10 transition-all duration-700 hover:-translate-y-2 hover:border-gold/30 overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
                        }}
                    >
                         {/* Aura Halo */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                             style={{ background: 'radial-gradient(circle at center, rgba(180,138,58,0.15), transparent 70%)' }}>
                        </div>

                        <div className="w-12 h-12 bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-gold mb-6 border border-gold/20 backdrop-blur-sm relative z-10">
                            <IconAtendimento24h className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white/95 mb-4 relative z-10">Nunca Mais Perca Receita</h3>
                        <p className="text-white/70 text-[15px] font-light leading-relaxed relative z-10">
                            Aquele prospect que teria ligado para seu concorrente? Ele acabou de falar com sua "recepcionista" e você tem as informações dele. Aquele cliente existente que precisava de tranquilidade? Ele recebeu, e está esperando seu retorno.
                        </p>
                    </div>

                    <div 
                        className="group relative p-8 rounded-[40px] border border-white/10 transition-all duration-700 hover:-translate-y-2 hover:border-gold/30 overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
                        }}
                    >
                         {/* Aura Halo */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                             style={{ background: 'radial-gradient(circle at center, rgba(180,138,58,0.15), transparent 70%)' }}>
                        </div>

                        <div className="w-12 h-12 bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-gold mb-6 border border-gold/20 backdrop-blur-sm relative z-10">
                             <span className="text-xl font-serif font-black">★</span>
                        </div>
                        <h3 className="text-xl font-bold text-white/95 mb-4 relative z-10">Imagem Profissional</h3>
                        <p className="text-white/70 text-[15px] font-light leading-relaxed relative z-10">
                            Você parece um escritório maior. O cliente só sabe que alguém competente atendeu e ajudou.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
