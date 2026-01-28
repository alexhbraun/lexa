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

                    <div className="w-16 h-16 bg-[#051020] text-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg ring-4 ring-gold/10">
                        <CheckCircleIcon className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-4 leading-tight tracking-tight">
                        Reserva confirmada.
                        <br/><span className="text-gold italic font-light">Criando seu ambiente Lexa.</span>
                    </h1>
                    <p className="text-slate-500 text-lg font-light mb-10 leading-relaxed">
                        Seus 7 dias grátis só começam quando a Lexa atender a primeira ligação.
                    </p>

                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner mb-10 text-left relative overflow-hidden">
                        <h3 className="text-sm font-black text-[#051020] uppercase tracking-wider mb-4">Próximo Passo: Fique de olho no seu WhatsApp</h3>
                        <p className="text-[#051020] font-bold leading-relaxed mb-4 text-lg">
                            Você será avisado por WhatsApp assim que o teste estiver liberado.
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-0">
                            Nossa equipe técnica já está preparando seu ambiente. Esse processo de configuração manual garante qualidade total e normalmente é concluído **até o próximo dia útil**.
                        </p>
                    </div>

                    <div className="mb-10 text-left px-4">
                        <p className="text-base text-[#051020] leading-relaxed font-bold mb-2">
                            O período de teste só começa quando a Lexa atender a primeira ligação real.
                        </p>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Assim, você testa de verdade — sem perder tempo de avaliação.
                        </p>
                    </div>

                    <div className="mb-12 text-left bg-slate-50/50 rounded-3xl p-6 border border-slate-100/50">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">O que isso significa na prática</h4>
                        <ul className="space-y-2 text-sm font-bold text-slate-600">
                            <li className="flex items-center gap-2">• Nenhuma cobrança durante a preparação</li>
                            <li className="flex items-center gap-2">• Nenhuma ligação desviada antes do teste começar</li>
                            <li className="flex items-center gap-2">• Nenhum compromisso até você decidir continuar</li>
                        </ul>
                    </div>

                    <button 
                        onClick={() => onNavigate('landing')} 
                        className="group shimmer relative w-full flex items-center justify-center gap-4 bg-black text-white font-bold text-sm py-5 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)] border border-gold/30 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] overflow-hidden uppercase tracking-widest"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10">Voltar para o site</span>
                        <div className="bg-gold p-1.5 rounded-full relative z-10 group-hover:rotate-12 transition-transform duration-300">
                            <ClockIcon className="w-4 h-4 text-[#051020]" />
                        </div>
                    </button>

                </div>
            </motion.div>
        </section>
    );
};
