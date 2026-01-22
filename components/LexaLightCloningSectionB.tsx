import React from 'react';
import { UserIcon, HeadphonesIcon, VoiceIcon } from './Icons';

export const LexaLightCloningSectionB: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-white reveal relative overflow-hidden">
            <div className="container mx-auto px-6">
                 {/* Standard Header Layout */}
                 <div className="text-center max-w-4xl mx-auto mb-20">
                    {/* Consistent Eyebrow */}
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        REALIDADE
                    </div>
                    {/* Consistent Headline Size */}
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Você Não Pode Se Clonar <br/><span className="text-gold italic font-light font-serif">(Mas Nós Podemos Ajudar)</span>
                    </h2>
                    
                    <p className="text-xl text-slate-800 font-medium max-w-2xl mx-auto">
                        Você está no tribunal, em reuniões, ou realmente fazendo trabalho jurídico. Esse é o trabalho.
                    </p>
                </div>

                {/* Cards Layout matching visual reference */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    <div className="bg-white p-8 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] hover:border-gold/30 transition-all duration-500">
                            <h4 className="text-xl font-bold text-[#051020] mb-4 flex items-center gap-3">
                            <UserIcon className="w-6 h-6 text-gold shrink-0" /> Secretária
                            </h4>
                            <p className="text-slate-600 text-[15px] font-light leading-relaxed">Contratar uma secretária? Caro. E ela ainda perde ligações quando está no almoço ou em outra linha.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] hover:border-gold/30 transition-all duration-500">
                            <h4 className="text-xl font-bold text-[#051020] mb-4 flex items-center gap-3">
                            <HeadphonesIcon className="w-6 h-6 text-gold shrink-0" /> Call Center
                            </h4>
                            <p className="text-slate-600 text-[15px] font-light leading-relaxed">Call center? Ainda mais caro. Além disso, eles não entendem sua prática ou seus clientes.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] hover:border-gold/30 transition-all duration-500">
                            <h4 className="text-xl font-bold text-[#051020] mb-4 flex items-center gap-3">
                            <VoiceIcon className="w-6 h-6 text-gold shrink-0" /> Recepcionista Virtual
                            </h4>
                            <p className="text-slate-600 text-[15px] font-light leading-relaxed">Serviços de recepcionista virtual? Scripts genéricos que soam robóticos e perdem detalhes críticos.</p>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center max-w-4xl mx-auto">
                        <p className="text-2xl md:text-3xl text-[#051020] font-black italic leading-tight">
                        A matemática é simples: <span className="text-slate-400 font-light not-italic">toda solução custa mais do que as ligações que você está perdendo...</span> <span className="text-gold">até agora.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};
