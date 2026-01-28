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
        <div 
            className="group relative rounded-[40px] border border-gold/30 p-6 md:p-10 transition-all duration-700 hover:-translate-y-2 hover:border-gold/50 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
                boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
            }}
        >
             {/* Aura Halo */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                 style={{ background: 'radial-gradient(circle at center, rgba(180,138,58,0.15), transparent 70%)' }}>
            </div>

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
            <div className="flex flex-col h-full relative z-10">
                {/* Image Section - Centered Illustration Style */}
                <div className="relative mb-8 text-center">
                    <div className="inline-block relative">
                         {/* Pill Tag */}
                        <div className="mb-6 flex justify-center">
                           <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-[10px] font-bold uppercase tracking-widest border border-white/20 backdrop-blur-sm">
                                {type}
                            </span> 
                        </div>

                        <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white/5 bg-black/20 shadow-inner">
                             <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-center flex-grow">
                    <h3 className="text-2xl font-bold text-white/95 mb-4 leading-tight">{title}</h3>
                    <p className="text-white/70 text-[16px] leading-relaxed font-normal mb-10">
                        {description}
                    </p>
                </div>

                {/* Player Section */}
                <div className="mt-auto">
                    <div className="flex items-center gap-5 p-4 rounded-[24px] bg-black/20 border border-white/5 backdrop-blur-sm">
                        <button
                            onClick={togglePlay}
                            className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#051020] hover:scale-105 transition-all duration-300 shadow-md ${!audioSrc ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!audioSrc}
                        >
                            {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5 ml-0.5" />}
                        </button>
                        <div className="flex-grow">
                             <div className="flex justify-between mb-2">
                                <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">{isPlaying ? 'Tocando...' : 'Ouvir audio'}</span>
                                <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">{duration}</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full bg-gold transition-all duration-[2000ms] ease-linear ${isPlaying ? 'w-full' : 'w-0'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LexaLightAudioDemoSection: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <section id="demo-audio" className={`py-24 md:py-40 border-t border-slate-800 reveal overflow-hidden ${className || 'bg-[#051020]'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center max-w-5xl mx-auto mb-24">
                    <div className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                        DEMONSTRAÇÃO REAL
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-8 leading-tight">
                        É assim que o seu cliente <br className="hidden md:block" />
                        é <span className="text-gold italic font-light">atendido pela Lexa.</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Escute gravações reais. Sem scripts robóticos, sem pausas estranhas. 
                        Apenas uma conversa natural e resolutiva.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    <AudioCard
                        type="Triagem de Lead"
                        image="/assets/images/lexa_demo_1.png"
                        title="Novo Lead Trabalhista"
                        description="Acolhimento calmo de um cliente ansioso. Lexa identifica a urgência, qualifica o caso e agenda o retorno."
                        duration="1:12"
                        audioSrc="https://ik.imagekit.io/rgqefde41/Lexa%20Ligacao%201.MP3"
                    />
                    <AudioCard
                        type="Gestão de Processo"
                        image="/assets/images/lexa_demo_2.png"
                        title="Dúvida Processual"
                        description="Cliente busca atualização. Lexa consulta a base, informa o status e evita uma interrupção desnecessária."
                        duration="1:25"
                        audioSrc="https://ik.imagekit.io/rgqefde41/Lexa%20Cliente.MP3"
                    />
                </div>

                <div className="mt-24 text-center">
                    <p className="text-lg text-white font-bold">
                        Padrão de atendimento boutique, <span className="text-gold italic font-normal">24h por dia.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};
