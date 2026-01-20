import React, { useState } from 'react';
import { ShieldCheckIcon } from './Icons';

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
        <button
            onClick={onClick}
            className="w-full py-6 flex items-center justify-between text-left group"
        >
            <span className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'text-navy-acc' : 'text-slate-800 group-hover:text-gold'}`}>
                {question}
            </span>
            <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-navy-acc text-white rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                <span className="text-2xl font-light">+</span>
            </span>
        </button>
        <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-96 pb-10' : 'max-h-0'}`}
        >
            <p className="text-xl text-slate-500 leading-relaxed font-light pr-12">
                {answer}
            </p>
        </div>
    </div>
);

export const LexaLightFaqSection: React.FC<{ onOpenSurvey?: () => void }> = ({ onOpenSurvey }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    type FaqItemType = {
        question: string;
        answer: string;
    };

    const faqData: FaqItemType[] = [
    {
        question: "O cliente percebe que está falando com uma inteligência?",
        answer: "A Lexa utiliza um tom de voz calmo, profissional e direto, focado em ouvir o cliente e registrar o motivo do contato. O padrão seguido é o de uma recepção de elite, onde a clareza e o acolhimento são as maiores prioridades."
    },
    {
        question: "A Lexa oferece orientação jurídica aos clientes?",
        answer: "Não. A Lexa é uma ferramenta de proteção operacional. Ela acolhe o contato, registra os fatos e encaminha para você. A decisão e a estratégia jurídica continuam sempre sob seu controle absoluto."
    },
    {
        question: "Como os dados das ligações são protegidos?",
        answer: "Seguimos padrões rigorosos de privacidade e tratamos apenas as informações estritamente necessárias para que você receba um resumo claro de cada ligação. O controle sobre os dados e sobre o retorno ao cliente é sempre seu."
    },
    {
        question: "Existe algum contrato de fidelidade?",
        answer: "Não. O cancelamento é livre e pode ser feito a qualquer momento. Mantemos o padrão de liberdade total para que o seu escritório utilize a Lexa apenas enquanto ela estiver gerando valor e proteção real."
    }
];

    return (
        <section id="faq" className="py-48 bg-[#FFFBF5] reveal"> {/* Updated to warm tint matching Comparison section */}
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                            RESPOSTAS FACTUAIS
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-[#051020] mb-8 leading-tight">
                            Esclarecimentos <span className="text-gold italic font-light">Sobre a Lexa.</span>
                        </h2>
                    </div>

                    <div className="glass-card p-6 md:p-16 rounded-[60px] border border-slate-100 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.05)] bg-white/60 backdrop-blur-sm">
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <FaqItem 
                                    key={index} 
                                    question={faq.question} 
                                    answer={faq.answer} 
                                    isOpen={openIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-28 text-center">
                        <p className="text-xl text-slate-500 font-light mb-12 italic">
                            Ainda tem alguma dúvida específica sobre a implementação no seu escritório?
                        </p>
                        <button
                            onClick={onOpenSurvey}
                            className="shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_20px_40px_-15px_rgba(5,16,32,0.4)]"
                        >
                            <ShieldCheckIcon className="w-5 h-5 text-gold shrink-0" />
                            <span className="leading-tight">Testar Lexa 7 dias grátis</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
