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

                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner mb-10 relative overflow-hidden">
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-navy-acc text-white flex items-center justify-center shrink-0 shadow-md">
                                    <CheckCircleIcon className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-[#051020]">Reserva recebida</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-gold text-navy-acc flex items-center justify-center shrink-0 animate-pulse shadow-[0_0_15px_rgba(197,160,89,0.4)]">
                                    <ClockIcon className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-[#051020]">Ambiente Lexa em criação</span>
                            </div>

                            <div className="flex items-center gap-4 opacity-40">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                </div>
                                <span className="font-medium text-slate-500">Encaminhamento será liberado</span>
                            </div>

                            <div className="flex items-center gap-4 opacity-40">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                </div>
                                <span className="font-medium text-slate-500">Teste iniciará após primeira ligação</span>
                            </div>
                        </div>
                        {/* Connecting Line */}
                        <div className="absolute left-[54px] top-8 bottom-8 w-px bg-slate-200 -z-0"></div>
                    </div>

                    <div className="text-center">
                        <div className="inline-block bg-navy-acc/5 rounded-xl p-4 border border-navy-acc/10">
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Assim que tudo estiver pronto, avisamos você por e-mail.<br/>
                                <strong className="text-navy-acc">Não há nenhuma cobrança durante esta fase.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
