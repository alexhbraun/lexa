
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
            { id: 'fixed', label: "Telefone fixo", icon: <PhoneIcon className="w-6 h-6" /> },
            { id: 'not_sure', label: "Ainda não sei", icon: <HelpCircleIcon className="w-6 h-6" /> }
        ]
    },
    {
        id: 'planType',
        question: "Seu plano é:",
        condition: (answers) => answers.numberType === 'mobile',
        options: [
            { id: 'post', label: "Pós-pago", icon: <BriefcaseIcon className="w-6 h-6" /> },
            { id: 'control', label: "Controle", icon: <BriefcaseIcon className="w-6 h-6" /> },
            { id: 'pre', label: "Pré-pago", icon: <SmartphoneIcon className="w-6 h-6" /> },
            { id: 'not_sure', label: "Não sei informar", icon: <HelpCircleIcon className="w-6 h-6" /> }
        ]
    },
    {
        id: 'fixedType',
        question: "Esse telefone fixo é:",
        condition: (answers) => answers.numberType === 'fixed',
        options: [
            { id: 'residential', label: "Residencial", icon: <HomeIcon className="w-6 h-6" /> },
            { id: 'business', label: "Empresarial / Escritório", icon: <BriefcaseIcon className="w-6 h-6" /> },
            { id: 'not_sure', label: "Não sei informar", icon: <HelpCircleIcon className="w-6 h-6" /> }
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
        ? "w-full text-white font-sans" 
        : "py-24 bg-[#0B1221] text-white relative overflow-hidden font-sans";

    return (
        <section className={containerClasses}>
            {!insideModal && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
                </div>
            )}

            <div className={insideModal ? "" : "container mx-auto px-6 relative z-10 max-w-3xl"}>
                {!isFinished ? (
                    <div className="animate-fade-in-up">
                        <div className="mb-8">
                            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-2">Diagnóstico de Compatibilidade</h2>
                            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                <div 
                                    className="bg-gold h-full transition-all duration-500 ease-out"
                                    style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 leading-tight">
                            {QUESTIONS[currentStep].question}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {QUESTIONS[currentStep].options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    className="group relative flex items-center p-5 rounded-2xl border border-white/10 transition-all duration-300 text-left overflow-hidden hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))'
                                    }}
                                >
                                     {/* Aura Halo */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                                         style={{ background: 'radial-gradient(circle at center, rgba(180,138,58,0.15), transparent 70%)' }}>
                                    </div>

                                    <div className="mr-4 text-gold/70 group-hover:text-gold transition-colors relative z-10">
                                        {option.icon}
                                    </div>
                                    <span className="text-lg font-medium text-gray-200 group-hover:text-white leading-tight relative z-10">
                                        {option.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <div 
                            className="relative border border-white/10 rounded-[40px] p-8 md:p-12 text-center overflow-hidden"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
                            }}
                        >
                             {/* Aura Halo */}
                            <div className="absolute inset-0 pointer-events-none -z-10"
                                 style={{ background: 'radial-gradient(circle at top center, rgba(180,138,58,0.1), transparent 70%)' }}>
                            </div>
                            {tag === 'LEXA_OK_PADRAO' && (
                                <>
                                    <div className="inline-flex items-center justify-center p-5 bg-emerald-500/20 rounded-full mb-8 text-emerald-400">
                                        <CheckCircleIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-white mb-4">Sua linha é compatível com a Lexa</h3>
                                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                                        A configuração técnica acontece logo após a contratação, durante o seu período de teste.
                                    </p>
                                </>
                            )}

                            {tag === 'LEXA_ATENCAO_PREPAGO' && (
                                <>
                                    <div className="inline-flex items-center justify-center p-5 bg-gold/20 rounded-full mb-8 text-gold">
                                        <AlertCircleIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-white mb-4">Atenção sobre planos pré-pagos</h3>
                                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                        Planos pré-pagos geralmente não permitem encaminhamento de chamadas. <br/>
                                        <span className="text-white font-medium">Não se preocupe:</span> verificamos isso com você no trial. Se preferir, você poderá usar um número Lexa próprio.
                                    </p>
                                </>
                            )}

                            {tag === 'LEXA_INDEFINIDO' && (
                                <>
                                    <div className="inline-flex items-center justify-center p-5 bg-blue-500/20 rounded-full mb-8 text-blue-400">
                                        <HelpCircleIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-white mb-4">Sem problemas</h3>
                                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                                        Você pode contratar agora e definir o número que deseja usar durante a configuração inicial.
                                    </p>
                                </>
                            )}

                            <button 
                                onClick={() => window.location.href = '/registrar'}
                                className="group shimmer relative flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-gradient-to-r from-gold to-yellow-600 text-white font-bold text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_20px_50px_-15px_rgba(197,160,89,0.4)]"
                            >
                                <span className="leading-tight">Contratar Lexa — 7 dias grátis</span>
                                <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
                                    <ZapIcon className="w-5 h-5 text-white" />
                                </div>
                            </button>
                            
                            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-widest">
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
