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
            <p className="text-xl text-slate-500 leading-relaxed font-light pr-12 whitespace-pre-line">
                {answer}
            </p>
        </div>
    </div>
);

export const LexaLightFaqSectionB: React.FC<{ onOpenSurvey?: () => void }> = ({ onOpenSurvey }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "O cliente percebe que está falando com uma inteligência?",
            answer: "Essa dúvida aparece sempre.\n\nMas o ponto real não é a tecnologia. É a experiência.\nQuem liga quer ser ouvido, acolhido e registrado. Quando isso não acontece, ele desliga. E você nunca fica sabendo.\n\nA Lexa foi desenhada para soar como uma recepção de elite: tom calmo, direto, profissional. Sem scripts artificiais. Sem frases robóticas.\n\nO que acontece na prática: o cliente sente que foi atendido. Você recebe o resumo. A oportunidade não some.\n\nO risco não está na voz. Está no silêncio depois da ligação perdida."
        },
        {
            question: "Posso personalizar o que a IA fala?",
            answer: "Cada escritório tem sua forma de trabalhar.\nQuando o atendimento não segue esse fluxo, o controle some — mesmo quando alguém atende.\n\nCom a Lexa, você define exatamente o que é perguntado, quando a conversa muda de rumo e quando deve parar. Tom, saudação, regras por área, horários.\n\nNa prática, ela fala como o seu escritório falaria.\nMesmo quando você não pode atender.\n\nO risco não é personalizar demais. É aceitar um atendimento genérico que não representa você."
        },
        {
            question: "A Lexa oferece orientação jurídica aos clientes?",
            answer: "Aqui o limite é claro.\n\nA Lexa não aconselha, não interpreta, não promete.\nEla apenas escuta, registra e encaminha.\n\nIsso não tira seu controle — devolve.\nVocê decide com calma, com a informação na mão.\n\nNa prática: o contato não se perde.\nE você escolhe o próximo passo.\n\nO risco não é a Lexa falar pouco. É você não ficar sabendo que alguém ligou."
        },
        {
            question: "Como os dados das ligações são protegidos?",
            answer: "Hoje, o maior risco é outro:\nessas informações simplesmente desaparecem.\n\nSem registro. Sem histórico. Sem controle.\n\nCom a Lexa, apenas os dados essenciais são capturados e entregues a você. Nada é usado fora desse propósito.\n\nNa prática, você ganha visibilidade sobre algo que hoje é invisível.\n\nO risco não está em proteger dados. Está em não ter nenhum."
        },
        {
            question: "Existe algum contrato de fidelidade?",
            answer: "Você não precisa acreditar.\nVocê só precisa testar.\n\nSe não fizer sentido, você vai perceber rápido. Sem multa. Sem amarras.\n\nO que normalmente acontece é o oposto: você recebe os primeiros resumos e entende o quanto estava perdendo sem saber.\n\nO risco não é cancelar.\nÉ nunca descobrir o que já estava escapando."
        }
    ];

    return (
        <section id="faq" className="py-24 md:py-32 bg-white reveal">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glask-card p-8 md:p-12 rounded-[60px] border border-slate-100 shadow-xl bg-white">
                        <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6 text-center">
                            DÚVIDAS
                        </div>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8 text-center">
                            Dúvidas Comuns
                        </h2>
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
                </div>
            </div>
        </section>
    );
};
