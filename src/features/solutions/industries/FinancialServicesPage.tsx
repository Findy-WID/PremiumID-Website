import PageLayout from '../../../components/layout/PageLayout';
import { Link } from 'react-router-dom';

export default function FinancialServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#010534] text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Identity Security for Financial Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect customer data and meet regulatory requirements with enterprise identity governance 
            built for banking, insurance, and fintech.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-premium-accent rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Request Demo
            </Link>
            <a href="#challenges" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section id="challenges" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Industry Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Account Takeover & Fraud</h3>
              <p className="text-gray-600">
                Protecting customer accounts from credential theft, phishing, and social engineering attacks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meeting SOX, PCI-DSS, GLBA, and FFIEC requirements with continuous audit readiness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privileged Access</h3>
              <p className="text-gray-600">
                Managing and monitoring high-risk access to core banking systems and financial data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Third-Party Risk</h3>
              <p className="text-gray-600">
                Securing vendor and partner access to sensitive systems while maintaining compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Banking Security</h3>
              <p className="text-gray-600">
                Protecting mobile apps, online banking, and API ecosystems from unauthorized access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legacy System Integration</h3>
              <p className="text-gray-600">
                Modernizing authentication for mainframes, COBOL systems, and legacy infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Identity (CIAM)</h3>
              <p className="text-gray-600 mb-4">
                Secure customer login with adaptive MFA, risk-based authentication, and fraud detection. 
                Seamless experience across mobile banking, web, and in-branch systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Behavioral biometrics and device fingerprinting</li>
                <li>✓ Step-up authentication for high-risk transactions</li>
                <li>✓ Real-time fraud detection with AI/ML</li>
                <li>✓ Social login and account recovery</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Privileged Access Management</h3>
              <p className="text-gray-600 mb-4">
                Control and monitor access to core banking systems, trading platforms, and financial databases 
                with session recording and approval workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Just-in-time access to critical systems</li>
                <li>✓ Session recording and monitoring</li>
                <li>✓ Separation of duties enforcement</li>
                <li>✓ Emergency access with full audit trails</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated access reviews, audit trails, and compliance reporting for SOX, PCI-DSS, GLBA, 
                and banking regulations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Pre-built compliance templates (SOX, PCI-DSS)</li>
                <li>✓ Automated access certification</li>
                <li>✓ Real-time compliance dashboards</li>
                <li>✓ Audit-ready documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">API Security</h3>
              <p className="text-gray-600 mb-4">
                OAuth 2.0 and OpenID Connect for secure API access in digital banking, 
                fintech applications, and partner integrations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ OAuth 2.0 / OpenID Connect</li>
                <li>✓ API gateway integration</li>
                <li>✓ Token management and lifecycle</li>
                <li>✓ Rate limiting and threat protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Results That Matter</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">95%</div>
              <p className="text-gray-600 font-medium">Reduction in account takeover fraud</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">50%</div>
              <p className="text-gray-600 font-medium">Faster compliance audit completion</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">70%</div>
              <p className="text-gray-600 font-medium">Faster customer onboarding</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Real-time visibility into access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#010534]  text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Secure Your Financial Institution</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how leading banks and fintech companies trust PremiumID to protect their customers.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-premium-accent font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}