
import React, { useEffect, useRef, useState } from 'react';
import { CalendarIcon } from './Icons';

interface AudioDemoContentProps {
    onBookDemo: () => void;
    titleId: string;
    descriptionId: string;
    hideCTA?: boolean;
}

const demos = {
  scheduling: {
    title: 'Agendamento de Consulta',
    description: 'Ouça a Clara agendar uma nova consulta com eficiência e empatia. (40s)',
    src: 'https://storage.googleapis.com/CLARA_AUDIO_DEMO_URL.mp3'
  },
  reminder: {
    title: 'Lembrete de Consulta',
    description: 'Veja como a Clara confirma um horário e reduz faltas com uma ligação proativa. (30s)',
    src: 'https://storage.googleapis.com/CLARA_AUDIO_DEMO_REMINDER.mp3'
  }
};

type DemoKey = keyof typeof demos;

const AudioWaveform: React.FC = () => (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-24 flex items-end justify-center gap-1 opacity-25 [mask-image:linear-gradient(to_bottom,transparent,white_40%,white_100%)] pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
            const delay = Math.random() * 500;
            const duration = 1 + Math.random();
            const heightPercentage = 10 + Math.random() * 60;
            return (
                <div
                    key={i}
                    className="w-1 bg-coral/60 rounded-full animate-sound-wave"
                    style={{
                        height: `${heightPercentage}%`,
                        animationDelay: `${delay}ms`,
                        animationDuration: `${duration.toFixed(2)}s`,
                        animationTimingFunction: 'ease-in-out',
                    }}
                />
            );
        })}
    </div>
);


const AudioDemoContent: React.FC<AudioDemoContentProps> = ({ onBookDemo, titleId, descriptionId, hideCTA = false }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [activeDemo, setActiveDemo] = useState<DemoKey>('scheduling');
    const currentDemo = demos[activeDemo];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        
        const handlePlay = () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ 
                event: 'demo_audio_played',
                demo_type: activeDemo 
            });
        };

        audio.addEventListener('play', handlePlay);

        return () => {
            if (audio) {
                audio.removeEventListener('play', handlePlay);
            }
        };
    }, [activeDemo]);

    return (
        <div className="text-center p-2 relative overflow-hidden">
            <AudioWaveform />
            <div className="relative z-10">
                 <h3 id={titleId} className="text-xl text-ink-1 font-semibold mb-4 pt-4">Ouça a Clara em Ação</h3>

                <div className="flex justify-center bg-white/5 p-1 rounded-full mb-6 max-w-xs mx-auto">
                    {(Object.keys(demos) as DemoKey[]).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveDemo(key)}
                            className={`w-1/2 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                                activeDemo === key 
                                ? 'bg-coral text-white shadow-md' 
                                : 'text-ink-2 hover:bg-white/10'
                            }`}
                        >
                            {key === 'scheduling' ? 'Agendamento' : 'Lembrete'}
                        </button>
                    ))}
                </div>
                
                <p id={descriptionId} className="text-ink-2/80 mb-4 text-sm h-10 flex items-center justify-center px-4">
                  {currentDemo.description}
                </p>

                <audio ref={audioRef} controls className="w-full rounded-md accent-coral" key={activeDemo}>
                    <source src={currentDemo.src} type="audio/mpeg" />
                    Seu navegador não suporta o player de áudio.
                </audio>
                
                {!hideCTA && (
                    <button 
                    onClick={onBookDemo} 
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-coral to-coral-2 text-white font-bold px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(255,110,91,0.25)] transition-all hover:brightness-110 transform hover:scale-105"
                    >
                        <CalendarIcon className="h-5 w-5" />
                        Agendar demonstração completa
                    </button>
                )}
            </div>
        </div>
    );
};

export default AudioDemoContent;
