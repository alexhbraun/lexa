import React from 'react';
import { UserIcon, HeadphonesIcon, VoiceIcon } from './Icons';

export const LexaLightCloningSectionB: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-[#051020] reveal relative overflow-hidden">
            <div className="container mx-auto px-6">
                 {/* Standard Header Layout */}
                 <div className="text-center max-w-4xl mx-auto mb-20">
                    {/* Consistent Eyebrow */}
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        REALIDADE
                    </div>
                    {/* Consistent Headline Size */}
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-8 leading-tight">
                        Você Não Pode Se Clonar <br/><span className="text-gold italic font-light font-serif">(Mas Nós Podemos Ajudar)</span>
                    </h2>
                    
                    <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                        Você está no tribunal, em reuniões, ou realmente fazendo trabalho jurídico. Esse é o trabalho.
                    </p>
                </div>

                {/* Rejection Eyebrow */}
                <div className="text-center mb-8">
                    <span className="text-gold opacity-85 text-[11px] font-black uppercase tracking-[0.08em]">
                        POR QUE AS SOLUÇÕES TRADICIONAIS NÃO RESOLVEM
                    </span>
                </div>

                {/* Cards Layout matching visual reference */}
                {/* Cards Layout matching visual reference - Rejected Paths */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    <div 
                         className="relative p-8 rounded-[40px] border border-dashed border-white/20 h-full flex flex-col"
                         style={{ 
                             background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                             filter: 'grayscale(20%)',
                             opacity: 0.78
                         }}
                    >
                        {/* Blocked Watermark */}
                        <div className="absolute top-4 right-5 text-xl font-bold text-white/25 select-none">✕</div>
                        
                        <h4 className="text-xl font-bold text-white/90 mb-4 flex items-center gap-3">
                        <UserIcon className="w-6 h-6 text-white/55 shrink-0" /> Secretária
                        </h4>
                        <p className="text-white/60 text-[15px] font-light leading-relaxed">Contratar uma secretária? Caro. E ela ainda perde ligações quando está no almoço ou em outra linha.</p>
                    </div>

                    <div 
                         className="relative p-8 rounded-[40px] border border-dashed border-white/20 h-full flex flex-col"
                         style={{ 
                             background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                             filter: 'grayscale(20%)',
                             opacity: 0.78
                         }}
                    >
                        {/* Blocked Watermark */}
                        <div className="absolute top-4 right-5 text-xl font-bold text-white/25 select-none">✕</div>

                        <h4 className="text-xl font-bold text-white/90 mb-4 flex items-center gap-3">
                        <HeadphonesIcon className="w-6 h-6 text-white/55 shrink-0" /> Call Center
                        </h4>
                        <p className="text-white/60 text-[15px] font-light leading-relaxed">Call center? Ainda mais caro. Além disso, eles não entendem sua prática ou seus clientes.</p>
                    </div>

                    <div 
                         className="relative p-8 rounded-[40px] border border-dashed border-white/20 h-full flex flex-col"
                         style={{ 
                             background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                             filter: 'grayscale(20%)',
                             opacity: 0.78
                         }}
                    >
                        {/* Blocked Watermark */}
                        <div className="absolute top-4 right-5 text-xl font-bold text-white/25 select-none">✕</div>

                        <h4 className="text-xl font-bold text-white/90 mb-4 flex items-center gap-3">
                        <VoiceIcon className="w-6 h-6 text-white/55 shrink-0" /> Recepcionista Virtual
                        </h4>
                        <p className="text-white/60 text-[15px] font-light leading-relaxed">Serviços de recepcionista virtual? Scripts genéricos que soam robóticos e perdem detalhes críticos.</p>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center max-w-4xl mx-auto">
                        <p className="text-2xl md:text-3xl text-white font-black italic leading-tight">
                        A matemática é simples: <span className="text-slate-500 font-light not-italic">toda solução custa mais do que as ligações que você está perdendo...</span> <span className="text-gold">até agora.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};
