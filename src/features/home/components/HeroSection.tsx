// import Button from '../../../components/ui/Button';
// import { typography } from '../../../styles/typography';
// import { sectionStyles } from '../../../styles/section';

// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
// }
// props: { title, subtitle, ctaPrimary, ctaSecondary }: HeroSectionProps

import DemoModal from '../../../components/ui/DemoModal';
import { useState } from 'react';

export default function HeroSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
     <section className="relative bg-[#010534] text-white min-h-[80vh] flex items-center py-12 md:py-20"> {/* Changed: Added padding & min-height flex alignment */}
        <div className="container mx-auto px-6 max-w-7xl"> {/* Changed: Increased max-width from 5xl to 7xl to allow spreading */}
          
          {/* CHANGE 1: Removed flex:flex-col. 
            Standardized to flex-col (mobile) and md:flex-row (desktop).
            Added gap-12 to ensure the image and text aren't touching.
          */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* CHANGE 2: Left Side Content.
              Added md:w-1/2 so it takes up exactly half the screen on desktop.
              Changed text-center to md:text-left.
            */}
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <h1 className="inline-block bg-gradient-to-br from-premium-accent to-[#f0eab8] bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Premium Identity Provider
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Use only one account to log in to all of your company’s websites and mobile applications. 
                PremiumID Provider makes this authentication process smoother and improves security.
              </p>
              
              {/* CHANGE 3: Button Alignment. md:justify-start keeps it left on desktop. */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="px-10 py-4 bg-[#f0eab8] text-[#010534] text-xl rounded-full font-bold hover:brightness-110 transition-all"
                >
                  Book A Demo
                </button>
              </div>
            </div>

            {/* CHANGE 4: The Image/Video Container.
              Removed mt-12 (we use 'gap' now). 
              Added md:w-1/2 to balance the layout.
            */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white">
                <img
                  src="/Security-verification-icons.png"
                  alt="Security-verification-icons"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}