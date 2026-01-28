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

    const [error, setError] = useState('');

    const formatPhoneDisplay = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 11) {
            return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
                        .replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
                        .replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }
        return value.substring(0, 15); // Limit max length
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const formatted = formatPhoneDisplay(value);
            setFormData({ ...formData, phone: formatted });
            // Clear error when user types enough digits (10 digits + formatting)
            const digits = formatted.replace(/\D/g, '');
            if (digits.length >= 10 && error) setError('');
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    // GoHighLevel Webhook URL
    const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/TEVwwDK8JO4eqvbBtTmb/webhook-trigger/f11530e6-1ed4-421f-8240-907ad29b029f'; 

    const formatPhoneNumber = (phone: string) => {
        // Remove all non-numeric characters
        const cleanNumber = phone.replace(/\D/g, '');
        
        // Check if it already starts with 55 (Brazil country code)
        // A valid Brazil mobile number with 55 is usually 12-13 digits (55 + 2 digit area + 8-9 digit number)
        if (cleanNumber.startsWith('55') && cleanNumber.length > 11) {
            return cleanNumber;
        }
        
        // If not, prepend 55
        return `55${cleanNumber}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Phone Validation
        const cleanPhone = formData.phone.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
            setError('Por favor, insira um número de telefone válido (mínimo 10 dígitos).');
            return;
        }

        setIsSubmitting(true);
        setError('');

        const formattedPhone = formatPhoneNumber(formData.phone);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    phone: formattedPhone, // Send formatted number
                    msg_src__original_phone: formData.phone, // Keep original input just in case
                    submittedAt: new Date().toISOString(),
                    source: 'Lexa Landing Page'
                }),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Webhook submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
            onNavigate('teste-confirmado');
        }
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

            <div className="pt-12 pb-8 flex justify-center relative z-10">
                <img 
                    src="https://ik.imagekit.io/rgqefde41/Design%20sem%20nome%20(8).png" 
                    alt="Lexa Logo" 
                    className="h-16 w-auto"
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[580px] w-full relative z-10"
            >
                {/* Ceramic Card */}
                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(5,16,32,0.12)] border border-gold/30 p-8 md:p-12 relative overflow-hidden ring-1 ring-slate-900/5">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                    
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 mb-6 bg-gold/5 border border-gold/20 px-4 py-1.5 rounded-full">
                            <ShieldCheckIcon className="w-4 h-4 text-gold" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/90">Ambiente Seguro</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-4 tracking-tight leading-tight">
                            Comece seus <br className="hidden md:block" />
                            <span className="text-gold italic font-light">7 dias grátis.</span>
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">Nome Completo</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-400 rounded-xl hover:border-gold/50"
                                    placeholder="Ex: Dr. João Silva"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">Nome do Escritório</label>
                                <input 
                                    type="text" 
                                    name="officeName"
                                    value={formData.officeName}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-400 rounded-xl hover:border-gold/50"
                                    placeholder="Ex: Silva & Associados"
                                    required
                                />
                            </div>
                            
                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">E-mail profissional que receberá as notificações das ligações</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-400 rounded-xl hover:border-gold/50"
                                    placeholder="contato@seuescritorio.com.br"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">Número que receberá encaminhamento</label>
                                <div className="relative">
                                    <SmartphoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 pl-12 pr-4 py-4 transition-all outline-none text-[#051020] font-medium placeholder:text-slate-400 rounded-xl hover:border-gold/50"
                                        placeholder="(00) 00000-0000"
                                        required
                                    />
                                </div>
                                {error && (
                                    <p className="text-red-500 text-xs font-bold mt-2 ml-1 animate-pulse">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Tipo de Linha</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { id: 'Fixo', label: 'Fixo', hint: 'Landline/PABX' },
                                        { id: 'Celular', label: 'Celular', hint: 'Mobile number' }
                                    ].map((type) => (
                                        <label key={type.id} className={`cursor-pointer border border-gold/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${formData.lineType === type.id ? 'bg-[#051020] text-white border-gold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] scale-105' : 'bg-white text-slate-500 hover:border-gold/60 hover:bg-slate-50'}`}>
                                            <input 
                                                type="radio" 
                                                name="lineType" 
                                                value={type.id} 
                                                checked={formData.lineType === type.id}
                                                onChange={(e) => setFormData({...formData, lineType: e.target.value})}
                                                className="hidden"
                                            />
                                            <span className="text-xs font-black uppercase tracking-wider mb-1">{type.label}</span>
                                            <span className={`text-[9px] font-medium leading-tight ${formData.lineType === type.id ? 'text-gold' : 'text-slate-400'}`}>
                                                {type.hint}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                onClick={() => (window as any).fbq && (window as any).fbq('trackCustom', 'trial_click')}
                                className="group shimmer relative w-full flex items-center justify-center gap-4 bg-gradient-to-r from-gold to-yellow-600 text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_50px_-15px_rgba(197,160,89,0.4)] border border-transparent overflow-hidden"
                            >
                                <span className="leading-tight relative z-10">Reservar meu teste de 7 dias</span>
                                <div className="bg-white/20 p-2 rounded-full relative z-10 group-hover:rotate-12 transition-transform duration-300">
                                    <SmartphoneIcon className="w-5 h-5 text-white" />
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
