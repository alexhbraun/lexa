import React from 'react';
import { PhoneIcon, ClockIcon, FileTextIcon, IconNoOp, IconTime, IconUsers } from './Icons';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="group bg-white/60 backdrop-blur-xl p-6 md:p-10 rounded-[40px] border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-gold/20 flex flex-col items-center text-center h-full">
        <div className="h-20 w-20 mb-8 text-gold bg-slate-50 rounded-full p-5 flex items-center justify-center transition-colors group-hover:bg-navy-acc group-hover:text-gold">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-[#051020] mb-4">{title}</h3>
        <p className="text-slate-500 text-[16px] leading-relaxed font-light">{text}</p>
    </div>
);

export const LexaLightProblemSectionB: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-slate-50 reveal">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        PARECE FAMILIAR?
                    </div>
                    <h2 className="text-3xl md:text-6xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Cada Ligação Perdida <br />
                        <span className="text-gold italic font-light">É Dinheiro Indo Embora.</span>
                    </h2>
                    <div className="text-xl text-slate-700 font-medium max-w-3xl mx-auto space-y-6">
                        <p>
                             Veja o que realmente acontece quando você não consegue atender seu telefone:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                    <ProblemCard
                        icon={<IconUsers className="w-8 h-8" />}
                        title="Novos prospects desligam"
                        text="Eles ligam para o próximo advogado. Eles não deixam mensagem de voz. Eles não esperam. Eles seguem em frente para alguém que atende."
                    />
                    <ProblemCard
                        icon={<IconTime className="w-8 h-8" />}
                        title="Clientes ficam frustrados"
                        text="Eles precisam de respostas agora. Quando não conseguem te encontrar, a confiança diminui. Eles se perguntam se fizeram a escolha certa."
                    />
                    <ProblemCard
                        icon={<IconNoOp className="w-8 h-8" />}
                        title="Relacionamentos prejudicados"
                        text="Você perde receita não porque é ruim, mas porque não pode estar em dois lugares ao mesmo tempo."
                    />
                </div>

            </div>
        </section>
    );
};
