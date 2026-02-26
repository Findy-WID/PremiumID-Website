// src/components/AccoladesSection.tsx
export default function AccoladesSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-indigo-950 to-blue-950 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-s text-center text-gray-500 mb-2">
          Accolades & Recognition
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why we are a world leader in identity security
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IDC MarketScape */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">IDC MarketScape</h3>
            <div className="aspect-image bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <img src="/IDC.png" alt="IDC MarketScape Graph" className="w-full h-full object-contain rounded-lg" />
            </div>
            <p className="text-gray-300 mb-4">
              SailPoint leads in IDC's 2025 Identity Security Marketscape
            </p>
            <a href="https://www.sailpoint.com/identity-library/idc-marketscape-2025-sailpoint-leader" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
              Read report →
            </a>
          </div>

          {/* KuppingerCole Leadership Compass */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">KuppingerCole Leadership Compass</h3>
            <div className="bg-gray-800 rounded-lg flex items-center justify-center mb-4">
            <img src="/Access-Governance.png" alt="Leadership Compass" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-300 mb-4">
              SailPoint scores highest in KuppingerCole Leadership Compass for Access Governance
            </p>
            <a href="https://www.sailpoint.com/identity-library/access-governance" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
              Read report →
            </a>
          </div>

          {/* Gartner Peer Insights + #1 Revenue */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Gartner Peer Insights & Revenue Leader</h3>
            <div className="bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <img src="/peer-insights.png" alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                
                  <p className="font-medium">
                    SailPoint recognized as a 2024 Gartner Peer Insights™ Customers' Choice
                  </p>
                </div>
                <a href="https://www.sailpoint.com/press-releases/sailpoint-2024-gartner-peer-insights-customers-choice" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 text-sm">
                  Read press release →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}