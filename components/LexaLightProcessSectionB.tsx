import React from 'react';
import { PhoneIcon, IconResumosAutomaticos, IconTransferenciaHumana, IconAtendimento24h, ShieldCheckIcon } from './Icons';

const Step: React.FC<{ number: string; title: string; text: React.ReactNode; icon: React.ReactNode }> = ({ number, title, text, icon }) => (
    <div className="group bg-white p-6 md:p-10 rounded-[40px] border border-gold/30 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] hover:border-gold/60 relative h-full flex flex-col items-center">
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold text-slate-700 border border-slate-100 shadow-lg group-hover:scale-110 transition-transform duration-500">
            {number}
        </div>
        <div className="flex flex-col items-center text-center flex-grow w-full">
            <div className="h-20 w-20 mb-8 text-gold bg-gold/5 rounded-full p-5 flex items-center justify-center transition-all duration-500 group-hover:bg-navy-acc group-hover:text-gold">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#051020] mb-4 leading-tight">{title}</h3>
            <div className="text-slate-600 text-[15px] leading-relaxed font-light w-full">{text}</div>
        </div>
    </div>
);

export const LexaLightProcessSectionB: React.FC<{ onOpenSurvey?: () => void }> = ({ onOpenSurvey }) => {
    return (
        <section id="como-funciona" className="py-20 md:py-32 bg-slate-50 reveal relative overflow-hidden">
             {/* Subtle decorative blob for glassmorphism context */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50/0 -z-10 blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-12">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        ATIVAÇÃO DO PERÍODO GRÁTIS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Veja Como Ativar Seu Teste <br />
                        <span className="text-gold italic font-light">Em Apenas 3 Passos</span>
                    </h2>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 relative pb-8 pt-4 md:pt-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar md:overflow-visible mb-16 mt-10">
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="01"
                            title="Onboarding Rápido"
                            text={
                                <>
                                    Preencha um formulário simples (leva 5 minutos).<br/><br/>
                                    Coletamos apenas o essencial para que a Lexa atenda de forma adequada à sua realidade jurídica.<br/><br/>
                                    <span className="block p-3 bg-slate-100 rounded-xl text-sm italic border border-slate-200">
                                        Nenhuma ativação comercial acontece aqui. Este passo serve apenas para preparar o seu ambiente de teste.
                                    </span>
                                </>
                            }
                            icon={<IconTransferenciaHumana className="w-full h-full" />}
                        />
                    </div>
                    {/* Card 02: Control */}
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full brightness-[0.97]">
                        <Step
                            number="02"
                            title="Encaminhamento Controlado"
                            text={
                                <>
                                    Validamos juntos o redirecionamento das chamadas, garantindo que tudo funcione perfeitamente.<br/><br/>
                                    <span className="font-bold text-slate-700">O redirecionamento é ativado e desativado exclusivamente por você.</span><br/><br/>
                                    <ul className="text-left space-y-2 list-none bg-slate-100 p-4 rounded-xl border border-slate-200 text-sm">
                                        <li className="flex gap-2"><span className="text-gold font-bold">✓</span> Você decide quando ativar</li>
                                        <li className="flex gap-2"><span className="text-gold font-bold">✓</span> Você reverte quando quiser</li>
                                    </ul>
                                </>
                            }
                            icon={<IconAtendimento24h className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="03"
                            title="Início do Teste Real (3 dias)"
                            text={
                                <>
                                    Com o sistema validado, você libera o teste real. A Lexa atende, você recebe os registros.<br/><br/>
                                    <span className="font-bold text-slate-700">A linha continua sendo sua. A Lexa apenas opera sob sua demanda.</span><br/><br/>
                                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 w-full">
                                        <div className="flex flex-col gap-2 mb-3">
                                            <div className="flex items-center gap-2 justify-center text-slate-700 font-bold text-sm">
                                                <span className="text-gold">✓</span> Monitoramento Total
                                            </div>
                                            <div className="flex items-center gap-2 justify-center text-slate-700 font-bold text-sm">
                                                <span className="text-gold">✓</span> Interrupção Imediata
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-200 pt-2 text-center">
                                            Sem cartão • Sem contrato
                                        </div>
                                    </div>
                                </>
                            }
                            icon={<IconResumosAutomaticos className="w-full h-full" />}
                        />
                    </div>
                </div>

                {/* Trust Micro-line */}
                <div className="flex justify-center mb-12 -mt-8 relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">
                        <span>Sem Fidelidade</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>Reversão Imediata</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>Controle Total</span>
                    </div>
                </div>

                {/* Direct CTA Button (Box Removed) */}
                 <div className="mt-20 max-w-4xl mx-auto text-center">
                     <div className="mb-4 text-slate-400 font-medium italic">
                        Primeiro você testa. Depois você decide.
                     </div>
                     <button onClick={onOpenSurvey} className="shimmer inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-base px-10 py-5 rounded-full transition-all duration-500 hover:scale-105 hover:brightness-105 hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] group border-2 border-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                        <ShieldCheckIcon className="w-5 h-5 text-bg-1 shrink-0 group-hover:rotate-12 transition-transform" />
                        <span className="leading-tight uppercase">INICIAR TESTE DE 3 DIAS (GRÁTIS E SEM CARTÃO)</span>
                     </button>
                </div>
            </div>
        </section>
    );
};
