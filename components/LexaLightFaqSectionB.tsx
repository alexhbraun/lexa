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
            <span className={`flex items-center justify-center transition-all duration-300 ${isOpen ? 'text-navy-acc rotate-45' : 'text-slate-300 group-hover:text-gold'}`}>
                <span className="text-3xl font-light">+</span>
            </span>
        </button>
        <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-96 pb-10' : 'max-h-0'}`}
        >
            <p className="text-lg text-slate-600 leading-relaxed font-light pr-12 whitespace-pre-line">
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
        },
        {
            question: "Preciso informar cartão para testar?",
            answer: "Não. Zero barreiras.\n\nPedir cartão antes cria atrito. Nós queremos confiança.\nVocê inicia o teste sem compromisso financeiro nenhum.\n\nNa prática: você valida a tecnologia primeiro. O investimento vem depois, se fizer sentido.\n\nO risco não é testar. É continuar pagando o preço invisível de perder clientes."
        },
        {
            question: "Sou obrigado a continuar após os 3 dias?",
            answer: "Não. A Lexa só deve ficar se ela se pagar.\n\nVocê é livre para parar a qualquer momento. Sem multas, sem letras miúdas.\nO teste serve justamente para provar o valor antes de qualquer decisão.\n\nNa prática: a maioria dos clientes não quer ficar sem depois que vê os resultados.\n\nMas a escolha é 100% sua."
        },
        {
            question: "O teste é real ou simulado?",
            answer: "É 100% real.\n\nSimulações não mostram a verdade.\nA Lexa vai atender suas chamadas reais, falar com seus clientes reais e resolver situações do dia a dia.\n\nVocê verá o impacto direto na sua operação na mesma hora.\n\nO risco não é o teste falhar.\nÉ você descobrir o volume de oportunidades que estava deixando passar."
        }
    ];

    return (
        <section id="faq" className="py-24 md:py-32 bg-slate-50 reveal">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glask-card p-8 md:p-12 rounded-[40px] border border-gold/30 shadow-xl bg-white">
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
