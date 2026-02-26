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

import { Play } from 'lucide-react';

export default function HeroSection() {
  return (

       <section className="relative bg-[#010534] text-white min-h-screen flex flex-col justify-center items-center pt-20 mt-5">
        <div className="text-center space-y-6 max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-0">
            The new era of adaptive identity
          </h1>
          <p className="text-xl md:text-xl text-gray-300 mb-10">
            Identity-first security for humans, machines, and AI.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.sailpoint.com/demo" className="px-8 py-3 bg-[#f0eab8] text-[#010534] rounded-full font-medium hover:bg-[#f0eab8]/80 transition-colors">
              Book A Demo
            </a>
            <a href="https://www.sailpoint.com/demo/interactive" className="px-8 py-3 border border-[#f0eab8]/60 rounded-full font-medium hover:bg-white/10 transition-colors">
              Take a product tour
            </a>
          </div>
        </div>

        {/* Video placeholder with play button */}
        <div className="relative w-full max-w-4xl mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/sailhero.jpg"
            alt="Adaptive identity video placeholder"
            className="w-full h-auto object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <Play className="h-20 w-20 text-white" />
          </button>
        </div>
      </section>
    
  );
}