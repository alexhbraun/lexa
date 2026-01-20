import React from 'react';
import { PlayIcon, PauseIcon } from './Icons';

const AudioCard: React.FC<{
    image: string;
    title: string;
    description: string;
    duration: string;
    type: string;
    audioSrc?: string;
}> = ({ image, title, description, duration, type, audioSrc }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current || !audioSrc) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        setIsPlaying(!audioRef.current?.paused);
    };

    return (
        <div className="group bg-white/5 backdrop-blur-2xl p-6 md:p-10 rounded-[60px] border border-white/20 transition-all duration-700 hover:-translate-y-4 shadow-[0_0_80px_-20px_rgba(197,160,89,0.1)] hover:shadow-[0_80px_120px_-20px_rgba(0,0,0,0.4)] hover:border-gold/40">
            {audioSrc && (
                <audio 
                    ref={audioRef} 
                    src={audioSrc} 
                    onEnded={handleEnded} 
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="hidden"
                />
            )}
            <div className="flex flex-col">
                <div className="relative h-64 overflow-hidden rounded-[40px] mb-8 bg-black/20">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051020] to-transparent"></div>
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 rounded-full bg-gold/10 backdrop-blur-md text-gold text-[10px] font-black uppercase tracking-[0.2em] border border-gold/20 shadow-sm">
                            {type}
                        </span>
                    </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 leading-tight">{title}</h3>
                <p className="text-slate-400 text-[17px] leading-relaxed font-light mb-10 italic">
                    "{description}"
                </p>

                <div className="mt-auto">
                    <div className="flex items-center gap-6 p-6 rounded-[30px] bg-white/5 border border-white/10 shadow-inner relative overflow-hidden">
                        <button
                            onClick={togglePlay}
                            className={`shimmer w-16 h-16 rounded-full bg-gold flex items-center justify-center text-navy-acc hover:scale-105 transition-all duration-500 shadow-xl z-10 ${!audioSrc ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!audioSrc}
                        >
                            {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6 ml-1" />}
                        </button>
                        <div className="flex-grow z-10">
                            <div className="flex justify-between mb-3">
                                <span className="text-[10px] text-gold font-black uppercase tracking-widest opacity-80">Status: {isPlaying ? 'Em reprodução' : 'Pronto'}</span>
                                <span className="text-[10px] text-white font-black uppercase tracking-widest opacity-60">{duration}</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                                <div className={`h-full bg-gold transition-all duration-[2000ms] ease-linear ${isPlaying ? 'w-full' : 'w-0'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LexaLightAudioDemoSection: React.FC = () => {
    return (
        <section id="demo-audio" className="py-24 md:py-48 bg-[#051020] reveal overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-32">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                        DEMONSTRAÇÃO ACÚSTICA
                    </div>
                    <h2 className="text-3xl md:text-6xl font-serif font-black text-white mb-8 leading-tight">
                        É exatamente isto que o seu cliente <br className="hidden md:block" />
                        ouve quando <span className="text-gold italic font-light">liga para você.</span>
                    </h2>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
                        Não se trata de uma simulação teórica ou promessa técnica. 
                        Escute como o atendimento da Lexa funciona na prática agora.
                        <br /><br />
                        Linguagem clara, tom adequado e postura profissional. Você ouve, avalia e decide se este é o padrão que o seu escritório exige.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <AudioCard
                        type="Triagem de Elite"
                        image="/assets/images/lexa_demo_1.png"
                        title="Primeiro contato de lead trabalhista"
                        description="Veja como a Lexa acolhe o cliente estressado, identifica o motivo jurídico e transmite segurança absoluta."
                        duration="1:12 min"
                        audioSrc="https://ik.imagekit.io/rgqefde41/Lexa%20Ligacao%201.MP3"
                    />
                    <AudioCard
                        type="Protocolo Boutique"
                        image="/assets/images/lexa_demo_2.png"
                        title="Dúvida processual complexa"
                        description="A fluidez necessária para lidar com clientes ativos, organizando o fluxo de trabalho e filtrando o ruído."
                        duration="1:25 min"
                        audioSrc="https://ik.imagekit.io/rgqefde41/Lexa%20Cliente.MP3"
                    />
                </div>

                <div className="mt-32 text-center">
                    <div className="inline-block px-12 py-8 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full"></div>
                        <p className="text-2xl text-gold font-boutique italic leading-relaxed">
                            Sua marca jurídica, transmitida em cada palavra.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
