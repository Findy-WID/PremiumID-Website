import { Link } from 'react-router-dom';

export default function OnePlatform() {
  const platformFeatures = [
    {
      id: "Overview",
      title: "Adaptive Identity Security",
      accent: "Real-time Power",
      description: "Unify identity, data, and security intelligence in real time with PremiumID. Continuously assess risk and behavior.",
      image: "/layeredcube1.png" 
    },
    {
      id: "Atlas",
      title: "Foundation of Identity",
      accent: "The Atlas Layer",
      description: "The Atlas provides the mapping for all human and non-human identities across your entire cloud ecosystem.",
      image: "https://placehold.co/600x400/010534/white?text=Atlas+Layer"
    },
    {
      id: "Control plane",
      title: "Centralized Management",
      accent: "Control Plane",
      description: "Automate policy enforcement and least privilege access through a centralized intelligence layer.",
      image: "https://placehold.co/600x400/010534/white?text=Control+Plane"
    },
    {
      id: "Real-time plane",
      title: "Instant Assessment",
      accent: "Security Plane",
      description: "Analyze behavioral signals as they happen to block threats before they penetrate the perimeter.",
      image: "https://placehold.co/600x400/010534/white?text=Real-time+Plane"
    },
    {
      id: "Security plane",
      title: "Uncompromising Protection",
      accent: "Real-time Plane",
      description: "Detect identity-based threats in real-time. Our security plane acts as an automated firewall for your users.",
      image: "https://placehold.co/600x400/010534/white?text=Security+Plane"
    },
    {
      id: "Customer success",
      title: "Expert Guidance",
      accent: "Tailored Growth",
      description: "Beyond technology, we provide a dedicated partnership to ensure PremiumID scales with your organization.",
      image: "https://placehold.co/600x400/010534/white?text=Customer+Success"
    },
    {
      id: "Agentic UX",
      title: "Intelligent Interaction",
      accent: "The Agentic UX",
      description: "Frictionless security that learns. Our AI-driven experience anticipates user needs and automates prompts.",
      image: "https://placehold.co/600x400/010534/white?text=Agentic+UX"
    },
    {
      id: "Ecosystem",
      title: "Limitless Connectivity",
      accent: "Unified Ecosystem",
      description: "Connect everything from legacy on-premise servers to the latest SaaS tools in a single fabric.",
      image: "https://placehold.co/600x400/010534/white?text=Ecosystem"
    }
  ];

  return (
    <section className="relative bg-[url('/oneplatform-bg.jpeg')] bg-cover bg-center bg-no-repeat py-24 px-6 overflow-hidden">
      {/* Background Glows for Depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Headline & Description */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            One platform to secure every identity
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unify identity, data, and security intelligence in real time with PremiumID.
          </p>
        </div>

        {/* --- SCROLLABLE FEATURE CARDS --- */}
        {/* On mobile: horizontal scroll (snap)
          On desktop: clean 3 or 4 column grid
        */}
        <div className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:pb-0">
          {platformFeatures.map((feature) => (
            <div 
              key={feature.id}
              className="min-w-[85vw] md:min-w-[40vw] lg:min-w-0 snap-center group"
            >
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 h-full flex flex-col hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                
                {/* Image at Top */}
                <div className="mb-8 overflow-hidden rounded-2xl aspect-video flex items-center justify-center bg-[#010534]/50">
                  <img 
                    src={feature.image} 
                    alt={feature.id} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 block">
                    {feature.accent}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Optional "Learn More" link for each card */}
                {/* <div className="mt-8 flex items-center text-white/50 group-hover:text-blue-400 transition-colors text-sm font-semibold cursor-pointer">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* --- SUGGESTED CTA --- */}
        <div className="mt-20 text-center">
          <Link 
           to="/contact"
           className="bg-[#f0eab8] text-[#010534] px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(240,234,184,0.3)] transition-all">
                  Talk to an Identity Expert
          </Link>
        </div>

      </div>
    </section>
  );
}