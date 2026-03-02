// src/components/Footer.tsx
import type { FC } from "react";
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main content area */}
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - CONTACTS */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-100">
              CONTACTS
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>+234-8060-000400</p>
              <p className="mt-2">
                <b>5, Aba Johnson Crescent, Harmony Enclave, Off Adeniyi Jones</b>
                <br />
                Lagos, Nigeria.
              </p>
              <p className="mt-4">
                <a href="mailto:info@idblitz.com" className="hover:text-white transition-colors">
                  Info@premiumid.net
                </a>
              </p>
            </address>
          </div>

          {/* Column 2 - PRODUCTS */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-100">
              PRODUCTS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Premium Identity Provider
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Premium Smart Card Plugin
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - SOLUTIONS */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-100">
              SOLUTIONS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/solutions/single-sign-on" className="hover:text-white transition-colors">
                  Single Sign-On
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Multifactorless
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Passwordless
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Identity Brokering
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - COMPANY */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-100">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Social icons + separator */}
        <div className="mt-12 border-t border-gray-800 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Social icons row */}
            {/* <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">YouTube</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">Telegram</span>
              </a>
            </div> */}

            {/* Language switcher */}
            <div className="text-sm">
              <a href="#" className="text-gray-300 hover:text-white">
                English
              </a>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div className="mt-10 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-between">
            <p>PremiumID © 2026</p>
            <div className="mt-4 flex items-center justify-center gap-6 sm:mt-0">
              <img src="/premium-logo.png" alt="PremiumID logo" className="w-8 h-9"/>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy and Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;