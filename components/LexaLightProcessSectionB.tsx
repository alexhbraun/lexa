import React from 'react';
import { PhoneIcon, IconResumosAutomaticos, IconTransferenciaHumana, IconAtendimento24h } from './Icons';

const Step: React.FC<{ number: string; title: string; text: string; icon: React.ReactNode }> = ({ number, title, text, icon }) => (
    <div className="group bg-white/60 backdrop-blur-xl p-6 md:p-10 rounded-[50px] border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative h-full flex flex-col items-center">
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold text-navy-acc border border-slate-100 shadow-lg group-hover:scale-110 transition-transform duration-500">
            {number}
        </div>
        <div className="flex flex-col items-center text-center flex-grow">
            <div className="h-20 w-20 mb-8 text-gold bg-slate-50 rounded-full p-5 flex items-center justify-center transition-all duration-500 group-hover:bg-navy-acc group-hover:text-gold">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#051020] mb-4 leading-tight">{title}</h3>
            <p className="text-slate-500 text-[16px] leading-relaxed font-light">{text}</p>
        </div>
    </div>
);

export const LexaLightProcessSectionB: React.FC = () => {
    return (
        <section id="como-funciona" className="py-20 md:py-32 bg-slate-50 reveal relative overflow-hidden">
             {/* Subtle decorative blob for glassmorphism context */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50/0 -z-10 blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        PASSO A PASSO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Veja Como Funciona <br />
                        <span className="text-gold italic font-light">(É Super Fácil)</span>
                    </h2>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 relative pb-8 pt-8 md:pt-0 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar md:overflow-visible">
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="01"
                            title="Onboarding Rápido"
                            text="Preencha um formulário simples (5 min) com os detalhes da sua prática — áreas do direito, perguntas típicas, tratamento desejado."
                            icon={<IconTransferenciaHumana className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="02"
                            title="Teste o Encaminhamento"
                            text="Vamos te guiar por um teste rápido para garantir que as ligações sejam roteadas corretamente. Leva 2 minutos."
                            icon={<PhoneIcon className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="03"
                            title="Configuramos Seu Agente"
                            text="Nossa equipe configura seu agente de IA em 1-2 dias. Você revisa, aprova e seu escritório nunca mais perde uma ligação."
                            icon={<IconResumosAutomaticos className="w-full h-full" />}
                        />
                    </div>
                </div>

                <div className="mt-20 max-w-4xl mx-auto bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100">
                     <h3 className="text-2xl font-bold text-[#051020] mb-6 text-center">Então, quando uma ligação chega:</h3>
                     <ul className="space-y-4 text-left md:text-center text-slate-600 text-lg">
                        <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Seu agente de IA atende profissionalmente em português
                        </li>
                        <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Faz as perguntas certas baseadas na sua prática
                        </li>
                        <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Captura nome, contato, detalhes e urgência
                        </li>
                         <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> Te envia um resumo instantâneo para follow-up inteligente
                        </li>
                         <li className="flex items-start md:items-center md:justify-center gap-3">
                            <span className="text-gold font-bold">✓</span> O cliente se sente ouvido e atendido (não enviado para a caixa postal)
                        </li>
                     </ul>
                </div>
            </div>
        </section>
    );
};
