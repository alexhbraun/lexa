import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, SmartphoneIcon, CheckCircleIcon, IconAtendimento24h, CalendarIcon, FilterIcon, LockIcon } from './Icons';
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
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/assets/images/lexa_elite_office_hero.png" 
                        alt="Background" 
                        className="w-full h-full object-cover object-center" 
                    />
                    {/* Much lighter gradient to ensure image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/40 to-slate-50/10"></div>
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
                            <div className="inline-flex items-center gap-2 mb-6 bg-gold/10 border border-gold/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                                <ShieldCheckIcon className="w-4 h-4 text-gold-dark" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gold-dark">Inteligência Artificial Jurídica</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#051020] mb-6 leading-[1.05] tracking-tight">
                                A Excelência do Seu Escritório <span className="text-gold italic font-serif">Começa no Atendimento.</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                                A Lexa garante que todo potencial cliente seja atendido com profissionalismo instantâneo, 24 horas por dia.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { text: "Atendimento imediato, sem sinal de ocupado", highlight: "Zero Chamadas Perdidas" },
                                    { text: "Qualificação automática de demandas", highlight: "Filtro Inteligente" },
                                    { text: "Resumo do caso enviado no seu WhatsApp", highlight: "Notificação Instantânea" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-white/50 shadow-sm">
                                        <div className="bg-[#051020] p-2 rounded-full text-gold">
                                            <CheckCircleIcon className="w-4 h-4" />
                                        </div>
                                        <p className="text-sm font-medium text-slate-700">
                                            <span className="text-[#051020] font-bold">{item.highlight}:</span> {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/30 rounded-full blur-[50px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-900/10 rounded-full blur-[50px]"></div>
                            
                            <div className="bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_60px_-15px_rgba(5,16,32,0.15)] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                                
                                {!submitted ? (
                                    <>
                                        <div className="mb-8 text-center">
                                            <h3 className="text-2xl font-serif font-black text-[#051020] mb-2">Solicite uma Demo</h3>
                                            <p className="text-slate-500 text-sm">Descubra como modernizar sua recepção.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Nome Completo"
                                                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 rounded-xl text-[#051020] outline-none transition-all placeholder:text-slate-400 font-medium"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="WhatsApp com DDD"
                                                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 rounded-xl text-[#051020] outline-none transition-all placeholder:text-slate-400 font-medium"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="E-mail Profissional"
                                                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold/20 px-4 py-4 rounded-xl text-[#051020] outline-none transition-all placeholder:text-slate-400 font-medium"
                                                    required
                                                />
                                            </div>

                                            <button 
                                                type="submit" 
                                                disabled={isSubmitting}
                                                className="w-full bg-[#051020] text-white font-bold text-lg py-4 rounded-xl hover:bg-gold hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-gold/20 flex items-center justify-center gap-3 group mt-4 overflow-hidden relative"
                                            >
                                                <span className="relative z-10">{isSubmitting ? 'Enviando...' : 'Quero Ver a Lexa Agindo'}</span>
                                                {!isSubmitting && <div className="relative z-10 bg-white/20 p-1 rounded-full"><IconAtendimento24h className="w-4 h-4 text-white" /></div>}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                            </button>

                                            <div className="flex items-center justify-center gap-2 mt-6 opacity-60">
                                                <LockIcon className="w-3 h-3 text-slate-500" />
                                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                                                    Dados 100% Protegidos
                                                </p>
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    <div className="text-center py-12">
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200"
                                        >
                                            <CheckCircleIcon className="w-10 h-10" />
                                        </motion.div>
                                        <h3 className="text-2xl font-serif font-bold text-[#051020] mb-3">Tudo Certo!</h3>
                                        <p className="text-slate-600 mb-8 leading-relaxed">
                                            Recebemos seu interesse. Nossa equipe entrará em contato via WhatsApp em breve para agendar sua demonstração.
                                        </p>
                                        <button 
                                            onClick={() => onNavigate('landing')}
                                            className="text-[#051020] font-bold border-b-2 border-gold/30 hover:border-gold transition-colors pb-0.5"
                                        >
                                            Voltar ao site principal
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
                                icon: <SmartphoneIcon className="w-8 h-8 text-gold" />,
                                title: "Notificação em Tempo Real",
                                desc: "Após cada atendimento, a Lexa envia um resumo e o áudio da conversa direto no seu WhatsApp."
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
