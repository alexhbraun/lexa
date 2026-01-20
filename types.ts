export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// FIX: Declare dataLayer on the window object to fix TypeScript errors.
// This is commonly used for Google Tag Manager and other analytics scripts.
declare global {
  interface Window {
    dataLayer: any[];
  }
}
