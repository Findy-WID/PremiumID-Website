import { useState, useEffect } from 'react';
import DemoModal from '../../../components/ui/DemoModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // background images
  const bgImages = [
    '/herobg1.jpeg',
    '/herobg2.jpeg',
    '/herobg3.jpeg',
  ];

  // Logic to rotate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative bg-[#010534] text-white min-h-[85vh] flex items-center overflow-hidden">
        
        {/* --- THE BACKGROUND LAYER --- */}
        {bgImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(1, 5, 52, 1) 30%, rgba(1, 5, 52, 0) 70%), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
            }}
          />
        ))}

        {/* --- CONTENT LAYER --- */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Left Side: Stays exactly as you had it */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h1 className="inline-block bg-gradient-to-br from-premium-accent to-[#f0eab8] bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Premium Identity Provider
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                Use only one account to log in to all of your company’s websites and mobile applications. 
                PremiumID Provider makes this authentication process smoother and improves security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="px-10 py-4 bg-[#f0eab8] text-[#010534] text-xl rounded-full font-bold hover:scale-105 transition-all shadow-xl"
                >
                  Book A Demo
                </button>
              </div>
            </div>

            {/* Right Side: Now empty because the "image" is in the background */}
            <div className="hidden md:block md:w-2/5" />

          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}