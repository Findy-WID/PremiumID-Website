// src/features/Company.tsx
import PageLayout from '../components/layout/PageLayout';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardHover = {
  rest: { scale: 1, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" },
  hover: {
    scale: 1.04,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }, // TS-safe bezier ≈ easeOut
  },
};

export default function CompanyPage() {
  return (
    <PageLayout>

      <main className="min-h-screen bg-gray-50">
        {/* Gradient Hero - Image left, Text right */}
        <section className="m-5 relative overflow-hidden bg-gradient-to-br from-blue-300 via-blue-700 to-cyan-300 text-white">
          {/* Subtle overlay if needed – adjust opacity */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left: Image */}
              <motion.div 
                variants={fadeInUp}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]"
              >
                <img
                  src="/blitzhero.jpg"
                  alt="Digital network connections representing secure identity bridges"
                  className="w-full h-full object-cover"
                />
                {/* Optional subtle brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </motion.div>

              {/* Right: Text content */}
              <motion.div variants={fadeInUp} className="space-y-6 lg:pl-8">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
                  PREMIUM ID
                </h1>

                <p className="text-base sm:text-lg font-medium uppercase tracking-wide opacity-90">
                  Building bridges between users and applications
                </p>

                <div className="space-y-4 text-base sm:text-lg opacity-95">
                  <p>
                    We specialize in high-performance software for corporate identity and access management — delivering secure, scalable solutions for authentication, authorization, and auditing in complex enterprise environments.
                  </p>
                  <p>
                    Our flagship product, <strong>Blitz Identity Provider</strong>, powers seamless and resilient identity services for organizations handling millions of users and billions of transactions.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Management Cards - smaller & rounded */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
            >
              Our Management
            </motion.h2>
             <p className="opacity-90 mb-10 text-center">
                  Meet our experienced leadership driving secure, high-performance identity solutions.
              </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
            >
              {/* Mikhail Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                className="group"
              >
                <motion.div
                  variants={cardHover}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-md h-full flex flex-col transition-shadow"
                >
                  <div className="pt-8 flex justify-center">
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-blue-200/60 shadow-md">
                      <img
                        src="/vanin.jpeg"
                        alt="Mikhail Vanin"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="p-6 text-center flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Chima Uzomba</h3>
                    <p className="text-blue-600 font-medium mt-1">Chief Revenue Officer</p>

                    <blockquote className="mt-5 italic text-gray-700 text-sm flex-grow">
                      «We make highly loaded and reactive system of identification and authentication with millions of users
                      and billions of transactions»
                    </blockquote>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                      <a href="mailto:mvanin@idblitz.com" className="hover:text-blue-700 transition-colors">
                        📧 mvanin@idblitz.com
                      </a>
                      <a href="#" className="hover:text-blue-700 transition-colors">
                        🔵 MikhailVanin
                      </a>
                      <a href="#" className="hover:text-blue-700 transition-colors">
                        in mvanin
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Kirill Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                className="group"
              >
                <motion.div
                  variants={cardHover}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-md h-full flex flex-col transition-shadow"
                >
                  <div className="pt-8 flex justify-center">
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-blue-200/60 shadow-md">
                      <img
                        src="/kirill.jpeg"
                        alt="Kirill Gavrilov"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="p-6 text-center flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Kirill Gavrilov</h3>
                    <p className="text-blue-600 font-medium mt-1">Chief Operating Officer</p>

                    <blockquote className="mt-5 italic text-gray-700 text-sm flex-grow">
                      «Our experienced team is aimed at developing software that solves real problems»
                    </blockquote>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                      <a href="mailto:kgavrilov@idblitz.com" className="hover:text-blue-700 transition-colors">
                        📧 kgavrilov@idblitz.com
                      </a>
                      <a href="#" className="hover:text-blue-700 transition-colors">
                        🔵 KirillGavrilov
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}