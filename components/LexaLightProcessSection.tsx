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

export const LexaLightProcessSection: React.FC = () => {
    return (
        <section id="como-funciona" className="py-20 md:py-32 bg-white reveal relative overflow-hidden">
            {/* Subtle decorative blob for glassmorphism context */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50/0 -z-10 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gold/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Quando alguém liga e você não atende, <br />
                        <span className="text-gold italic font-light">a Lexa faz isto.</span>
                    </h2>
                    <p className="text-xl text-slate-800 font-medium max-w-2xl mx-auto mb-6">
                        A ligação não termina no silêncio. Ela vira um registro pronto para retorno.
                    </p>
                    <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                        A Lexa atende no seu lugar, faz as perguntas certas e registra exatamente o que aconteceu — sem você precisar reconstruir a ligação depois.
                    </p>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-4 md:gap-8 relative pb-8 pt-8 md:pt-0 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar md:overflow-visible">
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="01"
                            title="Atende a ligação com padrão de escritório"
                            text="A Lexa atende a chamada com uma abertura profissional e conduz a conversa com calma. Ela segue um roteiro definido para garantir clareza e registro correto do contato."
                            icon={<PhoneIcon className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="02"
                            title="Confirma o motivo da ligação"
                            text="A Lexa sempre confirma o motivo do contato com uma pergunta direta. Mesmo que a pessoa explique rapidamente no início, o contexto é validado antes do registro."
                            icon={<IconTransferenciaHumana className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="03"
                            title="Registra as informações essenciais"
                            text="Durante a ligação, a Lexa registra apenas o que você precisa para decidir o retorno: quem ligou, se já é cliente, telefone para contato, horário preferido e referência de processo quando aplicável."
                            icon={<IconResumosAutomaticos className="w-full h-full" />}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-0 snap-center h-full">
                        <Step
                            number="04"
                            title="Entrega o registro pronto para ação"
                            text="Após a ligação, você recebe um registro claro com o resumo do contato. Nada fica dependente de memória ou gravações longas."
                            icon={<IconAtendimento24h className="w-full h-full" />}
                        />
                    </div>
                </div>

                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <p className="text-xl font-serif italic text-slate-500 leading-relaxed">
                        A Lexa não oferece orientação jurídica. <br />
                        Ela apenas atende, registra e encaminha o contato para você decidir o retorno.
                    </p>
                </div>
            </div>
        </section>
    );
};
