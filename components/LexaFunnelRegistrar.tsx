import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, SmartphoneIcon } from './Icons';

interface LexaFunnelRegistrarProps {
    onNavigate: (view: string) => void;
}

export const LexaFunnelRegistrar: React.FC<LexaFunnelRegistrarProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        officeName: '',
        email: '',
        phone: '',
        lineType: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would submit data
        onNavigate('reserva-confirmada');
    };

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

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[580px] w-full relative z-10"
            >
                {/* Ceramic Card */}
                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-white/60 p-8 md:p-12 relative overflow-hidden ring-1 ring-slate-900/5">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                    
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 mb-6 bg-gold/5 border border-gold/20 px-4 py-1.5 rounded-full">
                            <ShieldCheckIcon className="w-4 h-4 text-gold" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/90">Ambiente Seguro</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-black text-[#051020] mb-4 tracking-tight leading-[1.1]">
                            Reserve seu teste real da Lexa
                        </h1>
                        <p className="text-slate-500 text-lg font-light leading-relaxed mb-6">
                            Em poucos passos, preparamos sua Lexa para atender ligações reais do seu escritório.
                        </p>
                        <div className="bg-navy-acc/5 border-l-4 border-gold p-4 mb-4 text-left">
                            <p className="text-slate-700 text-sm font-medium leading-relaxed">
                                <strong className="text-navy-acc">A Lexa não é uma demonstração.</strong><br/>
                                É um teste operacional no seu número, com chamadas reais.
                            </p>
                        </div>

                        {/* Overview of Next Steps */}
                        <div className="text-left mt-[32px] mb-[12px] w-full">
                            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                O que acontece a seguir
                            </h3>
                        </div>

                        <div className="text-left space-y-[10px] mb-[24px] w-full">
                            <div className="text-sm leading-[1.4] text-slate-500">
                                <p className="font-bold text-slate-800">1. Preparamos sua Lexa</p>
                                <p>Criamos um ambiente dedicado para o seu teste, configurado para o seu número.</p>
                            </div>
                            <div className="text-sm leading-[1.4] text-slate-500">
                                <p className="font-bold text-slate-800">2. Avisamos quando estiver pronta</p>
                                <p>Assim que tudo estiver preparado, você recebe um aviso para iniciar o teste.</p>
                            </div>
                            <div className="text-sm leading-[1.4] text-slate-500">
                                <p className="font-bold text-slate-800">3. O teste começa na primeira ligação real</p>
                                <p>O período de avaliação só inicia quando a Lexa atender uma chamada de verdade.</p>
                            </div>
                            <div className="text-sm leading-[1.4] text-slate-500">
                                <p className="font-bold text-slate-800">4. Você decide com calma</p>
                                <p>Após o teste, você escolhe se faz sentido continuar — sem surpresas.</p>
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium mt-[10px]">
                                Não há cobrança antes do início real do teste.
                            </p>
                        </div>

                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                            Precisamos apenas de algumas informações para preparar corretamente o seu ambiente.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1 group-focus-within:text-gold transition-colors">Nome Completo</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-gold px-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-300 rounded-t-xl hover:bg-slate-50/80"
                                    placeholder="Ex: Dr. Alexandre Braun"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1 group-focus-within:text-gold transition-colors">Nome do Escritório</label>
                                <input 
                                    type="text" 
                                    name="officeName"
                                    value={formData.officeName}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-gold px-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-300 rounded-t-xl hover:bg-slate-50/80"
                                    placeholder="Ex: Braun & Associados"
                                    required
                                />
                            </div>
                            
                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1 group-focus-within:text-gold transition-colors">E-mail profissional que receberá as notificações das ligações</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-gold px-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-300 rounded-t-xl hover:bg-slate-50/80"
                                    placeholder="contato@seuescritorio.com.br"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1 group-focus-within:text-gold transition-colors">Número que receberá encaminhamento</label>
                                <div className="relative">
                                    <SmartphoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-gold pl-12 pr-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-300 rounded-t-xl hover:bg-slate-50/80"
                                        placeholder="(00) 00000-0000"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1">Tipo de Linha</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {['Fixo', 'Celular', 'Dúvida'].map((type) => (
                                        <label key={type} className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center text-xs font-bold transition-all duration-300 ${formData.lineType === type ? 'bg-[#051020] text-white border-[#051020] shadow-lg scale-105' : 'bg-white text-slate-400 border-slate-100 hover:border-gold/30 hover:bg-slate-50'}`}>
                                            <input 
                                                type="radio" 
                                                name="lineType" 
                                                value={type} 
                                                checked={formData.lineType === type}
                                                onChange={(e) => setFormData({...formData, lineType: e.target.value})}
                                                className="hidden"
                                            />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                className="group shimmer relative w-full flex items-center justify-center gap-4 bg-navy-acc text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_40px_80px_-15px_rgba(5,16,32,0.4)] overflow-hidden"
                            >
                                <span className="leading-tight relative z-10">Reservar meu teste</span>
                                <div className="bg-gold p-2 rounded-full relative z-10 group-hover:rotate-12 transition-transform duration-300">
                                    <SmartphoneIcon className="w-5 h-5 text-navy-acc" />
                                </div>
                            </button>
                            
                            <p className="text-center text-[10px] uppercase tracking-wider text-slate-400 mt-6 font-bold">
                                Sem compromisso • O teste só começa quando a Lexa atender a primeira ligação real.
                            </p>
                        </div>
                    </form>
                </div>
                
                {/* Footer simple link */}
                <div className="text-center mt-8">
                    <button onClick={() => onNavigate('landing')} className="text-slate-400 hover:text-[#051020] text-sm font-medium transition-colors">
                        Voltar para o site
                    </button>
                </div>

            </motion.div>
        </section>
    );
};
