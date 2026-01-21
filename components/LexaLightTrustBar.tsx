import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClockIcon, FileTextIcon, ShieldCheckIcon, BriefcaseIcon } from './Icons'; // Using Briefcase for "Criada para escritórios"

const TrustItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 cursor-default">
        <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#F8F9FC] flex items-center justify-center text-gold shadow-sm border border-slate-100 group-hover:scale-105 group-hover:bg-white group-hover:border-gold/20 transition-all duration-300">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-[#051020] text-sm md:text-[15px] mb-1 leading-tight group-hover:text-navy-acc transition-colors">{title}</h4>
            <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed max-w-[200px] md:max-w-none mx-auto font-medium">{text}</p>
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
                <div className="bg-white border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] rounded-[32px] p-4 md:py-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <TrustItem 
                            icon={<ClockIcon className="w-6 h-6" />}
                            title="Atendimento automático incluído"
                            text="Durante audiências e fora do expediente"
                        />
                        <TrustItem 
                            icon={<FileTextIcon className="w-6 h-6" />}
                            title="Cancelamento mensal flexível"
                            text="Sem fidelidade ou multa"
                        />
                        <TrustItem 
                            icon={<BriefcaseIcon className="w-6 h-6" />}
                            title="Criada para escritórios jurídicos"
                            text="Linguagem e postura adequadas"
                        />
                        <TrustItem 
                            icon={<ShieldCheckIcon className="w-6 h-6" />}
                            title="LGPD e sigilo profissional"
                            text="Processos alinhados às normas"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
