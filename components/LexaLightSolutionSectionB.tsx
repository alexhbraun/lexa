import React from 'react';
import { ShieldCheckIcon } from './Icons';

export const LexaLightSolutionSectionB: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 reveal">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
                    {/* Left Column: Narrative */}
                    <div className="text-left">
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                            SOLUÇÃO
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                            Conheça Sua Nova Recepcionista de IA <br/>
                            <span className="text-gold italic font-light">Feita para Escritórios de Advocacia</span>
                        </h2>
                        
                        <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                            Imagine se cada ligação para seu escritório fosse atendida por uma assistente profissional e inteligente.
                        </p>

                        <div className="space-y-6 border-t border-slate-200 pt-8">
                             <p className="text-2xl font-bold text-[#051020]">
                                É exatamente isso que nosso Agente de IA por Voz faz.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Ele atende suas ligações recebidas como uma recepcionista de verdade, coleta todas as informações relevantes e te envia um resumo acionável para que você possa decidir o que fazer em seguida.
                            </p>
                            <p className="text-lg font-bold text-gold italic">
                                Chega de buracos negros de caixa postal. Chega de oportunidades perdidas. Chega de clientes frustrados.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Checklist Card */}
                    <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] h-fit">
                        <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-8 text-center lg:text-left">O que ela faz por você:</h3>
                         <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-navy-acc/5 flex items-center justify-center shrink-0">
                                     <span className="text-navy-acc font-bold text-sm">✓</span>
                                </div>
                                <span className="text-slate-700 text-lg">Nunca perde uma ligação <span className="text-slate-400 text-base block mt-1">(mesmo quando você está ocupado, no tribunal, ou fora do horário)</span></span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-navy-acc/5 flex items-center justify-center shrink-0">
                                     <span className="text-navy-acc font-bold text-sm">✓</span>
                                </div>
                                <span className="text-slate-700 text-lg">Fala naturalmente com os clientes em português</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-navy-acc/5 flex items-center justify-center shrink-0">
                                     <span className="text-navy-acc font-bold text-sm">✓</span>
                                </div>
                                <span className="text-slate-700 text-lg">Captura cada detalhe importante</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-navy-acc/5 flex items-center justify-center shrink-0">
                                     <span className="text-navy-acc font-bold text-sm">✓</span>
                                </div>
                                <span className="text-slate-700 text-lg">Qualifica novos leads automaticamente</span>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-navy-acc/5 flex items-center justify-center shrink-0">
                                     <span className="text-navy-acc font-bold text-sm">✓</span>
                                </div>
                                <span className="text-slate-700 text-lg">Tranquiliza clientes existentes profissionalmente</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-navy-acc/5 flex items-center justify-center shrink-0">
                                     <span className="text-navy-acc font-bold text-sm">✓</span>
                                </div>
                                <span className="text-slate-700 text-lg">Organiza tudo para que você possa fazer follow-up rapidamente</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row: Visual Proof (Centered) */}
                <div className="relative max-w-4xl mx-auto">
                     <div 
                        className="relative w-full rounded-[24px] overflow-hidden bg-transparent reveal"
                        style={{
                            boxShadow: '0 0 0 1px rgba(180,138,58,0.25), 0 30px 80px rgba(0,0,0,0.15)',
                            animationDelay: '0.2s'
                        }}
                    >
                        <img 
                            src="https://ik.imagekit.io/rgqefde41/Gemini_Generated_Image_aaaibraaaibraaai.png"
                            alt="Resumo de Chamada - Lexa"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                    {/* Decorative glow behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/10 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};
