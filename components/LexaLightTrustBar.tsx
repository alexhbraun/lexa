import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClockIcon, FileTextIcon, ShieldCheckIcon, BriefcaseIcon } from './Icons'; // Using Briefcase for "Criada para escritórios"

const TrustItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="flex-none w-full md:w-auto group flex items-center gap-[14px] p-[14px] px-[20px] min-w-[260px] rounded-xl bg-white/[0.03] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.06] snap-center">
        <div className="shrink-0 w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center border border-white/[0.10]">
            <div className="opacity-95 text-gold">
                {icon}
            </div>
        </div>
        <div className="text-left">
            <h4 className="font-semibold text-[rgba(255,255,255,0.92)] text-[15px] mb-0 leading-tight tracking-tight">{title}</h4>
            <p className="text-[rgba(255,255,255,0.68)] text-[12.5px] leading-[1.4] mt-0.5">{text}</p>
        </div>
    </div>
);

export const LexaLightTrustBar: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    // Create a subtle parallax float effect
    // As the user scrolls down, the bar moves up slightly slower than the page (negative translate)
    // or slightly faster (positive). 
    // Let's make it float "up" slightly to feel detached.
    const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="relative z-20 -mt-8 mb-16 px-4">
            <motion.div 
                style={{ y, opacity }}
                className="container mx-auto"
            >
                <div className="bg-[#051020] border border-slate-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] rounded-[32px] p-4 md:py-6 md:px-8 overflow-hidden">
                    <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pb-4 md:pb-0 -mb-4 md:mb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-none">
                        <TrustItem 
                            icon={<ClockIcon className="w-5 h-5" />}
                            title="A partir de apenas R$297 mensal"
                            text="Com 150 minutos inclusos"
                        />
                        <TrustItem 
                            icon={<FileTextIcon className="w-5 h-5" />}
                            title="Cancelamento mensal flexível"
                            text="Sem fidelidade ou multa"
                        />
                        <TrustItem 
                            icon={<BriefcaseIcon className="w-5 h-5" />}
                            title="Criada para escritórios jurídicos"
                            text="Linguagem e postura adequadas"
                        />
                        <TrustItem 
                            icon={<ShieldCheckIcon className="w-5 h-5" />}
                            title="LGPD e sigilo profissional"
                            text="Processos alinhados às normas"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
