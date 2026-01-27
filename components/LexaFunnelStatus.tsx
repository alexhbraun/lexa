import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon } from './Icons';

interface LexaFunnelStatusProps {
    onNavigate: (view: string) => void;
}

export const LexaFunnelStatus: React.FC<LexaFunnelStatusProps> = ({ onNavigate }) => {
    // Removed simulated progression useEffect

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
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-4 tracking-tight">
                            Preparando sua Lexa.
                            <br/><span className="text-gold italic font-light">Sem surpresas.</span>
                        </h1>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">
                            Estamos deixando tudo pronto para que o teste funcione sem surpresas.
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 shadow-inner mb-8 relative overflow-hidden">
                        <div className="space-y-8 relative z-10">
                            <h3 className="text-sm font-black text-[#051020] uppercase tracking-wider mb-4">Etapas do Processo</h3>
                            
                            {/* Static Steps List */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                                    <div>
                                        <p className="font-bold text-[#051020] text-sm uppercase tracking-wide">Reserva Recebida</p>
                                        <p className="text-sm text-slate-500 leading-relaxed">Seu pedido já está com nossa equipe técnica.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                                    <div>
                                        <p className="font-bold text-[#051020] text-sm uppercase tracking-wide">Criação do Ambiente</p>
                                        <p className="text-sm text-slate-500 leading-relaxed">Configuramos a inteligência e a voz da sua Lexa.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                                    <div>
                                        <p className="font-bold text-[#051020] text-sm uppercase tracking-wide">Liberação Técnica</p>
                                        <p className="text-sm text-slate-500 leading-relaxed">Confirmamos que o encaminhamento funcionará no seu número.</p>
                                    </div>
                                </div>
                            </div>
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
