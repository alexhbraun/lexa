import React, { useEffect, useRef, useState } from 'react';

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidthClass?: string;
    bgClass?: string; // New prop for custom background
    titleId?: string;
    descriptionId?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, maxWidthClass = 'max-w-xl', bgClass = 'bg-bg-2', titleId, descriptionId }) => {
    const [isRendered, setIsRendered] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const lastActiveElement = useRef<Element | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
            const timer = setTimeout(() => setIsShowing(true), 20);
            return () => clearTimeout(timer);
        } else {
            setIsShowing(false);
        }
    }, [isOpen]);

    const handleTransitionEnd = () => {
        if (!isOpen) {
            setIsRendered(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen && isRendered) {
            lastActiveElement.current = document.activeElement;
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';

            const modalElement = modalRef.current;
            if (!modalElement) return;

            const focusableElements = Array.from(
                modalElement.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            );

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleFocusTrap = (event: KeyboardEvent) => {
                if (event.key !== 'Tab') return;
                
                if (focusableElements.length === 0) {
                    event.preventDefault();
                    return;
                }

                if (event.shiftKey) { // Shift+Tab
                    if (document.activeElement === firstElement) {
                        if (lastElement instanceof HTMLElement) {
                            lastElement.focus();
                        }
                        event.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        if (firstElement instanceof HTMLElement) {
                            firstElement.focus();
                        }
                        event.preventDefault();
                    }
                }
            };
            
            modalElement.addEventListener('keydown', handleFocusTrap);

            setTimeout(() => {
                modalRef.current?.focus();
            }, 100);

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
                if (modalElement) {
                    modalElement.removeEventListener('keydown', handleFocusTrap);
                }
                if (lastActiveElement.current instanceof HTMLElement) {
                    lastActiveElement.current.focus();
                }
            };
        } else {
            document.body.style.overflow = '';
        }

    }, [isOpen, isRendered, onClose]);

    if (!isRendered) return null;

    return (
        <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onClick={onClose}
            onTransitionEnd={handleTransitionEnd}
        >
            <div
                ref={modalRef}
                tabIndex={-1}
                className={`${bgClass} border border-border rounded-2xl shadow-lg relative w-full ${maxWidthClass} transition-all duration-300 ease-out ${isShowing ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
                style={{ outline: 'none' }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10 p-1 rounded-full hover:bg-white/10"
                    aria-label="Fechar modal"
                >
                    <XIcon />
                </button>
                <div className="p-6 md:p-8">
                    {children}
                </div>
            </div>
        </div>
    );
};