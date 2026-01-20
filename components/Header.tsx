
import React from 'react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-bg-1/70 backdrop-blur-lg sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <button
          onClick={onLogoClick}
          className={onLogoClick ? "cursor-pointer" : "cursor-default"}
          aria-label="Lexa — Atendimento Jurídico Inteligente"
        >
          <img
            src="https://ik.imagekit.io/rgqefde41/Design%20sem%20nome%20(8).png"
            alt="Lexa Logo"
            className="h-16 w-auto"
          />
        </button>
      </div>
    </header>
  );
};
