
import React, { useState } from 'react';
import { 
    PhoneIcon, 
    ZapIcon, 
    CheckCircleIcon, 
    SmartphoneIcon,
    BriefcaseIcon,
    HelpCircleIcon,
    HomeIcon,
    AlertCircleIcon
} from './Icons';

type QuestionId = 'numberType' | 'planType' | 'fixedType';

interface Option {
    id: string;
    label: string;
    icon: React.ReactNode;
}

interface Question {
    id: QuestionId;
    question: string;
    options: Option[];
    condition?: (answers: Record<string, string>) => boolean;
}

const QUESTIONS: Question[] = [
    {
        id: 'numberType',
        question: "Qual número você quer usar com a Lexa?",
        options: [
            { id: 'mobile', label: "Celular", icon: <SmartphoneIcon className="w-6 h-6" /> },
            { id: 'fixed', label: "Telefone fixo", icon: <PhoneIcon className="w-6 h-6" /> }
        ]
    },
    {
        id: 'planType',
        question: "Seu plano é:",
        condition: (answers) => answers.numberType === 'mobile',
        options: [
            { id: 'post', label: "Pós-pago", icon: <BriefcaseIcon className="w-6 h-6" /> },
            { id: 'control', label: "Controle", icon: <BriefcaseIcon className="w-6 h-6" /> },
            { id: 'pre', label: "Pré-pago", icon: <SmartphoneIcon className="w-6 h-6" /> }
        ]
    },
    {
        id: 'fixedType',
        question: "Esse telefone fixo é:",
        condition: (answers) => answers.numberType === 'fixed',
        options: [
            { id: 'residential', label: "Residencial", icon: <HomeIcon className="w-6 h-6" /> },
            { id: 'business', label: "Empresarial / Escritório", icon: <BriefcaseIcon className="w-6 h-6" /> }
        ]
    }
];

export const LexaSurveySection: React.FC<{ insideModal?: boolean }> = ({ insideModal = false }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isFinished, setIsFinished] = useState(false);

    const handleOptionSelect = (optionId: string) => {
        const currentQuestion = QUESTIONS[currentStep];
        const newAnswers = { ...answers, [currentQuestion.id]: optionId };
        setAnswers(newAnswers);

        let nextStepIndex = currentStep + 1;
        while (nextStepIndex < QUESTIONS.length && QUESTIONS[nextStepIndex].condition && !QUESTIONS[nextStepIndex].condition!(newAnswers)) {
            nextStepIndex++;
        }

        if (nextStepIndex < QUESTIONS.length) {
            setCurrentStep(nextStepIndex);
        } else {
            setIsFinished(true);
        }
    };

    const getResultTag = () => {
        if (answers.planType === 'pre') return 'LEXA_ATENCAO_PREPAGO';
        if (answers.numberType === 'not_sure' || answers.planType === 'not_sure' || answers.fixedType === 'not_sure') return 'LEXA_INDEFINIDO';
        return 'LEXA_OK_PADRAO';
    };

    const tag = getResultTag();

    const containerClasses = insideModal 
        ? "w-full text-slate-900 font-sans" 
        : "py-24 bg-slate-50 text-slate-900 relative overflow-hidden font-sans";

    return (
        <section className={containerClasses}>
            {!insideModal && (
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100"></div>
            )}

            <div className={insideModal ? "" : "container mx-auto px-6 relative z-10 max-w-3xl"}>
                {!isFinished ? (
                    <div className="animate-fade-in-up">
                        <div className="mb-8">
                            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-2">Diagnóstico de Compatibilidade</h2>
                            <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                                <div 
                                    className="bg-gold h-full transition-all duration-500 ease-out"
                                    style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif text-[#051020] mb-8 leading-tight">
                            {QUESTIONS[currentStep].question}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {QUESTIONS[currentStep].options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    className="group relative flex items-center p-5 rounded-2xl border border-gold/30 bg-white transition-all duration-300 text-left overflow-hidden hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl"
                                >
                                    <div className="mr-4 text-navy-acc group-hover:text-gold transition-colors relative z-10">
                                        {option.icon}
                                    </div>
                                    <span className="text-lg font-medium text-slate-600 group-hover:text-[#051020] leading-tight relative z-10">
                                        {option.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <div className="relative bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-gold/30 p-8 md:p-12 text-center overflow-hidden ring-1 ring-slate-900/5">
                             {/* Top Shine */}
                             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                            {tag === 'LEXA_OK_PADRAO' && (
                                <>
                                    <div className="inline-flex items-center justify-center p-5 bg-emerald-50 rounded-full mb-8 text-emerald-500">
                                        <CheckCircleIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-[#051020] mb-4">Sua linha é compatível com a Lexa</h3>
                                    <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
                                        A configuração técnica acontece logo após a reserva, durante o seu período de teste.
                                    </p>
                                </>
                            )}

                            {tag === 'LEXA_ATENCAO_PREPAGO' && (
                                <>
                                    <div className="inline-flex items-center justify-center p-5 bg-red-50 rounded-full mb-8 text-red-500">
                                        <AlertCircleIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-[#051020] mb-4">Não recomendamos o uso da Lexa</h3>
                                    <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                        Planos pré-pagos não possuem a tecnologia de encaminhamento de chamadas necessária para a Lexa funcionar.
                                        <br/><br/>
                                        Para usar o sistema, é necessário ter um plano <strong>Controle</strong> ou <strong>Pós-pago</strong>.
                                    </p>
                                </>
                            )}

                            {tag === 'LEXA_INDEFINIDO' && (
                                <>
                                    <div className="inline-flex items-center justify-center p-5 bg-blue-50 rounded-full mb-8 text-blue-500">
                                        <HelpCircleIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-[#051020] mb-4">Sem problemas</h3>
                                    <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
                                        Você pode reservar agora e definir o número que deseja usar durante a configuração inicial.
                                    </p>
                                </>
                            )}

                            {tag !== 'LEXA_ATENCAO_PREPAGO' && (
                                <button 
                                    onClick={() => window.location.href = '/teste'}
                                    className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-gradient-to-r from-gold to-yellow-600 text-white font-bold text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_20px_50px_-15px_rgba(197,160,89,0.4)]"
                                >
                                    <span className="leading-tight">Reservar Teste — 7 dias grátis</span>
                                    <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
                                        <ZapIcon className="w-5 h-5 text-white" />
                                    </div>
                                </button>
                            )}
                            
                            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium uppercase tracking-widest">
                                <span className="flex items-center gap-2 italic">✓ Ativação no Onboarding</span>
                                <span className="flex items-center gap-2 italic">✓ Cancelamento Simples</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
