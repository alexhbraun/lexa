import React from 'react';

interface CalendarModalContentProps {
    titleId: string;
    descriptionId: string;
}

const CalendarModalContent: React.FC<CalendarModalContentProps> = ({ titleId, descriptionId }) => {
    return (
        <>
            <div className="text-center">
                <h3 id={titleId} className="text-2xl font-bold text-white mb-3">Agende sua demonstração com a Clara</h3>
                <p id={descriptionId} className="text-text-muted mb-6">
                  Escolha o melhor horário e veja a Clara em ação — atendimento real, resultados reais.
                </p>
            </div>
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/CGNoifAzaGMgP66QntVW"
              className="w-full h-[600px] md:h-[700px] border-none rounded-xl"
              loading="lazy"
              title="Agende uma demonstração com a Clara">
            </iframe>
        </>
    );
};

export default CalendarModalContent;
