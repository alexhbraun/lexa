import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { SmoothScrollWrapper } from './SmoothScrollWrapper';
import { 
    CheckCircleIcon, 
    ShieldCheckIcon,
    ZapIcon,
    SmartphoneIcon,
    InfoIcon,
    IconTransferenciaHumana,
    IconResumosAutomaticos,
    IconAtendimento24h
} from './Icons';

interface LexaReservationPageProps {
    onNavigateToPrep: () => void;
}

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-navy-acc' : 'text-slate-700'}`}>
                    {question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="text-slate-500 font-light leading-relaxed pb-6">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

export const LexaReservationPage: React.FC<LexaReservationPageProps> = ({ onNavigateToPrep }) => {
    
    // Parallax Setup
    const { scrollY } = useScroll();
    const heroBgY = useTransform(scrollY, [0, 1000], [0, 500]); // Increased parallax range
    const heroTextY = useTransform(scrollY, [0, 500], [0, 150]); // Increased text movement
    
    // Animation Variants
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 100 }, // Increased Y offset
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // Slower, more elegant ease
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Slower stagger
                delayChildren: 0.1
            }
        }
    };

    const itemFade: Variants = {
        hidden: { opacity: 0, y: 40 }, // Increased item Y offset
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContract = () => {
        onNavigateToPrep();
    };

    const handleScrollToPlans = () => {
        const plansSection = document.getElementById('plans-section');
        if (plansSection) {
            // Lenis handles native smooth scroll behavior automatically if we scroll perfectly
            // But getting the lenis instance here is tricky without context context or global store.
            // However, Lenis intercepts native scrollIntoView if configured, let's try standard.
            // Or just native behavior which lenis respects.
            plansSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SmoothScrollWrapper>
            <div className="bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-gold/30">
                
                {/* 1. HERO POS-QUIZ - PARALLAX & MOTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <motion.div 
                        style={{ y: heroBgY }}
                        className="absolute inset-0 -z-10"
                    >
                        <img
                            src="/assets/images/lexa_light_hero_bg.png"
                            alt="Minimalist Professional Background"
                            className="w-full h-full object-cover object-center opacity-60 scale-110" // scale slightly to avoid edges showing
                        />
                        <div className="absolute inset-0 bg-white/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-black/10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90"></div>
                    </motion.div>

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <motion.div 
                            style={{ y: heroTextY }}
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={itemFade} className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-sm border border-gold/10 px-6 py-2 rounded-full mb-12">
                                <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em]">Avaliação Operacional</span>
                            </motion.div>

                            <motion.h1 variants={itemFade} className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-[#051020] mb-12 max-w-5xl mx-auto leading-[1.05] tracking-tight">
                                Sete dias para confirmar <br />
                                se faz sentido para o <span className="text-gold font-boutique italic font-light">seu escritório.</span>
                            </motion.h1>

                            <motion.p variants={itemFade} className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-16">
                                A implementação ocorre em paralelo à sua estrutura atual, sem alterações definitivas.
                                <br className="hidden md:block" />
                                Você observa o desempenho real e decide a continuidade apenas ao final.
                            </motion.p>

                            <motion.div variants={itemFade} className="flex flex-col items-center justify-center gap-6">
                                <button
                                    onClick={handleScrollToPlans}
                                    className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-4 sm:gap-6 bg-navy-acc text-white font-bold text-lg md:text-2xl px-8 sm:px-16 py-5 sm:py-8 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)]"
                                >
                                    <span className="leading-tight">Reservar Avaliação de 7 Dias</span>
                                    <div className="bg-gold p-2 rounded-full group-hover:rotate-[360deg] transition-all duration-1000">
                                        <ZapIcon className="w-5 h-5 text-navy-acc" />
                                    </div>
                                </button>
                                <p className="text-sm text-slate-400 font-medium flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100">
                                        <CheckCircleIcon className="w-3.5 h-3.5" />
                                    </div>
                                    A continuidade é opcional. Sem renovação automática.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. CONTROL (SHORT VERSION) - REASSURANCE */}
                {/* Removed as requested */}

                {/* 3. CENTRAL BLOCK - DEMAND & 4. PLANS - COVERAGE LEVELS */}
                <motion.section 
                    id="plans-section" 
                    className="py-32 bg-[#051020] relative overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div variants={itemFade} className="text-center max-w-5xl mx-auto mb-24">
                            <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                                DEFINIÇÃO DE CAPACIDADE
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight">
                                Qual a demanda de ligações <br className="hidden md:block" />
                                que seu escritório <span className="text-gold font-boutique italic font-light">deixa de atender?</span>
                            </h2>
                            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                                Escolha o nível de cobertura necessário para garantir que nenhuma oportunidade seja perdida.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch relative"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >

                            {/* LEVEL 1 */}
                            <motion.div variants={itemFade} className="bg-white/5 backdrop-blur-xl rounded-[40px] p-10 border border-white/10 flex flex-col hover:border-white/30 transition-all duration-300">
                                <div className="mb-8">
                                    <h3 className="text-sm font-black text-white/50 uppercase tracking-widest mb-4">Nível 1 • Essencial</h3>
                                    <div className="text-4xl font-black text-white mb-2">Baixo Volume</div>
                                    <p className="text-white/60 text-sm font-light">Para advogados com fluxo ocasional.</p>
                                </div>
                                <div className="mb-8 py-4 border-y border-white/10">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-white">R$ 297</span>
                                        <span className="text-white/40 text-sm">/ mês</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 text-white/70 text-sm font-medium flex-grow">
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-white/20" /> Suporta até ~5 ligações/dia</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-white/20" /> Cobertura de ausência</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-white/20" /> Resumos via WhatsApp</li>
                                </ul>
                                <button onClick={handleContract} className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white hover:text-navy-acc transition-all">
                                    Selecionar Nível 1
                                </button>
                            </motion.div>

                            {/* LEVEL 2 */}
                            <motion.div variants={itemFade} className="bg-gold/10 backdrop-blur-xl rounded-[40px] p-10 border border-gold/40 flex flex-col relative transform md:-translate-y-4 shadow-[0_20px_60px_-10px_rgba(197,160,89,0.15)]">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gold"></div>
                                <div className="mb-8">
                                    <h3 className="text-sm font-black text-gold uppercase tracking-widest mb-4">Nível 2 • Profissional</h3>
                                    <div className="text-4xl font-black text-white mb-2">Volume Ativo</div>
                                    <p className="text-gold/80 text-sm font-medium">Recomendado para a maioria.</p>
                                </div>
                                <div className="mb-8 py-4 border-y border-gold/20">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black text-white">R$ 497</span>
                                        <span className="text-white/40 text-sm">/ mês</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 text-white/90 text-[15px] font-bold flex-grow">
                                    <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Suporta até ~10 ligações/dia</li>
                                    <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Prioridade na fila</li>
                                    <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-gold" /> Gestão de picos de demanda</li>
                                </ul>
                                <button onClick={handleContract} className="w-full py-5 rounded-xl bg-gold text-navy-acc font-black shadow-lg hover:scale-[1.02] transition-all">
                                    Selecionar Nível 2 (Recomendado)
                                </button>
                            </motion.div>

                            {/* LEVEL 3 */}
                            <motion.div variants={itemFade} className="bg-white/5 backdrop-blur-xl rounded-[40px] p-10 border border-white/10 flex flex-col hover:border-white/30 transition-all duration-300">
                                <div className="mb-8">
                                    <h3 className="text-sm font-black text-white/50 uppercase tracking-widest mb-4">Nível 3 • Ilimitado</h3>
                                    <div className="text-4xl font-black text-white mb-2">Alto Tráfego</div>
                                    <p className="text-white/60 text-sm font-light">Para escritórios consolidados.</p>
                                </div>
                                <div className="mb-8 py-4 border-y border-white/10">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-white">R$ 997</span>
                                        <span className="text-white/40 text-sm">/ mês</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 text-white/70 text-sm font-medium flex-grow">
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-white/20" /> Chamadas ilimitadas</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-white/20" /> Sem risco de gargalo</li>
                                    <li className="flex gap-3"><CheckCircleIcon className="w-5 h-5 text-white/20" /> Atendimento prioritário</li>
                                </ul>
                                <button onClick={handleContract} className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white hover:text-navy-acc transition-all">
                                    Selecionar Nível 3
                                </button>
                            </motion.div>

                        </motion.div>
                    </div>
                </motion.section>

                {/* 5. PROCESS (SHORT & OPERATIONAL) */}
                <motion.section 
                    className="py-24 bg-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                >
                    <div className="container mx-auto px-6 max-w-5xl">
                        <motion.div variants={itemFade} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-6 leading-tight">
                                Sem improvisos. O processo é <br />
                                <span className="text-gold italic font-light">previsível e seguro.</span>
                            </h2>
                            <p className="text-slate-500 font-light">
                                Dois passos simples para ativar a proteção do seu escritório.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex flex-col md:flex-row gap-8 justify-center items-center"
                            variants={staggerContainer}
                        >
                            <motion.div variants={itemFade} className="flex-1 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-navy-acc text-white flex items-center justify-center font-bold text-lg">1</div>
                                <div>
                                    <h4 className="font-black text-[#051020] text-lg mb-2">Configuração Assistida</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Definimos juntos o tom de voz e o protocolo de ausência via WhatsApp.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemFade} className="hidden md:block w-8 h-[2px] bg-slate-200"></motion.div>
                            <motion.div variants={itemFade} className="flex-1 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold text-navy-acc flex items-center justify-center font-bold text-lg">2</div>
                                <div>
                                    <h4 className="font-black text-[#051020] text-lg mb-2">Ativação do Desvio</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Você ativa o código de encaminhamento condicional da sua operadora (Vivo, Claro ou Tim).</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 6. SECURITY - OPERATIONAL FAQ */}
                <motion.section 
                    className="py-24 bg-[#FAFAF9]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariants}
                >
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-serif font-black text-[#051020]">Por que o encaminhamento é seguro?</h3>
                        </div>
                        <div className="space-y-2">
                            <FaqItem 
                                question="A Lexa interfere na minha linha principal?" 
                                answer="Não. O encaminhamento é condicional. A chamada só é transferida se você não atender, estiver ocupado ou fora de área." 
                            />
                            <FaqItem 
                                question="A Lexa dá orientações jurídicas?" 
                                answer="Jamais. O papel da Lexa é exclusivamente recepcionar, triar e registrar a demanda. O aconselhamento jurídico permanece 100% com você." 
                            />
                            <FaqItem 
                                question="Posso cancelar se não me adaptar?" 
                                answer="Sim. Você pode desativar o encaminhamento no seu celular em 3 segundos a qualquer momento. O controle é físico e seu." 
                            />
                        </div>
                    </div>
                </motion.section>

                {/* 7. FINAL CTA - ACTIVATION */}
                <motion.section 
                    className="py-32 bg-[#051020] text-center relative overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariants}
                >
                    <motion.div style={{ y: useTransform(scrollY, [2000, 4000], [0, 200]) }} className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none"></motion.div>
                    
                    <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-10 leading-tight">
                            A próxima ligação pode acontecer hoje.
                        </h2>
                        
                        <button
                            onClick={handleContract}
                            className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-gold text-navy-acc font-black text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(197,160,89,0.4)]"
                        >
                            <span className="leading-tight">Ativar Lexa no meu número — 7 dias grátis</span>
                            <div className="bg-navy-acc p-1.5 rounded-full group-hover:rotate-90 transition-transform">
                                <ZapIcon className="w-4 h-4 text-gold" />
                            </div>
                        </button>
                        
                        <p className="mt-8 text-white/30 text-sm font-medium uppercase tracking-widest">
                            Sem compromisso • Ativação imediata
                        </p>
                    </div>
                </motion.section>

            </div>
        </SmoothScrollWrapper>
    );
};
