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
    title: "Almost all AI agents operate outside their intended scope.",
    description: "We provide transparency and control for AI agents, their users, and the systems they interact with.",
    link: "#",
    linkText: "Agent Identity Security",
    imageSrc: "/prem1.jpg",
  },
  {
    id: 2,
    title: "Drive a reduction in identity-related risks.",
    description: "Leverage advanced visibility tools to gain clear insight and context into access paths and entitlements",
    link: "#",
    linkText: "Observability & Insights",
    imageSrc: "/prem2.png",
  },
  {
    id: 3,
    title: "Accelerate application onboarding faster than usual",
    description: "Simplify and speed up the onboarding process while converting insights into focused, actionable governance.",
    link: "#",
    linkText: "PremiumID Accelerated Application Management",
    imageSrc: "/prem3.jpg",
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
          Advancing Innovation For Humans And Emerging Digital Identities Alike.
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
                className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-[#f0eab8] to-premium-accent rounded-full transition-all duration-500 ${
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
                  ? 'w-8 bg-premium-accent'
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