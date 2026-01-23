import React from 'react';

export const LexaLightBridge: React.FC = () => {
    return (
        <div className="w-full bg-[#FAFAFA] h-[56px] md:h-[72px] lg:h-[96px] flex items-center justify-center shadow-[inset_0_4px_10px_-2px_rgba(0,0,0,0.02)] border-t border-slate-50">
            <div className="w-[50%] h-[1px] bg-gold flex items-center justify-center relative opacity-100">
                 <div className="w-1 h-1 rounded-full bg-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
        </div>
    );
};
