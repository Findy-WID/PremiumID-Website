import { useState } from 'react';
import PageLayout from '../../../components/layout/PageLayout';
import DemoModal from '../../../components/ui/DemoModal';

export default function ManufacturingPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#010534] text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Identity Security for Manufacturing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect intellectual property, secure supply chain access, and enable Industry 4.0 
            with enterprise identity governance for manufacturers.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setDemoOpen(true)} className="px-8 py-3 bg-premium-accent rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Request Demo
            </button>
            <a href="#challenges" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section id="challenges" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Manufacturing Identity Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intellectual Property Theft</h3>
              <p className="text-gray-600">
                Protecting proprietary designs, formulas, and manufacturing processes from unauthorized access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain Access</h3>
              <p className="text-gray-600">
                Managing identity access for suppliers, contractors, and partners across global supply chains.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">OT/IoT Security</h3>
              <p className="text-gray-600">
                Securing access to operational technology, industrial control systems, and connected machinery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meeting NIST SP 800-82, IEC 62443, and other manufacturing security standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shift-Based Access</h3>
              <p className="text-gray-600">
                Managing time-based access for production shifts, maintenance windows, and temporary workers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">M&A Integration</h3>
              <p className="text-gray-600">
                Rapidly integrating identities during mergers, acquisitions, and facility expansions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Manufacturing Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">OT/IAM Integration</h3>
              <p className="text-gray-600 mb-4">
                Unify identity management across IT and operational technology. Secure access to PLCs, 
                SCADA systems, and industrial control networks.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Role-based access for control systems</li>
                <li>✓ Integration with Active Directory and LDAP</li>
                <li>✓ Time-based access for maintenance windows</li>
                <li>✓ Session recording for OT systems</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Supply Chain Identity</h3>
              <p className="text-gray-600 mb-4">
                Securely manage identities for suppliers, contractors, and partners with just-in-time access 
                to specific systems and data.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Supplier portal integration</li>
                <li>✓ Time-limited vendor access</li>
                <li>✓ Automated deprovisioning</li>
                <li>✓ Federated identity with partners</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">IP Protection</h3>
              <p className="text-gray-600 mb-4">
                Safeguard trade secrets and proprietary manufacturing processes with granular access controls 
                and continuous monitoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Data loss prevention integration</li>
                <li>✓ Watermarking for design documents</li>
                <li>✓ Access certification for R&D</li>
                <li>✓ Real-time threat detection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Workforce Lifecycle</h3>
              <p className="text-gray-600 mb-4">
                Automate identity management for employees, contractors, and temporary workers across 
                multiple facilities and shifts.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Shift-based access policies</li>
                <li>✓ HR system integration</li>
                <li>✓ Contractor onboarding/offboarding</li>
                <li>✓ Multi-facility identity management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Manufacturing Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">90%</div>
              <p className="text-gray-600 font-medium">Reduction in IP exposure risk</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">75%</div>
              <p className="text-gray-600 font-medium">Faster supplier onboarding</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">100%</div>
              <p className="text-gray-600 font-medium">OT security compliance</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">50%</div>
              <p className="text-gray-600 font-medium">Fewer security incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#010534] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Secure Your Manufacturing Operations</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders using PremiumID to protect intellectual property and enable Industry 4.0.
          </p>
          <button onClick={() => setDemoOpen(true)} className="inline-block px-10 py-4 bg-white text-premium-accent font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </section>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} industry="manufacturing" />
    </PageLayout>
  );
}