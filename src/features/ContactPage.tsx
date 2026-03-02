import PageLayout from '../components/layout/PageLayout';
import { MapPin, Phone, Mail, Send, Globe, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const offices = [
    {
      city: "Lagos, Nigeria",
      location: "Ikeja",
      address: "ABBA Johnson Crescent, Harmony Enclave Estate, Lagos.",
      phone: "+234-8060-000400",
    },
    {
      city: "Abuja, Nigeria",
      location: "CBD",
      address: "Plot 94, Gwarinpa 1 Life Camp Extension, Life Camp Abuja.",
      phone: "+234 900 765 4321",
    },
    {
      city: "Accra, Ghana",
      location: "Airport Residential",
      address: "9th Floor Emporium Building, Movenpick Hotel Independence Avenue Accra, Ghana.",
      phone: "+233 504957381",
    }
  ];

  return (
    <PageLayout>
      <main className="min-h-screen bg-white pt-20">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="bg-[#010534] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Offices</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We are strategically located across West Africa to provide 
              premium identity solutions and local support.
            </p>
          </div>
        </section>

        {/* --- SECTION 2: OFFICE CARDS (The "Replacement" for the Map) --- */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{office.city}</h3>
                  <p className="text-blue-600 font-medium mb-4">{office.location}</p>
                  <p className="text-gray-600 leading-relaxed mb-8 h-20">
                    {office.address}
                  </p>
                  <div className="pt-6 border-t border-gray-100 flex items-center text-gray-900 font-semibold">
                    <Phone size={18} className="mr-3 text-blue-600" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-blue-600">
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CONNECT & FORM --- */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* Left: General Contact Info */}
              <div className="lg:w-1/2 space-y-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Reach Out Directly</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Prefer email or a direct line? Our central support team handles inquiries 
                    globally and will route you to the correct regional expert.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email Box */}
                  <div className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-5 text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                      <a href="mailto:Info@premiumid.net" className="text-xl font-bold text-gray-900 hover:text-blue-600">
                        Info@premiumid.net
                      </a>
                    </div>
                  </div>

                  {/* General Phone Box */}
                  <div className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-5 text-blue-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Global Support</p>
                      <div className="space-y-1">
                        <p className="text-lg font-bold text-gray-900">NG: +234-8060-000400</p>
                        <p className="text-lg font-bold text-gray-900">GH: +233 24 000 0000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Modernized Form */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-[#010534] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="text-[#f0eab8]" />
                    <h3 className="text-2xl font-bold">Send us a message</h3>
                  </div>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                        <input type="text" className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl focus:bg-white/20 outline-none transition-all placeholder:text-white/30" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                        <input type="email" className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl focus:bg-white/20 outline-none transition-all placeholder:text-white/30" placeholder="john@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                      <textarea rows={4} className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl focus:bg-white/20 outline-none transition-all placeholder:text-white/30" placeholder="Tell us about your project..." />
                    </div>
                    <button className="w-full bg-[#f0eab8] text-[#010534] font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}