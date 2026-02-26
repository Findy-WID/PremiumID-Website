// src/components/CustomersSection.tsx
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    company: "HEINEKEN",
    quote: "With SailPoint as our partner, we are able to build a robust identity security platform together which serves our ultimate goal to become best-connected brewer.",
    author: "Kamy Ng, Digital Identity Lead, HEINEKEN",
    videoPlaceholder: "/images/heineken-testimonial-placeholder.jpg", // ← your future image
  },
  // Add more if you have other testimonials
];

export default function CustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  // Customer logos (placeholders - replace with real ones)
  const logos = [
    "currys", "gm", "hershey", "legal-general", "repsol", 
    "salvation-army", "societe-generale", "home-depot", "trane"
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-purple-950 to-black text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          The world’s leading enterprises trust SailPoint
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          53% of the Fortune 500 and 28% of the Forbes Global 2000
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 md:gap-10 mb-16 opacity-80 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700">
                <span className="text-xs md:text-sm font-medium text-gray-400">{logo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-lg">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl">
              <img
                src={current.videoPlaceholder}
                alt={`${current.company} testimonial`}
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                <Play className="h-16 w-16 md:h-20 md:w-20 text-white" />
              </button>
            </div>

            <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-6">
              "{current.quote}"
            </blockquote>
            <p className="text-lg font-medium">{current.author}</p>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}