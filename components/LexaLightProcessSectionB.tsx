import React from 'react';
import { PhoneIcon, IconResumosAutomaticos, IconTransferenciaHumana, IconAtendimento24h, ShieldCheckIcon } from './Icons';

const Step: React.FC<{ number: string; title: string; text: React.ReactNode; icon: React.ReactNode }> = ({ number, title, text, icon }) => (
    <div className="group bg-white p-6 md:p-10 rounded-[40px] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] hover:border-gold/30 relative h-full flex flex-col items-center">
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold text-navy-acc border border-slate-100 shadow-lg group-hover:scale-110 transition-transform duration-500">
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

export const LexaLightProcessSectionB: React.FC = () => {
    return (
        <section id="como-funciona" className="py-20 md:py-32 bg-slate-50 reveal relative overflow-hidden">
             {/* Subtle decorative blob for glassmorphism context */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50/0 -z-10 blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        PASSO A PASSO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Veja Como Funciona <br />
                        <span className="text-gold italic font-light">(É um teste real — sem compromisso)</span>
                    </h2>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 relative pb-8 pt-8 md:pt-0 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar md:overflow-visible mb-16">
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
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="02"
                            title="Teste de Encaminhamento"
                            text={
                                <>
                                    Vamos validar o encaminhamento do seu número para garantir que as ligações sejam roteadas corretamente.<br/><br/>
                                    Esse teste técnico leva cerca de 2 minutos e confirma que:<br/><br/>
                                    <ul className="text-left space-y-2 list-none bg-slate-100 p-4 rounded-xl border border-slate-200 text-sm">
                                        <li className="flex gap-2"><span className="text-gold font-bold">✓</span> nada será perdido</li>
                                        <li className="flex gap-2"><span className="text-gold font-bold">✓</span> você pode voltar ao estado original quando quiser</li>
                                    </ul>
                                </>
                            }
                            icon={<PhoneIcon className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="03"
                            title="Início do Teste Real (3 dias)"
                            text={
                                <>
                                    Nossa equipe configura a Lexa para o seu escritório e libera o período de teste real.<br/><br/>
                                    Nossa equipe configura a Lexa para o seu escritório e libera o período de teste real.<br/><br/>
                                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 w-full">
                                        <div className="flex flex-col gap-2 mb-3">
                                            <div className="flex items-center gap-2 justify-center text-slate-700 font-bold text-sm">
                                                <span className="text-gold">✓</span> Chamadas Reais
                                            </div>
                                            <div className="flex items-center gap-2 justify-center text-slate-700 font-bold text-sm">
                                                <span className="text-gold">✓</span> Registros Reais
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

                <div className="mt-20 max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-xl">
                     <h3 className="text-2xl font-bold text-[#051020] mb-8 text-center">Então, quando uma ligação chega:</h3>
                     <ul className="space-y-4 text-left md:text-center text-slate-600 text-lg mb-12">
                        <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> A Lexa atende profissionalmente em português
                        </li>
                        <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Faz as perguntas certas (sem aconselhamento jurídico)
                        </li>
                        <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Captura nome, contato, contexto e urgência
                        </li>
                         <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Te envia um resumo imediato para você decidir o próximo passo
                        </li>
                         <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> O cliente se sente ouvido — não ignorado
                        </li>
                     </ul>

                     <div className="text-center border-t border-slate-100 pt-8">
                         <div className="mb-4 text-slate-400 font-medium italic">
                            Primeiro você testa. Depois você decide.
                         </div>
                         <button className="shimmer inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-base px-10 py-5 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-xl group">
                            <ShieldCheckIcon className="w-5 h-5 text-bg-1 shrink-0 group-hover:rotate-12 transition-transform" />
                            <span className="leading-tight uppercase">INICIAR TESTE DE 3 DIAS (GRÁTIS E SEM CARTÃO)</span>
                         </button>
                     </div>
                </div>
            </div>
        </section>
    );
};
