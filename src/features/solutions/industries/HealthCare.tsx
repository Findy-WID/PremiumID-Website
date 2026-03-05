import PageLayout from '../../../components/layout/PageLayout';

export default function HealthcarePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#accent text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">HIPAA-Compliant Identity Security for Healthcare</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect patient data and streamline clinical workflows with identity governance designed 
            for hospitals, clinics, and health systems.
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Healthcare Identity Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
              <p className="text-gray-600">
                Protecting PHI and ensuring minimum necessary access across all systems and users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Access</h3>
              <p className="text-gray-600">
                Providing instant access to patient records in life-or-death situations while maintaining audit trails.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Temporary Staff</h3>
              <p className="text-gray-600">
                Managing contractors, locums, and traveling clinicians with varying access needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Device Security</h3>
              <p className="text-gray-600">
                Securing access from workstations on wheels, tablets, and medical IoT devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">EHR Integration</h3>
              <p className="text-gray-600">
                Seamless integration with Epic, Cerner, Meditech, and other healthcare IT systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Privacy</h3>
              <p className="text-gray-600">
                Preventing unauthorized access to VIP records and sensitive patient information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Healthcare Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Break-Glass Access</h3>
              <p className="text-gray-600 mb-4">
                Emergency access to patient records with full audit trails and automatic notification 
                to compliance teams. Life-saving access without compromising security.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Instant emergency access in critical situations</li>
                <li>✓ Automatic logging and compliance alerts</li>
                <li>✓ Post-access review workflows</li>
                <li>✓ Customizable break-glass policies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Role-Based Clinical Access</h3>
              <p className="text-gray-600 mb-4">
                Automatically assign access based on department, specialty, and patient assignments. 
                Dynamic access that follows care team relationships.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Physician, nurse, and staff role templates</li>
                <li>✓ Patient-provider relationship mapping</li>
                <li>✓ Department-based access control</li>
                <li>✓ Temporary privilege elevation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">HIPAA Audit & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Real-time monitoring, automated compliance reporting, and minimum necessary access enforcement. 
                Pass HIPAA audits with confidence.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Continuous HIPAA compliance monitoring</li>
                <li>✓ Automated audit trail generation</li>
                <li>✓ Access certification workflows</li>
                <li>✓ Breach detection and alerting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">EHR/EMR Integration</h3>
              <p className="text-gray-600 mb-4">
                Native integration with Epic, Cerner, Meditech, Allscripts, and other healthcare systems. 
                Single sign-on across all clinical applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Epic, Cerner, Meditech certified</li>
                <li>✓ HL7 and FHIR API support</li>
                <li>✓ SSO for clinical workflows</li>
                <li>✓ Workstation on wheels (WoW) support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Healthcare Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">100%</div>
              <p className="text-gray-600 font-medium">HIPAA audit readiness</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">60%</div>
              <p className="text-gray-600 font-medium">Faster clinician onboarding</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">Zero</div>
              <p className="text-gray-600 font-medium">Unauthorized access incidents</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-accent mb-2">40%</div>
              <p className="text-gray-600 font-medium">Reduction in compliance costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#010534] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Protect Patient Data with Confidence</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading health systems using PremiumID for HIPAA-compliant identity security.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-premium-accent font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </a>
        </div>
      </section>
    </PageLayout>
  );
}