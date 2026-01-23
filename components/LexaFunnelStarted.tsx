import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, ShieldCheckIcon } from './Icons';

interface LexaFunnelStartedProps {
    onNavigate: (view: string) => void;
}

export const LexaFunnelStarted: React.FC<LexaFunnelStartedProps> = ({ onNavigate }) => {
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

            {/* Branding Header */}
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
                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-white/60 p-8 md:p-12 relative overflow-hidden ring-1 ring-slate-900/5 text-center">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                    <div className="w-24 h-24 bg-[#051020] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl ring-8 ring-gold/5 relative">
                         <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-ping"></div>
                        <ShieldCheckIcon className="w-12 h-12 text-gold" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-black text-[#051020] mb-6 tracking-tight leading-tight">
                        Teste iniciado.
                    </h1>
                    <p className="text-xl text-slate-500 font-light mb-12">
                        A Lexa já está atendendo chamadas do seu escritório.
                    </p>

                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-inner mb-10 text-left relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"></div>
                        <div className="flex items-start gap-5 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-white text-[#051020] border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                <ClockIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-[#051020] text-lg mb-1 tracking-tight">Período de Avaliação</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    Você tem <strong className="text-navy-acc">3 dias ou 30 minutos de atendimento</strong> para avaliar com calma.
                                </p>
                            </div>
                        </div>
                        
                        <div className="pl-[68px]">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider leading-relaxed">
                                Ao final do teste, você decide se deseja continuar — <span className="text-[#051020]">sem surpresas.</span>
                            </p>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate('trial')} 
                        className="group shimmer relative w-full flex items-center justify-center gap-4 bg-black text-white font-bold text-lg py-5 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)] border border-gold/30 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] overflow-hidden"
                    >
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10">Acompanhar meu teste</span>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};
