import React from 'react';

export const LexaLightStorySection: React.FC = () => {
    return (
        <section id="historia" className="py-24 md:py-32 bg-white reveal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                     {/* Image Column */}
                    <div className="relative w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 order-2 lg:order-1">
                        <div className="relative aspect-square rounded-full overflow-hidden border border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group">
                            <img 
                                src="https://ik.imagekit.io/rgqefde41/ChatGPT%20Image%20Jan%2023,%202026,%2010_33_06%20AM.png" 
                                alt="Alexander Braun - Fundador da Lexa"
                                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Inner subtle glow */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-full pointer-events-none"></div>
                        </div>
                        {/* Decorative elements behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 order-1 lg:order-2 text-left">
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                            A HISTÓRIA POR TRÁS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                            Por que a <span className="text-gold italic font-light">Lexa existe</span>
                        </h2>
                        
                        <div className="space-y-8 text-lg text-slate-600 font-light leading-relaxed">
                            <p>
                                <span className="font-bold text-[#051020]">A Lexa nasceu da adaptação para o Brasil</span> de um modelo de atendimento já validado internacionalmente.
                            </p>
                            <p>
                                Alexander Braun, empreendedor alemão radicado no Brasil, notou que o mesmo padrão se repetia em grandes bancas ao redor do mundo: <span className="italic">as ligações mais valiosas chegavam justamente quando o advogado estava indisponível.</span>
                            </p>
                            
                            <div className="py-2">
                                <p className="text-xl font-medium text-[#051020]">
                                    Não por descuido. <br/>
                                    <span className="text-gold font-serif text-2xl italic">Mas por limite humano.</span>
                                </p>
                            </div>

                            <div className="pl-6 border-l-2 border-gold/30 italic text-slate-500">
                                "Em vez de reinventar a roda, trouxemos um sistema robusto e ajustamos cada etapa à realidade jurídica local — com os padrões de privacidade e conduta que o Brasil exige."
                            </div>
                            
                            <p className="border-t border-slate-100 pt-6 mt-2">
                                <span className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">A VISÃO</span>
                                <span className="font-medium text-[#051020]">
                                    Ser o padrão invisível que protege seu escritório contra a perda silenciosa de oportunidades.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
