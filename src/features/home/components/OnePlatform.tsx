export default function OnePlatform() {
  return (
       <section className="relative bg-gradient-to-b from-premium-accent to-[#f0eab8] text-white py-20 px-6">
            <div className="mx-auto max-w-7xl">
            {/* Headline & CTA */}
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
                One platform to secure every identity
                </h2>
                <p className="text-xl md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
                Unify identity, data, and security intelligence in real time with the SailPoint platform. Continuously assess risk, context, and behavior across all identities-human and non-human-to dynamically adjust access, automate decisions, and enforce least privilege as business and threats evolve.
                </p>
                <a
                href="https://www.sailpoint.com/products/platform"
                className="inline-block bg-premium-accent text-white hover:bg-premium-accent/60 font-medium px-10 py-4 rounded-full text-lg transition-colors shadow-lg shadow-[#010534]/50"
                >
                Explore the SailPoint Platform
                </a>
            </div>

            {/* Tabs (Overview highlighted) */}
            <div className="py-12 md:py-16 px-4">
                <div className="max-w-7xl mx-auto">
                
                {/* Tabs - Now constrained to match content width */}
                <div className="flex justify-center mb-12"> 
                    <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-full p-1.5 border border-white/10 overflow-x-auto no-scrollbar">
                    <button className="whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md">
                        Overview
                    </button>
                    {["Atlas", "Control plane", "Real-time plane", "Security plane", "Customer success", "Agentic user experience", "Ecosystem"].map((tab) => (
                        <button key={tab} className="whitespace-nowrap px-6 py-3 rounded-full text-gray-300 hover:text-white transition-colors">
                        {tab}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                    <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                        Adaptive identity security, <br />
                        <span className="text-blue-500">powered in real time</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Unify identity, data, and security intelligence in real time with the SailPoint platform. 
                        Continuously assess risk, context, and behavior across all identities—human and non-human—to 
                        dynamically adjust access, automate decisions, and enforce least privilege.
                    </p>
                    </div>

                    {/* Image - Increased size using w-full and scale */}
                    <div className="flex justify-center md:justify-end">
                    <img 
                        src="/layeredcubes.png" 
                        alt="3D Illustration" 
                        className="w-full max-w-[600px] h-auto transform scale-110 md:scale-125 object-contain" 
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    
  );
}