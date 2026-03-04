import PageLayout from '../../components/layout/PageLayout';
import { ShieldCheck, Smartphone, Fingerprint, Key, BellRing } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MultiFactorPage() {
  const benefits = [
    {
      title: "Adaptive Authentication",
      description: "Our system analyzes risk factors like location and device health before choosing the right MFA challenge.",
      icon: <Fingerprint className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Frictionless UX",
      description: "Push notifications and biometrics allow users to verify their identity in seconds without typing codes.",
      icon: <BellRing className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Compliance Ready",
      description: "Meet global security standards (GDPR, HIPAA, PCI-DSS) by enforcing mandatory multi-layered defense.",
      icon: <ShieldCheck className="text-[#f0eab8]" size={28} />
    }
  ];

  return (
    <PageLayout>
      <main className="min-h-screen bg-white">
        <section className="bg-[#010534] text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="text-[#f0eab8] font-bold tracking-widest uppercase text-sm">Security Layer</span>
                <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-bold mt-4 mb-6">Multi-Factor Authentication</motion.h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">Move beyond simple passwords. Protect your sensitive data with a dynamic second layer of defense that evolves with modern threats.</p>
              </div>
              <div className="md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-[#f0eab8] font-bold mb-4">The Challenge:</h3>
                <p className="text-gray-300 italic">"80% of data breaches involve compromised passwords. A single point of failure is no longer an option for modern enterprises."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Advanced Methods</h2>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">MFA Channels</h2>
                <p className="text-gray-600 mb-8">Premium ID supports a wide range of secondary factors to ensure every user has a secure way to connect.</p>
              </div>
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-8 rounded-3xl">
                  <Smartphone className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Mobile Push & OTP</h4>
                  <p className="text-gray-600 text-sm">Secure one-tap approval via mobile app or time-based codes (TOTP).</p>
                </div>
                <div className="border border-gray-200 p-8 rounded-3xl">
                  <Key className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Hardware Tokens</h4>
                  <p className="text-gray-600 text-sm">Full support for FIDO2 and Yubikey devices for maximum physical security.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}