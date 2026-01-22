import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon } from './Icons';

interface LexaFunnelConfirmedProps {
    onNavigate: (view: string) => void;
}

export const LexaFunnelConfirmed: React.FC<LexaFunnelConfirmedProps> = ({ onNavigate }) => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 font-sans text-slate-900 relative overflow-hidden">
             {/* Background */}
            <div className="absolute inset-0 -z-10">
                <img 
                    src="/assets/images/lexa_brazil_boutique_hero.png" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-sm opacity-50 scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50/90"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="pt-12 pb-8 flex justify-center relative z-10">
                <img 
                    src="https://ik.imagekit.io/rgqefde41/Design%20sem%20nome%20(8).png" 
                    alt="Lexa Logo" 
                    className="h-16 w-auto"
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[580px] w-full relative z-10"
            >
                {/* Ceramic Card */}
                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-white/60 p-8 md:p-12 relative overflow-hidden ring-1 ring-slate-900/5 text-center">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                    <div className="w-16 h-16 bg-navy-acc text-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg ring-4 ring-gold/10">
                        <CheckCircleIcon className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif font-black text-[#051020] mb-4 leading-tight tracking-tight">
                        Teste reservado com sucesso
                    </h1>
                    <p className="text-slate-500 text-lg font-light mb-10 leading-relaxed">
                        Agora vamos preparar sua Lexa.
                    </p>

                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner mb-10 text-left relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                        
                        <div className="mb-8">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#051020]">Progresso da Configuração</span>
                                <span className="text-[10px] font-black text-gold">30%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gold w-[30%] shadow-[0_0_10px_rgba(197,160,89,0.3)]"></div>
                            </div>
                        </div>

                        <p className="text-[#051020] font-bold leading-relaxed mb-6 text-lg">
                            Para garantir que o atendimento funcione corretamente no seu número, 
                            criamos o ambiente da Lexa de forma dedicada.
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Isso normalmente leva até o próximo dia útil.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-slate-100 text-left shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#051020]">Status Atual</span>
                            </div>
                            <p className="text-sm font-bold text-slate-700 pl-5 mb-5 relative">
                                <span className="absolute left-[2px] top-2 bottom-[-20px] w-px bg-slate-200"></span>
                                Preparação do ambiente em andamento
                            </p>
                            
                            <div className="flex items-center gap-3 mb-1 opacity-60">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Próximo Passo</span>
                            </div>
                            <p className="text-sm text-slate-400 pl-5 font-medium">Configuração do atendimento e liberação do teste</p>
                        </div>
                    </div>

                    <div className="mb-10 max-w-sm mx-auto">
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold uppercase tracking-wide">
                            O período de teste <span className="text-navy-acc">só começa quando a Lexa atender a primeira ligação real.</span>
                        </p>
                    </div>

                    <button 
                        onClick={() => onNavigate('status')} 
                        className="group shimmer relative w-full flex items-center justify-center gap-4 bg-navy-acc text-white font-bold text-sm py-5 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)] overflow-hidden uppercase tracking-widest"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10">Acompanhar Status</span>
                        <div className="bg-gold p-1.5 rounded-full relative z-10 group-hover:rotate-12 transition-transform duration-300">
                            <ClockIcon className="w-4 h-4 text-navy-acc" />
                        </div>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};
