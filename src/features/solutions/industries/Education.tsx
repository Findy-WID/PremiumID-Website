import PageLayout from '../../../components/layout/PageLayout';
import { Link } from 'react-router-dom';

export default function EducationPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#010534] text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Identity Security for Higher Education</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Simplify student and faculty access while protecting research data and meeting compliance 
            for universities and K-12 schools.
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education Identity Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Turnover</h3>
              <p className="text-gray-600">
                Managing thousands of students enrolling and graduating each semester, plus faculty transitions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600">
                Protecting student privacy and educational records in accordance with federal regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Data Protection</h3>
              <p className="text-gray-600">
                Securing sensitive research data and intellectual property across multi-institution collaborations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">BYOD & Mobile</h3>
              <p className="text-gray-600">
                Supporting diverse devices and platforms for modern, mobile-first learning environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Sprawl</h3>
              <p className="text-gray-600">
                Managing access to SIS, LMS, library systems, and hundreds of educational technology tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Constraints</h3>
              <p className="text-gray-600">
                Delivering enterprise security with limited IT resources and educational budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Student Lifecycle Management</h3>
              <p className="text-gray-600 mb-4">
                Automated provisioning from admission through graduation with self-service password reset. 
                Onboard 50,000+ students in days, not weeks.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Automated account creation from SIS</li>
                <li>✓ Self-service enrollment and password reset</li>
                <li>✓ Automatic deactivation after graduation</li>
                <li>✓ Alumni account conversion</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600 mb-4">
                Automatic access controls based on student privacy rules and directory information restrictions. 
                Ensure compliance across all systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Directory information restrictions</li>
                <li>✓ Student privacy flag enforcement</li>
                <li>✓ Audit trails for student record access</li>
                <li>✓ Parent/guardian access management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Research Data Protection</h3>
              <p className="text-gray-600 mb-4">
                Secure access to sensitive research data with collaboration controls for multi-institution projects. 
                Protect intellectual property and grant-funded research.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Research group access management</li>
                <li>✓ External collaborator provisioning</li>
                <li>✓ IRB and compliance integration</li>
                <li>✓ Data classification and protection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Single Sign-On for EdTech</h3>
              <p className="text-gray-600 mb-4">
                SSO integration with Canvas, Blackboard, Google Workspace, Microsoft 365, and 1000+ educational apps. 
                One login for the entire digital campus.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Canvas, Blackboard, Moodle, D2L certified</li>
                <li>✓ Google Workspace & Microsoft 365 sync</li>
                <li>✓ Library and research database integration</li>
                <li>✓ Mobile app support (iOS, Android)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">EdTech Integrations</h2>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Native integration with leading educational platforms and systems
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Canvas LMS</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Blackboard Learn</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Google Workspace</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Microsoft 365</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Moodle</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Banner/Ellucian</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">PeopleSoft Campus</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Workday Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">50,000+</div>
              <p className="text-gray-600 font-medium">Students provisioned in days</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">100%</div>
              <p className="text-gray-600 font-medium">compliance</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">75%</div>
              <p className="text-gray-600 font-medium">Reduction in password reset tickets</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">200+</div>
              <p className="text-gray-600 font-medium">Campus apps with SSO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Universities Should Choose PremiumID</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Student Onboarding</h3>
                <p className="text-gray-600">Provision thousands of new students automatically from your SIS during peak enrollment</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Self-Service Portal</h3>
                <p className="text-gray-600">Students manage their own passwords and accounts, reducing IT support burden</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless EdTech Access</h3>
                <p className="text-gray-600">Single sign-on to Canvas, Google, Microsoft, and all campus applications</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research Collaboration</h3>
                <p className="text-gray-600">Secure external researcher access with automatic expiration and compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#010534] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Transform Your Campus Digital Experience</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading universities and K-12 schools using PremiumID for secure, seamless access.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-whiteaccent font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}