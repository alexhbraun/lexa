import React from 'react';
import { PlayIcon, PauseIcon } from './Icons';

interface LexaShortAudioDemoProps {
    onCtaClick?: () => void;
}

const AudioCard: React.FC<{
    image: string;
    title: string;
    description: string; // Now supports React.ReactNode for formatting if needed, but string is fine for text
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

    return (
        <div 
            className="group relative rounded-[40px] border border-gold/30 p-6 md:p-8 transition-all duration-700 hover:-translate-y-2 hover:border-gold/50 overflow-hidden bg-[#0B1221]"
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

                        <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-white/5 bg-black/20 shadow-inner">
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
                    <p className="text-slate-400 text-[15px] leading-relaxed font-normal mb-8">
                        {description}
                    </p>
                </div>

                {/* Player Section */}
                <div className="mt-auto">
                    <div className="flex items-center gap-4 p-3 rounded-[24px] bg-black/20 border border-white/5 backdrop-blur-sm">
                        <button
                            onClick={togglePlay}
                            className={`w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#051020] hover:scale-105 transition-all duration-300 shadow-md ${!audioSrc ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!audioSrc}
                        >
                            {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4 ml-0.5" />}
                        </button>
                        <div className="flex-grow">
                             <div className="flex justify-between mb-2">
                                <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">{isPlaying ? 'Tocando...' : 'Ouvir audio'}</span>
                                <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">{duration}</span>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full bg-gold transition-all duration-[2000ms] ease-linear ${isPlaying ? 'w-full' : 'w-0'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LexaShortAudioDemo: React.FC<LexaShortAudioDemoProps> = ({ onCtaClick }) => {
    return (
        <section className="pt-12 pb-24 bg-[#051020] border-t border-slate-800 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-2xl md:text-4xl font-serif font-black text-white mb-6 leading-tight uppercase tracking-wide">
                        Antes de conversar conosco, <br />
                        <span className="text-gold italic font-serif font-light">ouça como a Lexa atende</span>
                    </h2>
                    <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Trechos reais de atendimentos para você avaliar, com calma, 
                        o tom, a postura e a clareza da Lexa no primeiro contato com o cliente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    <AudioCard
                        type="Triagem de Lead"
                        image="/assets/images/lexa_demo_1.png"
                        title="Novo Lead Trabalhista"
                        description="Acolhimento calmo de um cliente ansioso. A Lexa identifica a urgência, qualifica o caso e registra as informações essenciais, para que você decida o próximo passo com tranquilidade."
                        duration="1:12"
                        audioSrc="https://ik.imagekit.io/rgqefde41/Lexa%20Ligacao%201.MP3"
                    />
                    <AudioCard
                        type="Gestão de Processo"
                        image="/assets/images/lexa_demo_2.png"
                        title="Dúvida Processual"
                        description="Cliente busca atualização de um processo em andamento. A Lexa consulta a base, informa o status corretamente e evita interrupções desnecessárias no seu dia."
                        duration="1:25"
                        audioSrc="https://ik.imagekit.io/rgqefde41/Lexa%20Cliente.MP3"
                    />
                </div>

                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm text-slate-400 font-medium mb-8">
                        Padrão de atendimento boutique, com postura profissional e linguagem jurídica adequada.
                    </p>
                    
                    <button 
                        onClick={onCtaClick}
                        className="w-full sm:w-auto bg-gold hover:bg-yellow-600 text-[#051020] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] transform hover:-translate-y-1"
                    >
                        Ver se a Lexa Faz Sentido Para Meu Escritório
                    </button>

                    <p className="mt-4 text-xs text-slate-500 font-medium">
                        Essa conversa serve apenas para entender seu cenário. Nenhuma contratação acontece aqui.
                    </p>
                </div>
            </div>
        </section>
    );
};
