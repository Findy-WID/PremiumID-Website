import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Mail, Send, Globe, MessageSquare } from 'lucide-react';
import CoverageMap from '../components/ui/CoverageMap';

interface ContactFormData { name: string; email: string; message: string; }
interface ContactFormErrors { name?: string; email?: string; message?: string; }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): ContactFormErrors => {
    const e: ContactFormErrors = {};
    if (!formData.name.trim()) e.name = 'Name is required.';
    else if (!/^[A-Za-z\s'-]+$/.test(formData.name)) e.name = 'Name must contain letters only.';
    if (!formData.email.trim()) e.email = 'Email is required.';
    else if (!emailRegex.test(formData.email)) e.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' && /\d/.test(value)) return;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof ContactFormErrors]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const ve = validate();
  if (Object.keys(ve).length > 0) { setErrors(ve); return; }
  setIsSubmitting(true);
  
  try {
    const res = await fetch('https://formsubmit.co/info@premiumid.net', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,        // ← Single name
        email: formData.email,
        message: formData.message,
        _subject: 'New Contact Request from PremiumID.net',
        _template: 'table',
      }),
    });
    
    if (res.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setSubmitStatus('error');
    }
  } catch {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <PageLayout>
      <main className="min-h-screen bg-white pt-20">

        {/* HERO WITH MAP */}
        <section className="bg-[#010534] text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header Text */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Serving Organizations Across Africa &amp; the Middle East
              </h1>
              <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto">
                PremiumID is trusted by enterprises across two continents. Wherever you are,
                we're here to secure your identity infrastructure.
              </p>
            </div>
            
            {/* Map - Now inside hero */}
            <CoverageMap />
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              <div className="lg:w-1/2 space-y-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Reach Out Directly</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Send us a mail or visit any of our company addresses! Our support team is on standby to handles inquiries
                    globally and route you to the right regional expert.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-5 text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                      <a href="mailto:Sales@premiumid.net" className="text-xl font-bold text-gray-900 hover:text-blue-600">
                        Sales@premiumid.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-5 text-blue-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Company Addresses</p>
                      <div className="space-y-1">
                        <p className="text-lg font-bold text-gray-900">DMCC, #1604 Fortune Executive Tower, Cluster T, JLT, Dubai, U.A.E.</p>
                        <p className="text-lg font-bold text-gray-900">5, Abba Johnson Crescent, Harmony Enclave, Off Adeniyi Jones, Ikeja, Lagos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-[#010534] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="text-[#f0eab8]" />
                    <h3 className="text-2xl font-bold">Send us a message</h3>
                  </div>
                  {submitStatus === 'success' ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#f0eab8] text-lg font-semibold">Message sent successfully!</p>
                      <p className="text-gray-400 text-sm mt-2">We'll get back to you soon.</p>
                      <button onClick={() => setSubmitStatus('idle')}
                        className="mt-6 text-sm text-gray-400 hover:text-white underline">
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-300 ml-1">Name *</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange}
                            className={`w-full px-5 py-4 bg-white/10 border rounded-2xl focus:bg-white/20 outline-none transition-all placeholder:text-white/30 ${errors.name ? 'border-red-400' : 'border-white/10'}`}
                            placeholder="John Doe" />
                          {errors.name && <p className="text-xs text-red-400 ml-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-300 ml-1">Email *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange}
                            className={`w-full px-5 py-4 bg-white/10 border rounded-2xl focus:bg-white/20 outline-none transition-all placeholder:text-white/30 ${errors.email ? 'border-red-400' : 'border-white/10'}`}
                            placeholder="john@email.com" />
                          {errors.email && <p className="text-xs text-red-400 ml-1">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300 ml-1">Message *</label>
                        <textarea rows={4} name="message" value={formData.message} onChange={handleChange}
                          className={`w-full px-5 py-4 bg-white/10 border rounded-2xl focus:bg-white/20 outline-none transition-all placeholder:text-white/30 ${errors.message ? 'border-red-400' : 'border-white/10'}`}
                          placeholder="Tell us about your project..." />
                        {errors.message && <p className="text-xs text-red-400 ml-1">{errors.message}</p>}
                      </div>
                      {submitStatus === 'error' && (
                        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                      )}
                      <button type="submit" disabled={isSubmitting}
                        className="w-full bg-[#f0eab8] text-[#010534] font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                        <Send size={20} />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PageLayout>
  );
}