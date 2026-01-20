
import React, { useState, Suspense, lazy } from 'react';
import { CalendarIcon } from './Icons';
import AudioDemoContent from './AudioDemoContent';

const CalendarModalContent = lazy(() => import('./CalendarModalContent'));

const LoadingSpinner: React.FC = () => (
    <div className="w-full h-[600px] flex justify-center items-center" aria-label="Carregando calendário">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-gold"></div>
    </div>
);

export const PrepPage: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleDemoInteraction = () => {
        setIsUnlocked(true);
    };

    return (
        <section className="py-16 md:py-24 animate-text-focus-in">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold hero-title mb-4">
                        Prepare-se para a conversa
                    </h1>
                    <p className="text-lg md:text-xl text-ink-2 max-w-2xl mx-auto">
                        Em menos de 2 minutos, você vai ver como a Lexa funciona na prática —
                        isso garante que nossa conversa seja objetiva e relevante para seu escritório.
                    </p>
                    <p className="mt-4 text-sm text-ink-2/60 uppercase tracking-widest font-semibold">
                        Não é uma apresentação de vendas. É apenas para você entender o fluxo real antes de conversar com a gente.
                    </p>
                </div>

                <div className="bg-bg-2 border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold"></div>

                    <div className="mb-8">
                        <p className="text-gold font-bold text-center mb-6 text-lg uppercase tracking-wider">
                            Ouça a Lexa em ação
                        </p>
                        <div className="max-w-md mx-auto" onClick={handleDemoInteraction} onPlayCapture={handleDemoInteraction}>
                            <AudioDemoContent
                                onBookDemo={() => { }}
                                titleId="prep-audio-title"
                                descriptionId="prep-audio-desc"
                                hideCTA={true}
                            />
                        </div>
                    </div>

                    <div className={`transition-all duration-700 ease-in-out ${isUnlocked ? 'opacity-100 translate-y-0 max-h-[1200px]' : 'opacity-0 translate-y-8 max-h-0 overflow-hidden'}`}>
                        <div className="pt-8 border-t border-border mt-8">
                            <div className="text-center mb-10">
                                <p className="text-white text-xl font-semibold mb-4 bg-white/5 inline-block px-6 py-2 rounded-full">
                                    Pronto. Agora você já sabe como a Lexa funciona no dia a dia.
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold section-title mt-4">
                                    Agora sim, agendar conversa
                                </h2>
                            </div>

                            <Suspense fallback={<LoadingSpinner />}>
                                <CalendarModalContent
                                    titleId="prep-calendar-title"
                                    descriptionId="prep-calendar-desc"
                                />
                            </Suspense>
                        </div>
                    </div>

                    {!isUnlocked && (
                        <div className="flex flex-col items-center gap-4 mt-8 animate-pulse">
                            <div className="w-12 h-12 rounded-full border-2 border-dashed border-gold/40 flex items-center justify-center">
                                <span className="text-2xl">🎧</span>
                            </div>
                            <p className="text-ink-2/40 text-sm font-medium">Interaja com o áudio acima para liberar o calendário</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
