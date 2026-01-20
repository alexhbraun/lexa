import React, { useEffect, useState } from 'react';
import { ShieldCheckIcon } from './Icons';

interface StickyMobileCTAProps {
    onOpenSurvey?: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenSurvey }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px (approx. past Hero)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-white/80 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 animate-slide-up">
            <button
                onClick={onOpenSurvey}
                className="w-full flex items-center justify-center gap-2 bg-navy-acc text-white font-bold text-lg py-4 rounded-full shadow-lg"
            >
                <ShieldCheckIcon className="w-5 h-5 text-gold" />
                <span>Testar Lexa 7 dias grátis</span>
            </button>
        </div>
    );
};
