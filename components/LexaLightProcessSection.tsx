import React from 'react';
import { PhoneIcon, IconResumosAutomaticos, IconTransferenciaHumana, IconAtendimento24h } from './Icons';

const Step: React.FC<{ number: string; title: string; text: string; icon: React.ReactNode }> = ({ number, title, text, icon }) => (
    <div className="group bg-white p-10 rounded-[50px] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative">
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold text-navy-acc border border-slate-100 shadow-lg group-hover:scale-110 transition-transform duration-500">
            {number}
        </div>
        <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 mb-8 text-navy-acc bg-[#F1F4FF] rounded-full p-5 flex items-center justify-center transition-all duration-500 group-hover:bg-navy-acc group-hover:text-white">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#051020] mb-4 leading-tight">{title}</h3>
            <p className="text-slate-500 text-[16px] leading-relaxed font-light">{text}</p>
        </div>
    </div>
);

export const LexaLightProcessSection: React.FC = () => {
    return (
        <section id="como-funciona" className="py-32 bg-[#F1F4FF] reveal">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-8 leading-tight">
                        Atendimento é uma oportunidade preservada. <br />
                        <span className="text-gold italic font-light">Silêncio é o cliente entregue à concorrência.</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                        O funcionamento da Lexa é desenhado para garantir que nenhuma ligação termine sem uma resposta profissional e estruturada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <Step
                        number="01"
                        title="Postura profissional"
                        text="A Lexa atende cada ligação com o tom e a elegância que a advocacia exige."
                        icon={<PhoneIcon className="w-full h-full" />}
                    />
                    <Step
                        number="02"
                        title="Motivo da ligação"
                        text="Escuta com atenção o que o seu cliente ou prospect precisa no momento."
                        icon={<IconTransferenciaHumana className="w-full h-full" />}
                    />
                    <Step
                        number="03"
                        title="Dados essenciais"
                        text="Registra as informações cruciais para que nada se perca no dia a dia."
                        icon={<IconResumosAutomaticos className="w-full h-full" />}
                    />
                    <Step
                        number="04"
                        title="Encaminhamento"
                        text="Entrega tudo para você com clareza, permitindo um retorno estratégico."
                        icon={<IconAtendimento24h className="w-full h-full" />}
                    />
                </div>

                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <p className="text-xl font-serif italic text-slate-500 leading-relaxed">
                        A Lexa não oferece orientação jurídica. <br />
                        Ela organiza o atendimento e preserva o controle do escritório.
                    </p>
                </div>
            </div>
        </section>
    );
};
