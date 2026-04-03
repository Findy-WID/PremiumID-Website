export default function ResourcesSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header - CLIENT'S CONTENT */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Moments from Gartner Identity & Access Management Summit 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identity has become the core of modern security.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Article Card */}
          <div className="group">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video">
                <img
                  src="https://emt.gartnerweb.com/ngw/eventassets/redesigned-site-imagery/tile-400x200-webp/overview-intro-card1-sec27i.webp"
                  alt="Gartner IAM Summit 2025"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="flex-grow">
                <span className="text-premium-primary text-xs font-bold uppercase tracking-widest mb-3 block">
                  Industry Insights
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  2025 IAM Key Takeaways
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore key insights from the Gartner Identity & Access Management 
                  Summit, covering emerging trends and strategic priorities for 2025.
                </p>
              </div>
                
              <a
                href="https://emt.gartnerweb.com/ngw/eventassets/en/conferences/2026/iam21/documents/gartner-na-iam-executive-summary.pdf"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-premium-primary hover:text-premium-accent transition-colors group"
                rel="noopener noreferrer"
              >
                Read Report
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Video Card 1 - Product Demo */}
          <div className="group">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video bg-gray-900">
                <video
                  src="/videos/vid1.mp4"
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="flex-grow">
                <span className="text-premium-primary text-xs font-bold uppercase tracking-widest mb-3 block">
                  Product Demo
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  See PremiumID in Action
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch how PremiumID unifies identity governance across cloud, on-premise, 
                  and hybrid environments — from onboarding to real-time threat response.
                </p>
              </div>
            </div>
          </div>

          {/* Video Card 2 - Explainer */}
          <div className="group">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video bg-gray-900">
                <video
                  src="/videos/vid2.mp4"
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="flex-grow">
                <span className="text-premium-primary text-xs font-bold uppercase tracking-widest mb-3 block">
                  Technical Deep Dive
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  How Adaptive MFA Stops Breaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A deep-dive into PremiumID's adaptive multi-factor engine — how it reads 
                  contextual risk signals and keeps legitimate users moving without friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}