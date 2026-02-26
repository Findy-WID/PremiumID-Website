// src/features/ContactPage.tsx

import PageLayout from '../components/layout/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout>

      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-300 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Address and Contacts
            </h1>
          </div>
        </section>

        {/* Main Content: Map + Info */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Google Map Embed (No API Key Needed) */}
            <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.837348947454!2d37.618!3d55.7305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQzJzQ5LjgiTiAzN8KwMzcnMDQuOCJF!5e0!3m2!1sen!2sru!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Identity Blitz Office - Pyatnitskaya st., 73, Moscow"
              />
            </div>

            {/* Right: Contact Info + Feedback */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Contacts
                </h2>
                <address className="not-italic text-lg text-gray-700 space-y-3">
                  <p className="font-medium">Pyatnitskaya st., 73</p>
                  <p>Moscow, 115054</p>
                  <p>Russian Federation</p>
                  <p className="mt-4">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+74993221404" className="text-blue-600 hover:underline">
                      +7 (499) 322-14-04
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@idblitz.com" className="text-blue-600 hover:underline">
                      Info@premiumid.net
                    </a>
                  </p>
                </address>
              </div>

              {/* Feedback / Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Send us your questions or suggestions — we'll get back to you shortly.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}