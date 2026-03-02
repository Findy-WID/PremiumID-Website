import PageLayout from '../../components/layout/PageLayout';
import { ShieldCheck, UserCheck, Zap, Server, Share2, Lock } from 'lucide-react';

export default function SingleSignOnPage() {
  const benefits = [
    {
      title: "Enhanced Convenience",
      description: "Users only need to remember one strong password to access every corporate resource, from internal apps to cloud SaaS.",
      icon: <UserCheck className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Improved Security",
      description: "Passwords never leave your organization. Centralized control allows for stringent requirements without frustrating users.",
      icon: <ShieldCheck className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Protect Investment",
      description: "No need to replace current IT solutions. Premium ID integrates into your existing infrastructure and extends its capabilities.",
      icon: <Zap className="text-[#f0eab8]" size={28} />
    }
  ];

  return (
    <PageLayout>
      <main className="min-h-screen bg-white">
        
        {/* --- HERO SECTION: The "Why" --- */}
        <section className="bg-[#010534] text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="text-[#f0eab8] font-bold tracking-widest uppercase text-sm">Service Highlight</span>
                <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Single Sign-On (SSO)</h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Stop the "Password Nightmare." Give your employees seamless access to dozens of 
                  applications with a single, secure authentication process.
                </p>
              </div>
              <div className="md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-[#f0eab8] font-bold mb-4">The Challenge:</h3>
                <p className="text-gray-300 italic">
                  "Security policies require different passwords, they can't be written on stickers, 
                  and they must be changed several times a year. For users, this is a nightmare."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BENEFITS SECTION --- */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Solution</h2>
              <div className="w-20 h-1 bg-[#010534] mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#010534] rounded-xl flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TECHNICAL INTEGRATION SECTION --- */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Methods</h2>
                <p className="text-gray-600 mb-8">
                  Premium ID is designed to be flexible. Whether you use modern SaaS or legacy On-Premise 
                  software, we have a path to integration.
                </p>
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-blue-800 font-medium">
                    "Connect once, access everywhere."
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                {/* Method 1 */}
                <div className="border border-gray-200 p-8 rounded-3xl flex flex-col items-start">
                  <div className="p-3 bg-gray-100 rounded-lg mb-6"><Share2 className="text-blue-600" /></div>
                  <h4 className="text-xl font-bold mb-4">Standard Protocols</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Configure applications to use Premium ID as an external provider using industry-standard protocols.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['SAML', 'OpenID Connect', 'WS-Federation'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Method 2 */}
                <div className="border border-gray-200 p-8 rounded-3xl flex flex-col items-start">
                  <div className="p-3 bg-gray-100 rounded-lg mb-6"><Server className="text-blue-600" /></div>
                  <h4 className="text-xl font-bold mb-4">Web Proxy Connection</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    For apps that don't support protocols, connect via a Web Proxy. Premium ID intercepts 
                    login requests and processes them automatically.
                  </p>
                  <span className="mt-auto inline-flex items-center text-blue-600 font-bold text-sm cursor-help">
                    <Lock size={14} className="mr-2" /> Legacy App Support
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#010534] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to simplify your workflow?</h2>
                <p className="text-blue-200 mb-10 max-w-xl mx-auto">Get started with Premium ID's Single Sign-On and improve your company's security today.</p>
                <button className="bg-[#f0eab8] text-[#010534] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                  Request a Technical Consultation
                </button>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </section>

      </main>
    </PageLayout>
  );
}