import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ZapIcon, HelpCircleIcon } from './Icons';
import { Header } from './Header';
import { Footer } from './Footer';

interface LexaFunnelTrialProps {
    onNavigate: (view: string) => void;
    hasUsed?: boolean; // New prop to control button visibility
}

export const LexaFunnelTrial: React.FC<LexaFunnelTrialProps> = ({ onNavigate, hasUsed = true }) => {
    
    // Using the same plans data structure but simplified for the "Conversion" view
    const handleSelectPlan = (plan: string) => {
        alert(`Plano ${plan} selecionado. Redirecionando para checkout...`);
    };

    return (
        <div className="bg-slate-50 text-slate-900 font-sans min-h-screen relative overflow-hidden">
             {/* Background */}
             <div className="absolute inset-0 -z-10">
                <img 
                    src="/assets/images/lexa_brazil_boutique_hero.png" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-sm opacity-30 fixed" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-slate-50/95 fixed"></div>
            </div>

            <Header onLogoClick={() => onNavigate('landing')} />
            
            <main className="pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-6 tracking-tight">
                            Escolha como continuar.
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Quando fizer sentido, você escolhe um plano e continua sem interrupção.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                         {/* LEVEL 1 */}
                         <div className="bg-white rounded-[40px] p-10 border border-white/60 shadow-[0_40px_100px_-20px_rgba(5,16,32,0.05)] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-0 flex-grow">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Plano Essencial • Nível 1</h3>
                                <div className="text-3xl font-black text-[#051020] mb-2 tracking-tight">Fluxo Leve</div>
                                <p className="text-slate-500 text-sm font-medium mb-8">Para advogados com fluxo ocasional.</p>
                                
                                <div className="mb-8 py-6 border-y border-slate-50">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-[#051020] tracking-tight">R$ 297</span>
                                        <span className="text-slate-400 text-sm font-bold">/ mês</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 text-slate-600 text-sm font-bold">
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Até 150 min. de atendimento</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Resumo enviado por e-mail</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Planilha de histórico</li>
                                </ul>
                            </div>
                            {hasUsed ? (
                                <button onClick={() => handleSelectPlan('Essencial')} className="group shimmer relative w-full py-5 rounded-full bg-white text-[#051020] font-black border border-slate-200 hover:border-gold/30 hover:bg-slate-50 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-3">
                                    <span>Escolher Essencial</span>
                                    <div className="bg-gold p-1.5 rounded-full">
                                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#051020]" />
                                    </div>
                                </button>
                            ) : (
                                <div className="w-full py-5 rounded-full bg-slate-50 text-slate-300 font-black text-center text-[10px] uppercase tracking-widest border border-dashed border-slate-200">
                                    Disponível após o primeiro uso
                                </div>
                            )}
                        </div>

                        {/* LEVEL 2 */}
                        <div className="bg-[#051020] rounded-[40px] p-10 border border-slate-800 flex flex-col relative transform md:-translate-y-4 shadow-[0_50px_100px_-20px_rgba(5,16,32,0.3)] ring-1 ring-white/10">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50"></div>
                            <div className="mb-0 flex-grow">
                                <h3 className="text-xs font-black text-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <ZapIcon className="w-4 h-4" /> Plano Profissional • Nível 2
                                </h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-4xl font-black text-white tracking-tight">Fluxo Ativo</div>
                                    <div className="group/tip relative">
                                        <HelpCircleIcon className="w-4 h-4 text-white/30 cursor-help hover:text-gold transition-colors" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-white text-navy-acc text-[10px] font-bold rounded-xl opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-all shadow-xl z-20 leading-relaxed text-center">
                                            Ideal para escritórios com movimento constante e picos de atendimento.
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gold/80 text-sm font-medium mb-8">Recomendado para a maioria.</p>
                                
                                <div className="mb-8 py-6 border-y border-white/10">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black text-white tracking-tight">R$ 497</span>
                                        <span className="text-white/40 text-sm font-bold">/ mês</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 text-white/90 text-[15px] font-bold">
                                    <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Até 300 min. de atendimento</li>
                                    <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Resumo por WhatsApp</li>
                                    <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Planilha de histórico</li>
                                </ul>
                            </div>
                            {hasUsed ? (
                                <button onClick={() => handleSelectPlan('Profissional')} className="group shimmer relative w-full py-6 rounded-full bg-gold text-[#051020] font-black shadow-lg hover:scale-[1.02] transition-all overflow-hidden text-sm uppercase tracking-wider flex items-center justify-center gap-3">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    <span>Escolher Profissional e Continuar</span>
                                    <div className="bg-[#051020] p-1.5 rounded-full">
                                        <ZapIcon className="w-4 h-4 text-gold" />
                                    </div>
                                </button>
                            ) : (
                                <div className="w-full py-6 rounded-full bg-white/5 text-white/20 font-black text-center text-[10px] uppercase tracking-widest border border-dashed border-white/10">
                                    Disponível após o primeiro uso
                                </div>
                            )}
                        </div>

                        {/* LEVEL 3 */}
                        <div className="bg-white rounded-[40px] p-10 border border-white/60 shadow-[0_40px_100px_-20px_rgba(5,16,32,0.05)] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-0 flex-grow">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Plano Ilimitado • Nível 3</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-3xl font-black text-[#051020] tracking-tight">Fluxo Intenso</div>
                                    <div className="group/tip relative">
                                        <HelpCircleIcon className="w-4 h-4 text-slate-300 cursor-help hover:text-gold transition-colors" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-white text-navy-acc text-[10px] font-bold rounded-xl opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-all shadow-xl z-20 leading-relaxed text-center">
                                            Sem limites de chamadas ou duração. Total tranquilidade para grandes volumes.
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm font-medium mb-8">Para escritórios consolidados.</p>
                                
                                <div className="mb-8 py-6 border-y border-slate-50">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-[#051020] tracking-tight">R$ 997</span>
                                        <span className="text-slate-400 text-sm font-bold">/ mês</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 text-slate-600 text-sm font-bold">
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Atendimento Ilimitado</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Resumo por WhatsApp</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Planilha de histórico</li>
                                </ul>
                            </div>
                            {hasUsed ? (
                                <button onClick={() => handleSelectPlan('Ilimitado')} className="group shimmer relative w-full py-5 rounded-full bg-white text-[#051020] font-black border border-slate-200 hover:border-gold/30 hover:bg-slate-50 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-3">
                                    <span>Escolher Ilimitado</span>
                                    <div className="bg-gold p-1.5 rounded-full">
                                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#051020]" />
                                    </div>
                                </button>
                            ) : (
                                <div className="w-full py-5 rounded-full bg-slate-50 text-slate-300 font-black text-center text-[10px] uppercase tracking-widest border border-dashed border-slate-200">
                                    Disponível após o primeiro uso
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
