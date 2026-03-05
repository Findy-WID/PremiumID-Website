import PageLayout from '../../../components/layout/PageLayout';

export default function OilGasPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#010534] text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Identity Security for Oil & Gas</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect critical infrastructure and secure remote operations with identity governance 
            built for upstream, midstream, and downstream energy companies.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-premium-accent rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Request Demo
            </a>
            <a href="#challenges" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section id="challenges" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Oil & Gas Identity Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Critical Infrastructure Protection</h3>
              <p className="text-gray-600">
                Securing access to pipelines, refineries, and production facilities from cyber threats.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remote Workforce</h3>
              <p className="text-gray-600">
                Managing identity access for offshore rigs, remote sites, and mobile workers with limited connectivity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">OT/ICS Security</h3>
              <p className="text-gray-600">
                Protecting industrial control systems, SCADA networks, and distributed control systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meeting NERC CIP, TSA directives, and international energy security standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contractor Access</h3>
              <p className="text-gray-600">
                Managing identity lifecycle for contractors, service providers, and joint venture partners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain Security</h3>
              <p className="text-gray-600">
                Securing third-party access to logistics, trading platforms, and inventory systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Oil & Gas Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🛢️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">OT/IAM Convergence</h3>
              <p className="text-gray-600 mb-4">
                Unify identity management across corporate IT and operational technology. Secure access to 
                DCS, SCADA, and pipeline control systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Role-based access for control rooms</li>
                <li>✓ Integration with industrial protocols</li>
                <li>✓ Time-based access for maintenance</li>
                <li>✓ OT session monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Remote Site Access</h3>
              <p className="text-gray-600 mb-4">
                Secure identity management for offshore platforms, remote drilling sites, and pipeline 
                stations with offline capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Offline authentication support</li>
                <li>✓ Satellite-friendly protocols</li>
                <li>✓ Mobile identity management</li>
                <li>✓ Site-specific access policies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">NERC CIP Compliance</h3>
              <p className="text-gray-600 mb-4">
                Meet North American Electric Reliability Corporation Critical Infrastructure Protection 
                standards with automated controls.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Electronic access controls</li>
                <li>✓ Physical security integration</li>
                <li>✓ Audit trail generation</li>
                <li>✓ Incident reporting workflows</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Joint Venture Identity</h3>
              <p className="text-gray-600 mb-4">
                Manage complex identity relationships across joint ventures, partnerships, and 
                consortiums with federated identity.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Multi-organization federation</li>
                <li>✓ Partner identity lifecycle</li>
                <li>✓ Cross-entity access control</li>
                <li>✓ JV-specific governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Oil & Gas Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">95%</div>
              <p className="text-gray-600 font-medium">Reduction in OT security incidents</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">70%</div>
              <p className="text-gray-600 font-medium">Faster contractor onboarding</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">100%</div>
              <p className="text-gray-600 font-medium">NERC CIP compliance</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">60%</div>
              <p className="text-gray-600 font-medium">Lower identity management costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#010534] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Protect Your Energy Infrastructure</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading energy companies that trust PremiumID for critical infrastructure security.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-premium-accent font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </a>
        </div>
      </section>
    </PageLayout>
  );
}