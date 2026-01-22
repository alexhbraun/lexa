import React from 'react';
import { IconAtendimento24h, IconResumosAutomaticos, IconTransferenciaHumana } from './Icons';

export const LexaLightFeaturesSectionB: React.FC = () => {
    return (
        <section className="py-24 bg-white reveal">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        TUDO INCLUSO
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[#051020] mb-6">
                        O Que Você Realmente Recebe
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-6">
                            <IconTransferenciaHumana className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#051020] mb-4">Notificações Instantâneas</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Seja alertado no momento em que uma ligação chega — por e-mail no nosso plano Básico, ou via WhatsApp nos nossos planos Plus e Ilimitado. Você decide quando responder.
                        </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-6">
                            <IconResumosAutomaticos className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#051020] mb-4">Painel de Chamadas Organizado</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Cada ligação registrada automaticamente em uma planilha limpa. Nome, número de telefone, tipo de caso, urgência, notas — tudo organizado para que você possa priorizar e fazer follow-up rapidamente.
                        </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-6">
                            <IconAtendimento24h className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#051020] mb-4">Nunca Mais Perca Receita</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Aquele prospect que teria ligado para seu concorrente? Ele acabou de falar com sua "recepcionista" e você tem as informações dele. Aquele cliente existente que precisava de tranquilidade? Ele recebeu, e está esperando seu retorno.
                        </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-6">
                             <span className="text-xl font-serif font-black">★</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#051020] mb-4">Imagem Profissional</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Você parece um escritório maior. O cliente só sabe que alguém competente atendeu e ajudou.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
