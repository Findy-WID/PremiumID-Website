import PageLayout from '../../components/layout/PageLayout';
import { Zap, ScanFace, MousePointerClick, ShieldAlert, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PasswordlessPage() {
  const benefits = [
    {
      title: "Eliminate Phishing",
      description: "Without a password to steal, the most common entry point for hackers is permanently closed.",
      icon: <ShieldAlert className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Zero Friction",
      description: "Users log in using their device's built-in biometrics or hardware keys. No more 'Forgot Password' tickets.",
      icon: <Zap className="text-[#f0eab8]" size={28} />
    },
    {
      title: "Future Proof",
      description: "Leverage WebAuthn and FIDO standards to provide a cutting-edge login experience on any browser.",
      icon: <Globe className="text-[#f0eab8]" size={28} />
    }
  ];

  return (
    <PageLayout>
      <main className="min-h-screen bg-white">
        <section className="bg-[#010534] text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="text-[#f0eab8] font-bold tracking-widest uppercase text-sm">The Future of Access</span>
                <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-bold mt-4 mb-6">Passwordless Login</motion.h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">The most secure password is the one that doesn't exist. Transition to a world where identity is verified by who you are, not what you remember.</p>
              </div>
              <div className="md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-[#f0eab8] font-bold mb-4">The Challenge:</h3>
                <p className="text-gray-300 italic">"Password management costs the average enterprise $70 per user, per year in support and lost productivity."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Modern Authentication</h2>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Biometric Integration</h2>
                <p className="text-gray-600 mb-8">We utilize the secure enclaves already present in your users' hardware to verify identity locally.</p>
              </div>
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-8 rounded-3xl">
                  <ScanFace className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Face & Touch ID</h4>
                  <p className="text-gray-600 text-sm">Seamless integration with Windows Hello, Apple FaceID, and Android Biometrics.</p>
                </div>
                <div className="border border-gray-200 p-8 rounded-3xl">
                  <MousePointerClick className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Magic Links</h4>
                  <p className="text-gray-600 text-sm">Secure, time-sensitive email links for instant access without static credentials.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}