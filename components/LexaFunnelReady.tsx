import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmartphoneIcon, ZapIcon, PhoneIcon, HelpCircleIcon, HeadphonesIcon, BriefcaseIcon, WifiIcon, CheckCircleIcon, XIcon } from './Icons';

interface LexaFunnelReadyProps {
    onNavigate: (view: string) => void;
}

type LineType = 'celular' | 'fixo' | 'desconhecido' | null;

export const LexaFunnelReady: React.FC<LexaFunnelReadyProps> = ({ onNavigate }) => {
    const [lineType, setLineType] = useState<LineType>(null);
    const [activeModal, setActiveModal] = useState<'fixo' | 'pabx' | 'sip' | null>(null);
    const [isCellularBlocked, setIsCellularBlocked] = useState(false);

    // ESC to close modal and scroll lock
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveModal(null);
        };
        
        if (activeModal) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [activeModal]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 font-sans text-slate-900 relative overflow-hidden">
             {/* Background */}
            <div className="absolute inset-0 -z-10">
                <img 
                    src="/assets/images/lexa_brazil_boutique_hero.png" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-sm opacity-50 scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50/90"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Branding Header */}
            <div className="pt-12 pb-8 flex justify-center relative z-10">
                <img 
                    src="https://ik.imagekit.io/rgqefde41/Design%20sem%20nome%20(8).png" 
                    alt="Lexa Logo" 
                    className="h-16 w-auto"
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[800px] w-full relative z-10"
            >
                {/* Ceramic Card */}
                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-white/60 p-8 md:p-12 relative overflow-hidden ring-1 ring-slate-900/5">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-8 bg-gold/5 border border-gold/20 px-4 py-1.5 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/90">Configuração em Tempo Real</span>
                        </div>


                    <h1 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-4 leading-tight tracking-tight">
                        Verificação de Linha.
                        <br/><span className="text-gold italic font-light">Para garantir que seus 7 dias sejam perfeitos.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-light mb-10">
                        Confirmar se sua linha permite encaminhamento é essencial para iniciarmos seu teste.
                    </p>

                    {/* Step 1: Selection */}
                    {!lineType && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                            <button 
                                onClick={() => setLineType('celular')}
                                className="group relative bg-white border border-slate-100 p-8 rounded-[32px] text-left transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                    <SmartphoneIcon className="w-6 h-6 text-navy-acc" />
                                </div>
                                <h3 className="text-xl font-black text-[#051020] mb-2 uppercase tracking-tight">Celular</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Use a mobile number (Vivo, TIM, Claro, etc.)
                                </p>
                            </button>

                            <button 
                                onClick={() => setLineType('fixo')}
                                className="group relative bg-white border border-slate-100 p-8 rounded-[32px] text-left transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                    <PhoneIcon className="w-6 h-6 text-[#051020]" />
                                </div>
                                <h3 className="text-xl font-black text-[#051020] mb-2 uppercase tracking-tight">Fixo / PABX / VoIP</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Use a landline or PBX system.
                                </p>
                            </button>

                            <button 
                                onClick={() => setLineType('desconhecido')}
                                className="md:col-span-2 group relative bg-white border border-slate-100 p-6 rounded-[32px] text-center transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4"
                            >
                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                    <HelpCircleIcon className="w-5 h-5 text-navy-acc" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-black text-[#051020] uppercase tracking-tight">Não tenho certeza</h3>
                                    <p className="text-slate-400 text-xs font-medium">We will guide you through the process.</p>
                                </div>
                            </button>
                        </div>
                    )}
                    </div>

                    {/* Step 2: Conditional Instructions */}
                    <AnimatePresence mode="wait">
                        {lineType === 'celular' && (
                            <motion.div 
                                key="celular"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-10 text-left relative overflow-hidden"
                            >
                                {isCellularBlocked ? (
                                    <div className="space-y-6">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                                        <h3 className="text-lg font-black text-[#051020] mb-2 uppercase tracking-wide">Alguns planos móveis não permitem desvio total.</h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                            Isso depende das regras do seu plano com a operadora. Você ainda pode testar a Lexa por outros meios.
                                        </p>
                                        
                                        <div className="space-y-3">
                                            {/* Option 1 */}
                                            <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm">
                                                <div>
                                                    <p className="text-[10px] font-black text-navy-acc uppercase mb-1">Opção 1</p>
                                                    <p className="text-sm text-slate-800 font-bold">Solicitar liberação na operadora</p>
                                                    <p className="text-[10px] text-slate-400 font-medium">Peça pela ativação de "encaminhamento total".</p>
                                                </div>
                                                <button className="px-4 py-2 bg-navy-acc text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">Falar com suporte</button>
                                            </div>

                                            {/* Option 2 */}
                                            <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm">
                                                <div>
                                                    <p className="text-[10px] font-black text-navy-acc uppercase mb-1">Opção 2</p>
                                                    <p className="text-sm text-slate-800 font-bold">Usar um número Lexa (DID)</p>
                                                    <p className="text-[10px] text-slate-400 font-medium">Você recebe um número dedicado para divulgar.</p>
                                                </div>
                                                <button className="px-4 py-2 bg-gold text-navy-acc rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">Quero um número Lexa</button>
                                            </div>

                                            {/* Option 3 */}
                                            <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm">
                                                <div>
                                                    <p className="text-[10px] font-black text-navy-acc uppercase mb-1">Opção 3</p>
                                                    <p className="text-sm text-slate-800 font-bold">Usar linha fixa ou PABX</p>
                                                    <p className="text-[10px] text-slate-400 font-medium">Se o escritório tiver outra linha disponível.</p>
                                                </div>
                                                <button 
                                                    onClick={() => {
                                                        setIsCellularBlocked(false);
                                                        setLineType('fixo');
                                                    }}
                                                    className="px-4 py-2 bg-slate-100 text-navy-acc rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
                                                >
                                                    Usar outro número
                                                </button>
                                            </div>
                                        </div>

                                        <button 
                                            onClick={() => setIsCellularBlocked(false)}
                                            className="w-full py-3 text-[10px] font-black text-slate-400 hover:text-navy-acc transition-colors uppercase tracking-[0.2em] text-center border-t border-slate-100 mt-2"
                                        >
                                            Voltar
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute top-0 left-0 w-1 h-full bg-navy-acc"></div>
                                        <h3 className="text-lg font-black text-[#051020] mb-4 uppercase tracking-wide">Ativação para celular</h3>
                                        <p className="text-slate-500 text-sm mb-6 font-medium">
                                            Para verificar se o encaminhamento funciona no seu número, use temporariamente o código abaixo.
                                        </p>

                                        <div className="mb-6">
                                            <p className="text-[10px] font-black text-navy-acc uppercase mb-2">Número técnico de teste</p>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed italic">
                                                Usado apenas para validar o encaminhamento da sua linha.
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-sm group hover:border-gold/50 transition-colors">
                                                <span className="font-mono text-xl text-[#051020] font-bold tracking-wider">*21*11999999999#</span>
                                                <button className="text-[10px] font-black uppercase tracking-widest text-navy-acc bg-navy-acc/5 px-3 py-1 rounded-full hover:bg-navy-acc hover:text-white transition-all">Copiar</button>
                                            </div>
                                            <p className="text-[10px] text-slate-400 font-bold leading-relaxed italic">
                                                Este não é o número definitivo da sua Lexa.
                                            </p>
                                            
                                            <div className="mt-6 pt-6 border-t border-slate-200/60 text-center">
                                                <p className="text-[11px] text-slate-400 font-bold mb-3">Não funcionou?</p>
                                                <button 
                                                    onClick={() => setIsCellularBlocked(true)}
                                                    className="text-xs font-black text-navy-acc hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4"
                                                >
                                                    Meu plano não permite encaminhamento
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        )}

                        {lineType === 'fixo' && (
                            <motion.div 
                                key="fixo"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-10 text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                                <h3 className="text-lg font-black text-[#051020] mb-4 uppercase tracking-wide">Ativação para linha fixa ou PABX</h3>
                                <p className="text-slate-500 text-sm mb-6 font-medium">
                                    Nesses casos, o encaminhamento é feito no painel do sistema ou com a operadora. O código usado em celulares não funciona em linhas fixas.
                                </p>
                                
                                <div className="grid grid-cols-1 gap-3">
                                    <button 
                                        onClick={() => setActiveModal('fixo')}
                                        className="group flex items-center justify-between p-4 bg-white rounded-full border border-slate-100 text-sm font-bold text-navy-acc hover:border-gold hover:shadow-md transition-all"
                                    >
                                        <span>Ver instruções para linha fixa</span>
                                        <div className="p-1.5 bg-gold/10 rounded-full group-hover:rotate-12 transition-transform">
                                            <ZapIcon className="w-4 h-4 text-gold" />
                                        </div>
                                    </button>
                                    <button 
                                        onClick={() => setActiveModal('pabx')}
                                        className="group flex items-center justify-between p-4 bg-white rounded-full border border-slate-100 text-sm font-bold text-navy-acc hover:border-gold hover:shadow-md transition-all"
                                    >
                                        <span>Ver instruções para PABX</span>
                                        <div className="p-1.5 bg-gold/10 rounded-full group-hover:rotate-12 transition-transform">
                                            <BriefcaseIcon className="w-4 h-4 text-gold" />
                                        </div>
                                    </button>
                                    <button 
                                        onClick={() => setActiveModal('sip')}
                                        className="group flex items-center justify-between p-4 bg-white rounded-full border border-slate-100 text-sm font-bold text-navy-acc hover:border-gold hover:shadow-md transition-all"
                                    >
                                        <span>Ver instruções para SIP / VoIP</span>
                                        <div className="p-1.5 bg-gold/10 rounded-full group-hover:rotate-12 transition-transform">
                                            <WifiIcon className="w-4 h-4 text-gold" />
                                        </div>
                                    </button>
                                    <button className="group flex items-center justify-between p-4 bg-navy-acc text-white rounded-full text-sm font-bold hover:scale-[1.02] transition-all mt-2 shadow-lg">
                                        <span>Falar com suporte técnico</span>
                                        <div className="p-1.5 bg-gold rounded-full group-hover:rotate-12 transition-transform">
                                            <HeadphonesIcon className="w-4 h-4 text-navy-acc" />
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {lineType === 'desconhecido' && (
                            <motion.div 
                                key="desconhecido"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-10 text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                                <h3 className="text-lg font-black text-[#051020] mb-4 uppercase tracking-wide">Sem problema. Vamos descobrir juntos.</h3>
                                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">
                                    Em menos de dois minutos, ajudamos você a identificar o tipo de linha e aplicar a configuração correta.
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <button onClick={() => setLineType('celular')} className="group flex items-center justify-center gap-2 p-4 bg-white rounded-full border border-slate-100 text-xs font-black text-navy-acc hover:border-gold transition-all uppercase tracking-wider">
                                        <span>Testar como celular</span>
                                    </button>
                                    <button className="group flex items-center justify-between px-6 py-4 bg-navy-acc text-white rounded-full text-xs font-black hover:scale-[1.02] transition-all uppercase tracking-wider shadow-lg">
                                        <span>Suporte</span>
                                        <div className="p-1 bg-gold rounded-full group-hover:rotate-12 transition-transform">
                                            <HeadphonesIcon className="w-3 h-3 text-navy-acc" />
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Final Action - Always visible if a type is selected, or original logic if preferred? 
                        Spec says: "Manter o botão original no rodapé" + "Nenhum usuário pode seguir sem escolher tipo".
                    */}
                    {lineType && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <button 
                                onClick={() => onNavigate('reserva-confirmada')} 
                                className="group shimmer relative w-full flex items-center justify-center gap-6 bg-black text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)] border border-gold/30 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] overflow-hidden mb-8"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="leading-tight relative z-10">Consegui completar o teste de encaminhamento</span>
                                <div className="bg-gold p-2 rounded-full relative z-10 group-hover:rotate-12 transition-transform duration-300">
                                    <CheckCircleIcon className="w-5 h-5 text-[#051020]" />
                                </div>
                            </button>
                            
                            <p className="text-[11px] font-bold text-navy-acc leading-relaxed mb-8 px-4">
                                Após essa verificação, criamos sua Lexa dedicada com um número exclusivo para o seu escritório.
                            </p>

                            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                                O teste começa automaticamente na primeira ligação atendida.
                            </p>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Instruction Modals */}
            <AnimatePresence>
                {activeModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveModal(null)}
                            className="absolute inset-0 bg-[#051020]/80 backdrop-blur-sm"
                        />
                        
                        {/* Modal Card */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-[32px] shadow-2xl w-full max-w-[500px] relative z-20 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h2 className="text-xl font-black text-[#051020] tracking-tight">
                                    {activeModal === 'fixo' && "Encaminhamento em linha fixa"}
                                    {activeModal === 'pabx' && "Encaminhamento em PABX"}
                                    {activeModal === 'sip' && "Encaminhamento em SIP / VoIP"}
                                </h2>
                                <button 
                                    onClick={() => setActiveModal(null)}
                                    className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-navy-acc"
                                >
                                    <XIcon className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 max-h-[70vh] overflow-y-auto">
                                <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed font-medium">
                                    {activeModal === 'fixo' && (
                                        <div className="space-y-6">
                                            <p>Em linhas fixas, o encaminhamento não é feito por código no telefone. Ele é ativado pela operadora ou no painel do serviço.</p>
                                            
                                            <div className="space-y-4">
                                                <h4 className="text-navy-acc font-black uppercase text-xs tracking-widest">Opção 1 — Pelo atendimento da operadora</h4>
                                                <p>Ligue para a central e solicite: <br/> <span className="text-slate-900 font-bold">“Ativação de encaminhamento total de chamadas para outro número.”</span></p>
                                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                    <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Número técnico de teste:</p>
                                                    <p className="text-lg font-black text-navy-acc">(11) 99999-9999</p>
                                                    <p className="text-[9px] text-slate-400 font-bold mt-2 italic">Este não é o seu número definitivo.</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="text-navy-acc font-black uppercase text-xs tracking-widest">Opção 2 — Pelo portal da operadora</h4>
                                                <p>Procure por: <br/> <span className="font-bold">Serviços → Encaminhamento de chamadas</span> <br/> ou <br/> <span className="font-bold">Desvio de chamadas</span></p>
                                            </div>

                                            <p className="text-[11px] text-amber-600 font-bold bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                                                Importante: Pode haver custo por chamada encaminhada.
                                            </p>
                                        </div>
                                    )}

                                    {activeModal === 'pabx' && (
                                        <div className="space-y-6">
                                            <p>O desvio é configurado no próprio equipamento.</p>
                                            
                                            <div className="space-y-4">
                                                <h4 className="text-navy-acc font-black uppercase text-xs tracking-widest">Passos necessários:</h4>
                                                <ol className="space-y-2 list-decimal list-inside">
                                                    <li>Acessar o painel do PABX</li>
                                                    <li>Criar regra de desvio</li>
                                                    <li>Definir condição (ocupado, não atendido ou sempre)</li>
                                                </ol>
                                            </div>

                                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Encaminhar para:</p>
                                                <p className="text-lg font-black text-navy-acc">(11) 99999-9999</p>
                                            </div>

                                            <p className="text-sm font-bold text-slate-400 italic">
                                                Se não tiver acesso, peça ao técnico responsável.
                                            </p>
                                        </div>
                                    )}

                                    {activeModal === 'sip' && (
                                        <div className="space-y-6">
                                            <p>A configuração é feita no painel web do seu sistema.</p>
                                            
                                            <div className="space-y-4">
                                                <h4 className="text-navy-acc font-black uppercase text-xs tracking-widest">Termos para procurar:</h4>
                                                <ul className="space-y-2 list-disc list-inside font-bold text-slate-900">
                                                    <li>Call Forwarding</li>
                                                    <li>Desvio de chamadas</li>
                                                    <li>Roteamento de chamadas</li>
                                                </ul>
                                            </div>

                                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Encaminhar para:</p>
                                                <p className="text-lg font-black text-navy-acc">(11) 99999-9999</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-4">
                                <button 
                                    onClick={() => setActiveModal(null)}
                                    className="px-6 py-4 rounded-full text-sm font-bold text-slate-500 hover:bg-slate-200 transition-all border border-slate-200 bg-white"
                                >
                                    Fechar
                                </button>
                                <button className="px-6 py-4 rounded-full text-sm font-bold text-white bg-navy-acc hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2">
                                    <span>Falar com suporte</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

