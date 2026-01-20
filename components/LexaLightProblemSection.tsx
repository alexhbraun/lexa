import React from 'react';
import { PhoneIcon, ClockIcon, FileTextIcon } from './Icons';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="group bg-white p-6 md:p-10 rounded-[40px] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-gold/20 flex flex-col items-center text-center h-full">
        <div className="h-20 w-20 mb-8 text-gold bg-slate-50 rounded-full p-5 flex items-center justify-center transition-colors group-hover:bg-navy-acc group-hover:text-gold">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-[#051020] mb-4">{title}</h3>
        <p className="text-slate-500 text-[16px] leading-relaxed font-light">{text}</p>
    </div>
);

export const LexaLightProblemSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-slate-50 reveal"> {/* Slightly darker tinted background (slate-100) */}
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-6xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Escritórios não perdem clientes por falta de competência jurídica. <br />
                        <span className="text-gold italic font-light">Perdem por falhas invisíveis no primeiro atendimento.</span>
                    </h2>
                    <div className="text-xl text-slate-700 font-medium max-w-3xl mx-auto space-y-6">
                        <p>
                            O primeiro contato define a escolha do cliente. É um fato: quem encontra silêncio não tenta uma segunda vez; ele busca o próximo escritório imediatamente.
                        </p>
                        <p>
                            A Lexa previne esse erro operacional, protegendo a porta de entrada do seu escritório nos exatos momentos em que você não pode atender.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ProblemCard
                        icon={<FileTextIcon className="w-full h-full" />}
                        title="Audiência em andamento"
                        text="O telefone toca às 10h12. A audiência começa às 10h. O cliente liga para outro escritório às 10h14."
                    />
                    <ProblemCard
                        icon={<PhoneIcon className="w-full h-full" />}
                        title="Retorno que nunca acontece"
                        text="O cliente liga, explica o caso, pede retorno. A ligação não é registrada. O contato se perde no dia a dia."
                    />
                    <ProblemCard
                        icon={<ClockIcon className="w-full h-full" />}
                        title="Fora do horário"
                        text="Depois das 18h, o telefone toca. Ninguém atende. O cliente resolve o problema com quem atendeu primeiro."
                    />
                </div>
            </div>
        </section>
    );
};
