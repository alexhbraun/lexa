import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ZapIcon } from './Icons';
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
                            <div className="mb-8">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Nível 1 • Essencial</h3>
                                <div className="text-3xl font-black text-[#051020] mb-2 tracking-tight">Baixo Volume</div>
                                <p className="text-slate-500 text-sm font-medium">Para advogados com fluxo ocasional.</p>
                            </div>
                            <div className="mb-8 py-6 border-y border-slate-50">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-[#051020] tracking-tight">R$ 297</span>
                                    <span className="text-slate-400 text-sm font-bold">/ mês</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-slate-600 text-sm font-bold flex-grow">
                                <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Suporta até ~5 ligações/dia</li>
                                <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Cobertura de ausência</li>
                                <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Resumos via WhatsApp</li>
                            </ul>
                            {hasUsed ? (
                                <button onClick={() => handleSelectPlan('Nível 1')} className="w-full py-5 rounded-full bg-slate-50 text-slate-900 font-black hover:bg-[#051020] hover:text-white transition-all text-sm uppercase tracking-wider">
                                    Escolher Nível 1
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
                            <div className="mb-8">
                                <h3 className="text-xs font-black text-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <ZapIcon className="w-4 h-4" /> Nível 2 • Profissional
                                </h3>
                                <div className="text-4xl font-black text-white mb-2 tracking-tight">Volume Ativo</div>
                                <p className="text-gold/80 text-sm font-medium">Recomendado para a maioria.</p>
                            </div>
                            <div className="mb-8 py-6 border-y border-white/10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-white tracking-tight">R$ 497</span>
                                    <span className="text-white/40 text-sm font-bold">/ mês</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-white/90 text-[15px] font-bold flex-grow">
                                <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Suporta até ~10 ligações/dia</li>
                                <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Prioridade na fila</li>
                                <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Gestão de picos de demanda</li>
                            </ul>
                            {hasUsed ? (
                                <button onClick={() => handleSelectPlan('Nível 2')} className="group shimmer relative w-full py-6 rounded-full bg-gold text-navy-acc font-black shadow-lg hover:scale-[1.02] transition-all overflow-hidden text-sm uppercase tracking-wider">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    Escolher Nível 2 e Continuar
                                </button>
                            ) : (
                                <div className="w-full py-6 rounded-full bg-white/5 text-white/20 font-black text-center text-[10px] uppercase tracking-widest border border-dashed border-white/10">
                                    Disponível após o primeiro uso
                                </div>
                            )}
                        </div>

                        {/* LEVEL 3 */}
                        <div className="bg-white rounded-[40px] p-10 border border-white/60 shadow-[0_40px_100px_-20px_rgba(5,16,32,0.05)] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-8">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Nível 3 • Ilimitado</h3>
                                <div className="text-3xl font-black text-[#051020] mb-2 tracking-tight">Alto Tráfego</div>
                                <p className="text-slate-500 text-sm font-medium">Para escritórios consolidados.</p>
                            </div>
                            <div className="mb-8 py-6 border-y border-slate-50">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-[#051020] tracking-tight">R$ 997</span>
                                    <span className="text-slate-400 text-sm font-bold">/ mês</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-slate-600 text-sm font-bold flex-grow">
                                <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Chamadas ilimitadas</li>
                                <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Sem risco de gargalo</li>
                                <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-slate-300" /> Atendimento prioritário</li>
                            </ul>
                            {hasUsed ? (
                                <button onClick={() => handleSelectPlan('Nível 3')} className="w-full py-5 rounded-full bg-slate-50 text-slate-900 font-black hover:bg-[#051020] hover:text-white transition-all text-sm uppercase tracking-wider">
                                    Escolher Nível 3
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
