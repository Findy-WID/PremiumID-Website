// src/components/InnovationSection.tsx
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  link: string;
  linkText: string;
  imageSrc: string; // Path to the associated image for this feature
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: "80% of AI agents act beyond intent",
    description: "We bring clarity and control to AI agents, their users, and the tools they access.",
    link: "#",
    linkText: "Agent Identity Security",
    imageSrc: "/sail1.jpg",
  },
  {
    id: 2,
    title: "30% reduction in identity-related risks",
    description: "Gain clarity and context over access paths and entitlements with advanced visibility tools.",
    link: "#",
    linkText: "Observability & Insights",
    imageSrc: "/sail2.png",
  },
  {
    id: 3,
    title: "40-70% faster application onboarding",
    description: "Reduce application onboarding time and turn intelligence into prioritized governance.",
    link: "#",
    linkText: "SailPoint Accelerated Application Management",
    imageSrc: "/blitzhero.jpg",
  },
];

export default function InnovationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
          Innovation across every identity — human and beyond
        </h2>

        {/* Image Display Area - Shows image based on active card */}
        <div className="relative w-full h-96 mb-12 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Optional: Fallback placeholder if no image */}
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-lg font-medium pointer-events-none">
            {/* <span>Innovation Illustration</span> */}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative transition-all duration-500 cursor-pointer ${
                index === activeIndex
                  ? 'transform scale-105'
                  : 'opacity-70 hover:opacity-90'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Active indicator bar */}
              <div
                className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full transition-all duration-500 ${
                  index === activeIndex ? 'w-full' : 'w-0'
                }`}
              />

              {/* Card Content */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                  <sup className="text-blue-600 text-xs ml-0.5">{index + 1}</sup>
                </p>
                <a
                  href={feature.link}
                  className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                    index === activeIndex
                      ? 'text-blue-600 hover:text-blue-700'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {feature.linkText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Manual navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}