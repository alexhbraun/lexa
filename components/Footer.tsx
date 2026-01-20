import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center justify-center space-x-2">
    <img src="https://ik.imagekit.io/rgqefde41/Logo%20Clara%20sem%20fundo.png?updatedAt=1761990691836" alt="Clara.plus Logo" className="h-16 w-auto" />
  </div>
);


export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-bg-1 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <div className="flex items-center justify-center space-x-2">
              <img
                src="https://ik.imagekit.io/rgqefde41/Design%20sem%20nome%20(8).png"
                alt="Lexa Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-ink-2 mt-3 max-w-xs">A Lexa cuida das ligações — e de quem mais importa: seus clientes.</p>
          </div>
          <div className="flex space-x-6 text-ink-2">
            <a href="#" className="hover:text-gold transition-colors">Termos</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade (LGPD)</a>
            <a href="#" className="hover:text-gold transition-colors">Contato</a>
          </div>
        </div>
        <div className="text-center text-slate-500 text-sm mt-10 pt-8 border-t border-white/10">
          <p>&copy; 2025 Lexa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};