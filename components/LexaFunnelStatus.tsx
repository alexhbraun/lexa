import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon } from './Icons';

interface LexaFunnelStatusProps {
    onNavigate: (view: string) => void;
}

export const LexaFunnelStatus: React.FC<LexaFunnelStatusProps> = ({ onNavigate }) => {
    // Simulate progression for demo purposes
    useEffect(() => {
        const timer = setTimeout(() => {
            onNavigate('pronta-para-teste');
        }, 5000); // Auto navigate after 5s for demo
        return () => clearTimeout(timer);
    }, [onNavigate]);

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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[580px] w-full relative z-10"
            >
                 {/* Ceramic Card */}
                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-white/60 p-8 md:p-12 relative overflow-hidden ring-1 ring-slate-900/5">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-serif font-black text-[#051020] mb-4 tracking-tight">
                            Preparando sua Lexa
                        </h1>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">
                            Estamos deixando tudo pronto para que o teste funcione sem surpresas.
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 shadow-inner mb-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gold/50"></div>
                        
                        <div className="space-y-8 relative z-10">
                            {/* Step 1 */}
                            <div className="flex items-center gap-5">
                                <div className="w-10 h-10 rounded-full bg-[#051020] text-gold flex items-center justify-center shrink-0 shadow-lg ring-4 ring-gold/10">
                                    <CheckCircleIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-black text-[#051020] text-sm uppercase tracking-wider">Reserva recebida</p>
                                    <p className="text-xs text-slate-500 font-medium">Ambiente em processamento</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-center gap-5">
                                <div className="w-10 h-10 rounded-full bg-gold text-[#051020] flex items-center justify-center shrink-0 animate-pulse shadow-[0_0_20px_rgba(197,160,89,0.5)] ring-4 ring-gold/20">
                                    <ClockIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-black text-[#051020] text-sm uppercase tracking-wider">Ambiente Lexa em criação</p>
                                    <p className="text-xs text-slate-500 font-medium">Configurando inteligência e voz</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-center gap-5 opacity-40 grayscale-[0.5]">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                </div>
                                <div>
                                    <p className="font-black text-slate-400 text-sm uppercase tracking-wider">Encaminhamento será liberado</p>
                                    <p className="text-xs text-slate-400 font-medium">Liberação técnica pendente</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex items-center gap-5 opacity-40 grayscale-[0.5]">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                </div>
                                <div>
                                    <p className="font-black text-slate-400 text-sm uppercase tracking-wider">Teste pronto para iniciar</p>
                                    <p className="text-xs text-slate-400 font-medium">Aguardando configuração final</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Connecting Line */}
                        <div className="absolute left-[54px] top-12 bottom-12 w-px bg-slate-200 -z-0"></div>
                    </div>

                    <div className="mb-10">
                        <div className="flex justify-between items-end mb-3 px-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#051020]">Progresso Geral</span>
                            <span className="text-[10px] font-black text-gold">45%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50 shadow-inner">
                            <div className="h-full bg-gradient-to-r from-gold to-yellow-600 rounded-full w-[45%] shadow-[0_0_15px_rgba(197,160,89,0.2)]"></div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate('pronta-para-teste')} 
                        className="group shimmer relative w-full flex items-center justify-center gap-4 bg-black text-white font-bold text-sm py-5 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)] border border-gold/30 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] overflow-hidden uppercase tracking-widest"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10">Continuar</span>
                        <div className="bg-gold p-1.5 rounded-full relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                             <CheckCircleIcon className="w-4 h-4 text-[#051020]" />
                        </div>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};
