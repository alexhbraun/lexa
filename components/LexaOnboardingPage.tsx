
import React, { useState, useEffect } from 'react';
import { 
    CheckCircleIcon, 
    SmartphoneIcon, 
    PhoneIcon, 
    ZapIcon, 
    ShieldCheckIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    UserIcon,
    MailIcon,
    BriefcaseIcon,
    InfoIcon
} from './Icons';

interface LexaOnboardingPageProps {
    onBackToLanding: () => void;
}

type OnboardingState = {
    step: number;
    officeName: string;
    lexaDisplayName: string;
    responsibleName: string;
    contactEmail: string;
    phoneNumber: string;
    lineType: 'cellular' | 'fixed' | '';
    planType: 'post' | 'control' | 'pre' | 'unknown' | '';
    fixedType: 'residential' | 'business' | 'unknown' | '';
    carrier: string;
    testCallForwarding: boolean | null;
    useLexaNumber: boolean | null;
};

export const LexaOnboardingPage: React.FC<LexaOnboardingPageProps> = ({ onBackToLanding }) => {
    const [state, setState] = useState<OnboardingState>({
        step: 1,
        officeName: '',
        lexaDisplayName: 'Lexa — Atendimento Jurídico',
        responsibleName: '',
        contactEmail: '',
        phoneNumber: '',
        lineType: '',
        planType: '',
        fixedType: '',
        carrier: '',
        testCallForwarding: null,
        useLexaNumber: null,
    });

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [state.step]);

    const nextStep = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setState(prev => ({ ...prev, step: prev.step + 1 }));
            setIsAnimating(false);
        }, 150);
    };

    const prevStep = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setState(prev => ({ ...prev, step: prev.step - 1 }));
            setIsAnimating(false);
        }, 150);
    };

    const updateState = (updates: Partial<OnboardingState>) => {
        setState(prev => ({ ...prev, ...updates }));
    };

    const renderProgress = () => {
        const totalSteps = 10;
        const progress = (state.step / totalSteps) * 100;
        return (
            <div className="w-full bg-slate-100 h-1 fixed top-0 left-0 z-50">
                <div 
                    className="bg-gold h-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        );
    };

    const renderHeader = () => (
        <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/10 text-gold mb-6">
                <ZapIcon className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-gold uppercase tracking-[0.2em] mb-2">Onboarding Lexa</p>
        </div>
    );

    const renderStep = () => {
        switch (state.step) {
            case 1:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h1 className="text-4xl md:text-5xl font-serif font-black text-[#051020] mb-6 leading-tight">
                            Vamos configurar a sua Lexa
                        </h1>
                        <p className="text-xl text-slate-600 font-light mb-8 max-w-lg mx-auto leading-relaxed">
                            Leva poucos minutos. <br/>
                            Você testa tudo com tranquilidade durante o período grátis.
                        </p>
                        
                        <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl mb-10 text-slate-500 text-sm italic">
                            "A Lexa só começa a atender quando tudo estiver funcionando corretamente."
                        </div>

                        <button
                            onClick={nextStep}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-lg px-12 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-navy-acc/20"
                        >
                            <span>Começar configuração</span>
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                );

            case 2:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Dados Básicos</h2>
                        <div className="space-y-6 text-left max-w-md mx-auto">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome do escritório</label>
                                <div className="relative">
                                    <BriefcaseIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                        placeholder="Ex: Almeida & Advogados"
                                        value={state.officeName}
                                        onChange={(e) => updateState({ officeName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome de exibição da Lexa</label>
                                <div className="relative">
                                    <SmartphoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                        placeholder="Ex: Lexa — Atendimento Jurídico"
                                        value={state.lexaDisplayName}
                                        onChange={(e) => updateState({ lexaDisplayName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome do responsável</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                        placeholder="Seu nome completo"
                                        value={state.responsibleName}
                                        onChange={(e) => updateState({ responsibleName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">E-mail de contato</label>
                                <div className="relative">
                                    <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input 
                                        type="email" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                        placeholder="seu@email.com"
                                        value={state.contactEmail}
                                        onChange={(e) => updateState({ contactEmail: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-slate-500 text-sm font-light">
                            Essas informações ajudam a personalizar o atendimento.
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-12">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextStep}
                                disabled={!state.officeName || !state.responsibleName || !state.contactEmail}
                                className="inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-lg px-12 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-navy-acc/20 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                <span>Continuar</span>
                                <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Qual número a Lexa vai atender?</h2>
                        <div className="max-w-md mx-auto">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide text-left">Número de telefone</label>
                            <div className="relative">
                                <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input 
                                    type="tel" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-12 pr-4 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                    placeholder="(00) 00000-0000"
                                    value={state.phoneNumber}
                                    onChange={(e) => updateState({ phoneNumber: e.target.value })}
                                />
                            </div>
                            <p className="mt-4 text-slate-500 text-sm text-left">
                                Pode ser celular ou telefone fixo.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-16">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextStep}
                                disabled={!state.phoneNumber}
                                className="inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-lg px-12 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-navy-acc/20 disabled:opacity-50"
                            >
                                <span>Continuar</span>
                                <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Esse número é:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                            <button
                                onClick={() => { updateState({ lineType: 'cellular' }); nextStep(); }}
                                className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${state.lineType === 'cellular' ? 'border-gold bg-gold/5' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                                <SmartphoneIcon className="w-10 h-10 text-gold" />
                                <span className="font-bold text-lg text-navy-acc">📱 Celular</span>
                            </button>
                            <button
                                onClick={() => { updateState({ lineType: 'fixed' }); nextStep(); }}
                                className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${state.lineType === 'fixed' ? 'border-gold bg-gold/5' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                                <PhoneIcon className="w-10 h-10 text-gold" />
                                <span className="font-bold text-lg text-navy-acc">☎️ Telefone fixo</span>
                            </button>
                        </div>
                        <div className="mt-12">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        {state.lineType === 'cellular' ? (
                            <>
                                <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Seu plano é:</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                                    {[
                                        { id: 'post', label: 'Pós-pago' },
                                        { id: 'control', label: 'Controle' },
                                        { id: 'pre', label: 'Pré-pago' },
                                        { id: 'unknown', label: 'Não sei informar' }
                                    ].map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => { updateState({ planType: opt.id as any }); nextStep(); }}
                                            className="p-6 rounded-2xl border-2 border-slate-100 hover:border-gold hover:bg-gold/5 transition-all text-left font-bold text-navy-acc flex items-center justify-between"
                                        >
                                            {opt.label}
                                            <ArrowRightIcon className="w-4 h-4 text-gold/50" />
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-8 text-slate-500 text-sm font-light">
                                    A maioria dos planos Pós e Controle funciona normalmente.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Esse telefone fixo é:</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                                    {[
                                        { id: 'residential', label: 'Residencial' },
                                        { id: 'business', label: 'Empresarial / Escritório' },
                                        { id: 'unknown', label: 'Não sei informar' }
                                    ].map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => { updateState({ fixedType: opt.id as any }); nextStep(); }}
                                            className="p-8 rounded-2xl border-2 border-slate-100 hover:border-gold hover:bg-gold/5 transition-all text-center flex flex-col items-center gap-4"
                                        >
                                            <span className="font-bold text-navy-acc">{opt.label}</span>
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-8 text-slate-500 text-sm font-light">
                                    Telefones fixos costumam funcionar bem com a Lexa.
                                </p>
                            </>
                        )}
                        <div className="mt-12">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Qual é a operadora desse número?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {['Vivo', 'Claro', 'TIM', 'Oi', 'Outra / Regional', 'Não sei informar'].map(op => (
                                <button
                                    key={op}
                                    onClick={() => { updateState({ carrier: op }); nextStep(); }}
                                    className={`p-6 rounded-2xl border-2 transition-all font-bold ${state.carrier === op ? 'border-gold bg-gold/5' : 'border-slate-100 hover:border-slate-300'}`}
                                >
                                    {op}
                                </button>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-500 text-sm font-light">
                            Usamos essa informação apenas para orientar a configuração.
                        </p>
                        <div className="mt-12">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                );

            case 7:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Encaminhamento de chamadas</h2>
                        <div className="max-w-2xl mx-auto text-left space-y-8">
                            <div className="p-8 bg-gold/5 border border-gold/20 rounded-[32px] mb-8">
                                <p className="text-xl text-navy-acc font-medium mb-2">Para a Lexa atender, seu número precisa encaminhar chamadas.</p>
                            </div>
                            
                            <ul className="space-y-6">
                                {[
                                    "Esse recurso é comum na maioria dos planos",
                                    "Em alguns casos, pode ser necessário um ajuste simples",
                                    "A gente orienta você passo a passo"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-600 text-lg">
                                        <CheckCircleIcon className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                <ShieldCheckIcon className="w-8 h-8 text-navy-acc" />
                                <p className="text-slate-500 text-sm font-medium italic">
                                    Se algo não funcionar como esperado, você pode cancelar durante o teste.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-12">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextStep}
                                className="inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-lg px-12 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-navy-acc/20"
                            >
                                <span>Entendido</span>
                                <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                );

            case 8:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Você consegue testar o encaminhamento agora?</h2>
                        
                        {!state.testCallForwarding ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                                <button
                                    onClick={() => updateState({ testCallForwarding: true })}
                                    className="p-8 rounded-3xl border-2 border-gold bg-gold/5 hover:bg-gold/10 transition-all flex flex-col items-center gap-4 group"
                                >
                                    <ZapIcon className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-lg text-navy-acc">Sim, quero testar agora</span>
                                </button>
                                <button
                                    onClick={() => { updateState({ testCallForwarding: false }); nextStep(); }}
                                    className="p-8 rounded-3xl border-2 border-slate-100 hover:border-slate-300 transition-all flex flex-col items-center gap-4 group"
                                >
                                    <InfoIcon className="w-10 h-10 text-slate-300 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-lg text-slate-500">Prefiro testar depois</span>
                                </button>
                            </div>
                        ) : (
                            <div className="max-w-xl mx-auto text-left space-y-8 animate-fade-in">
                                <div className="space-y-6">
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <p className="font-bold text-navy-acc mb-4 uppercase tracking-wider text-sm">📱 Android:</p>
                                        <p className="text-2xl font-mono text-gold font-bold">#21#</p>
                                        <p className="text-sm text-slate-500 mt-2">Digite no teclado e pressione ligar.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <p className="font-bold text-navy-acc mb-4 uppercase tracking-wider text-sm">🍎 iPhone:</p>
                                        <p className="text-lg text-slate-700 font-medium">Ajustes → Telefone → Encaminhamento de Ligações</p>
                                    </div>
                                </div>
                                <div className="bg-navy-acc/5 p-6 rounded-2xl border border-navy-acc/10">
                                    <p className="text-navy-acc text-sm leading-relaxed">
                                        Se aparecer alguma mensagem, está tudo certo. <br/>
                                        <span className="font-bold">Se não funcionar, a gente resolve com você.</span>
                                    </p>
                                </div>
                                <div className="text-center mt-8">
                                    <button
                                        onClick={nextStep}
                                        className="inline-flex items-center justify-center gap-3 bg-navy-acc text-white font-bold text-lg px-12 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-navy-acc/20"
                                    >
                                        <span>Já testei, vamos continuar</span>
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="mt-12 text-center">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                );

            case 9:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-3xl font-serif font-black text-[#051020] mb-8">Prefere usar um número Lexa?</h2>
                        <p className="text-xl text-slate-600 font-light mb-12 max-w-lg mx-auto">
                            Se quiser evitar qualquer ajuste com operadora, você pode usar um número Lexa exclusivo.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                            <button
                                onClick={() => { updateState({ useLexaNumber: false }); nextStep(); }}
                                className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${state.useLexaNumber === false ? 'border-gold bg-gold/5' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                                <SmartphoneIcon className="w-10 h-10 text-gold" />
                                <span className="font-bold text-lg text-navy-acc">Quero usar meu número</span>
                            </button>
                            <button
                                onClick={() => { updateState({ useLexaNumber: true }); nextStep(); }}
                                className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${state.useLexaNumber === true ? 'border-gold bg-gold/5' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                                <CheckCircleIcon className="w-10 h-10 text-gold" />
                                <span className="font-bold text-lg text-navy-acc">Quero um número Lexa</span>
                            </button>
                        </div>
                        <div className="mt-12">
                            <button onClick={prevStep} className="p-4 text-slate-400 hover:text-navy-acc transition-colors">
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                );

            case 10:
                return (
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircleIcon className="w-12 h-12 text-gold animate-bounce" />
                        </div>
                        <h2 className="text-4xl font-serif font-black text-[#051020] mb-8">Pronto! Estamos configurando sua Lexa</h2>
                        <div className="max-w-lg mx-auto space-y-8">
                            <p className="text-xl text-slate-600 font-light leading-relaxed">
                                Nossa equipe vai configurar e testar tudo com você durante o período de teste.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <p className="text-navy-acc font-bold text-lg">
                                    Você só começa a usar a Lexa quando estiver tudo funcionando corretamente.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={onBackToLanding}
                            className="mt-16 shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-bg-1 font-bold text-xl px-20 py-6 rounded-full transition-all hover:scale-105 shadow-2xl shadow-gold/20"
                        >
                            <span>Concluir onboarding</span>
                        </button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 pt-24 pb-32 px-6">
            {renderProgress()}
            <div className="container mx-auto max-w-4xl text-center">
                {state.step < 10 && renderHeader()}
                {renderStep()}
            </div>
        </div>
    );
};
