import PageLayout from '../../components/layout/PageLayout';
import { Share2, Network, Link2, GitBranch, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IdentityBrokeringPage() {
  const benefits = [
    {
      title: "Unified Identity Hub",
      description: "Connect multiple directories (AD, Google, Okta) into one central broker for simplified management.",
      icon: <Network className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Social & External Login",
      description: "Allow partners and customers to use their existing identities (B2B/B2C) while you maintain full control.",
      icon: <Share2 className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Seamless Migration",
      description: "Move users from old systems to new ones without downtime by brokering the authentication between them.",
      icon: <Link2 className="text-[#f0eab8]" size={28} />
    }
  ];

  return (
    <PageLayout>
      <main className="min-h-screen bg-white">
        <section className="bg-[#010534] text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="text-[#f0eab8] font-bold tracking-widest uppercase text-sm">Infrastructure</span>
                <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-bold mt-4 mb-6">Identity Brokering</motion.h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">Centralize your fragmented identity landscape. Premium ID acts as the intelligent bridge between all your user directories and applications.</p>
              </div>
              <div className="md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-[#f0eab8] font-bold mb-4">The Challenge:</h3>
                <p className="text-gray-300 italic">"Fragmented identities across cloud and on-premise silos create security gaps and massive administrative overhead."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Brokerage Model</h2>
              <div className="w-20 h-1 bg-[#010534] mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-[#010534] rounded-xl flex items-center justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Directory Sync</h2>
                <p className="text-gray-600 mb-8">Our broker dynamically transforms attributes and claims between different protocols in real-time.</p>
              </div>
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-8 rounded-3xl">
                  <Database className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Attribute Mapping</h4>
                  <p className="text-gray-600 text-sm">Standardize user profiles across disparate systems automatically.</p>
                </div>
                <div className="border border-gray-200 p-8 rounded-3xl">
                  <GitBranch className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Protocol Translation</h4>
                  <p className="text-gray-600 text-sm">Bridge the gap between SAML, LDAP, and OIDC flawlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}