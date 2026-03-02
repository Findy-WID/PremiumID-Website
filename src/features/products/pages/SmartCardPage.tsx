import PageLayout from '../../../components/layout/PageLayout';

export default function SmartCardPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-premium-dark via-blue-900 to-premium-primary text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className='text-gray-400 mb-5 text-m'>
            Passwordless hardware authentication with smart cards and security keys. 
            FIDO2, PIV, and CAC compliant for high-security environments.
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">PremiumID Smart Card Plugin</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Do your users have to sign web forms or uploaded documents using their hardware tokens (smartcard or USB devices)? 
            PremiumID Smart Card Plugin allows a web page to obtain device properties and to make digital signature. 
            If your website requires the ability to strong authenticate users using their hardware keys, our solution allows the browser to retrieve data about the certificate and lets user sign the authentication challenge.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-premium-accent rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Request Demo
            </a>
            <a href="#features" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              View Features
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Hardware Authentication</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🪪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">PIV/CAC Cards</h3>
              <p className="text-gray-600 mb-4">
                Full support for Personal Identity Verification (PIV) and Common Access Card (CAC) standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Government & military compliant</li>
                <li>✓ HSPD-12 certified</li>
                <li>✓ X.509 certificate validation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">FIDO2 & WebAuthn</h3>
              <p className="text-gray-600 mb-4">
                Modern passwordless authentication using FIDO2 security keys and WebAuthn standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ YubiKey compatible</li>
                <li>✓ Phishing-resistant</li>
                <li>✓ Cross-platform support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Certificate-Based Auth</h3>
              <p className="text-gray-600 mb-4">
                X.509 certificate validation and management for both user and device certificates.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Mutual TLS authentication</li>
                <li>✓ Certificate lifecycle management</li>
                <li>✓ PKI integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">👆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Biometric Integration</h3>
              <p className="text-gray-600 mb-4">
                Combine smart cards with fingerprint or facial recognition for multi-modal authentication.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Match-on-card technology</li>
                <li>✓ Windows Hello support</li>
                <li>✓ Enhanced privacy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔌</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Offline Authentication</h3>
              <p className="text-gray-600 mb-4">
                Authenticate users even without network connectivity. Ideal for remote locations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Air-gapped environments</li>
                <li>✓ Cached credentials</li>
                <li>✓ Mobile workforce support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">USB & NFC Support</h3>
              <p className="text-gray-600 mb-4">
                Support for both contact (USB) and contactless (NFC) smart card readers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Mobile device compatible</li>
                <li>✓ Desktop readers</li>
                <li>✓ Tap-to-authenticate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Compatible Devices</h2>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Works with industry-leading smart cards and security keys
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">YubiKey 5 Series</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Google Titan</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">PIV/CAC Cards</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">HID ActivID</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Gemalto (Thales)</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Identiv uTrust</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Feitian ePass</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">RSA SecurID</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Smart Cards?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Block 99.9% of Phishing</h3>
                <p className="text-gray-600">Hardware-based authentication cannot be phished or intercepted</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Government Compliant</h3>
                <p className="text-gray-600">Meets NIST 800-63, HSPD-12, and FICAM requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Passwordless Security</h3>
                <p className="text-gray-600">Eliminate password-related breaches and vulnerabilities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Access</h3>
                <p className="text-gray-600">Secure authentication for remote and mobile workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-premium-dark via-premium-primary to-premium-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Passwordless Security?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how PremiumID Smart Card Plugin can eliminate passwords in your organization.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-premium-primary font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </a>
        </div>
      </section>
    </PageLayout>
  );
}