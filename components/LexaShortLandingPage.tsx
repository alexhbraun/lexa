import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, SmartphoneIcon, CheckCircleIcon, IconAtendimento24h, CalendarIcon, FilterIcon } from './Icons';
import { Header } from './Header';
import { Footer } from './Footer';
import { sendFacebookCAPI, generateEventId } from '../utils/facebookCAPI';

interface LexaShortLandingPageProps {
    onNavigate: (view: string) => void;
}

export const LexaShortLandingPage: React.FC<LexaShortLandingPageProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // GoHighLevel Webhook URL (Using the same one as Registrar for now, or a specific one if needed)
    const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/TEVwwDK8JO4eqvbBtTmb/webhook-trigger/f11530e6-1ed4-421f-8240-907ad29b029f'; 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const eventId = generateEventId('lead_short');

        // 1. Pixel
        if ((window as any).fbq) {
            (window as any).fbq('track', 'Lead', {
                content_name: 'Short Page Lead',
            }, { eventID: eventId });
        }

        // 2. CAPI
        const userData = {
            em: [formData.email.replace(/\s/g, '').toLowerCase()],
            ph: [formData.phone.replace(/\D/g, '')],
            fn: [formData.name.split(' ')[0]?.toLowerCase()],
            ln: [formData.name.split(' ').slice(1).join(' ')?.toLowerCase()]
        };
        
        sendFacebookCAPI('Lead', eventId, userData);

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                    source: 'Lexa Short LP',
                    fb_event_id: eventId
                }),
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white text-slate-900 font-sans antialiased relative min-h-screen">
             <div className="absolute top-0 left-0 right-0 z-50">
                 <Header onLogoClick={() => onNavigate('landing')} />
            </div>

            {/* HERO SECTION WITH FORM */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <img 
                        src="/assets/images/lexa_brazil_boutique_hero.png" 
                        alt="Background" 
                        className="w-full h-full object-cover blur-[2px] opacity-40 scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-slate-50/50"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Content */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 bg-gold/10 border border-gold/20 px-4 py-1.5 rounded-full">
                                <ShieldCheckIcon className="w-4 h-4 text-gold-dark" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gold-dark">Tecnologia Jurídica Premium</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#051020] mb-6 leading-[1.1] tracking-tight">
                                Pare de Perder Clientes para a <span className="text-gold">Caixa Postal.</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                                A única IA que atende seu telefone como uma secretária humana experiente. 
                                <br className="hidden md:block" />
                                <span className="text-[#051020] font-bold">24 horas por dia. Sem custos trabalhistas.</span>
                            </p>

                            <div className="flex flex-col gap-4 text-sm font-bold text-slate-500 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircleIcon className="w-4 h-4 text-green-600" /></div>
                                    Triagem de clientes urgentes
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircleIcon className="w-4 h-4 text-green-600" /></div>
                                    Agendamento automático na sua agenda
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircleIcon className="w-4 h-4 text-green-600" /></div>
                                    Instalação simples em 5 minutos
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full transform rotate-3 scale-90 -z-10"></div>
                            
                            <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_40px_100px_-20px_rgba(5,16,32,0.1)] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
                                {!submitted ? (
                                    <>
                                        <div className="mb-8 text-center">
                                            <h3 className="text-2xl font-serif font-black text-[#051020] mb-2">Conheça a Lexa</h3>
                                            <p className="text-slate-500 text-sm">Preencha para receber uma demonstração.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Seu Nome"
                                                    className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 rounded-xl text-[#051020] outline-none transition-all placeholder:text-slate-400"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Seu WhatsApp"
                                                    className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 rounded-xl text-[#051020] outline-none transition-all placeholder:text-slate-400"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Seu E-mail Profissional"
                                                    className="w-full bg-white border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 rounded-xl text-[#051020] outline-none transition-all placeholder:text-slate-400"
                                                    required
                                                />
                                            </div>

                                            <button 
                                                type="submit" 
                                                disabled={isSubmitting}
                                                className="w-full bg-[#051020] text-white font-bold text-lg py-4 rounded-xl hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 group mt-2"
                                            >
                                                {isSubmitting ? 'Enviando...' : 'Quero Conhecer'}
                                                {!isSubmitting && <IconAtendimento24h className="w-5 h-5 text-gold group-hover:text-white transition-colors" />}
                                            </button>

                                            <p className="text-center text-[10px] uppercase tracking-wider text-slate-400 mt-4">
                                                Seus dados estão seguros.
                                            </p>
                                        </form>
                                    </>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircleIcon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-[#051020] mb-2">Solicitação Recebida!</h3>
                                        <p className="text-slate-500 mb-8">Nossa equipe entrará em contato em breve.</p>
                                        <button 
                                            onClick={() => onNavigate('landing')}
                                            className="text-gold font-bold hover:underline"
                                        >
                                            Voltar ao site
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUE PROP SECTION */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                     <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-6">
                            Por que escritórios de elite usam a Lexa?
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Elimine a ineficiência do atendimento telefônico e garanta que cada oportunidade seja tratada com profissionalismo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <IconAtendimento24h className="w-8 h-8 text-gold" />,
                                title: "Atendimento Humanizado 24/7",
                                desc: "Ela conversa naturalmente, entende o contexto jurídico e nunca deixa o telefone tocando."
                            },
                            {
                                icon: <CalendarIcon className="w-8 h-8 text-gold" />,
                                title: "Agenda Integrada",
                                desc: "A Lexa acessa sua agenda e marca reuniões com clientes qualificados automaticamente."
                            },
                            {
                                icon: <FilterIcon className="w-8 h-8 text-gold" />,
                                title: "Triagem Inteligente",
                                desc: "Ela faz as perguntas certas para identificar se o caso é relevante para o seu escritório."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="bg-[#051020] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gold/10">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#051020] mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button 
                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                             className="inline-flex items-center justify-center gap-3 bg-[#051020] text-white font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl"
                        >
                            Quero Transformar Meu Atendimento
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
