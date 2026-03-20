import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: string) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);
  
  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-premium-dark'
      }`}
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img src="/premium-logo.png" alt="PremiumID Logo" />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            PremiumID
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Products Dropdown - STAYS OPEN */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('products')}>
            <button 
              className={`flex items-center gap-1 font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-premium-accent' : 'text-white hover:text-premium-accent'
              }`}
            >
              Products <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white text-gray-800 rounded-lg shadow-xl p-6 border border-gray-200">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/products/provider" 
                      className="block text-gray-700 hover:text-premium-accent font-medium transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      PremiumID Provider
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Complete IAM solution</p>
                  </li>
                  <li className="pt-3 border-t border-gray-200">
                    <Link 
                      to="/products/smartcard" 
                      className="block text-gray-700 hover:text-premium-accent font-medium transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      PremiumID Smart Card Plugin
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Hardware authentication</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Solutions Dropdown - STAYS OPEN */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')}>
            <button 
              className={`flex items-center gap-1 font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-premium-accent' : 'text-white hover:text-premium-accent'
              }`}
            >
              Solutions <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'solutions' && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white text-gray-800 rounded-lg shadow-xl p-6 border border-gray-200"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-2 gap-8">

                  {/* Identity & Auth */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Identity & Auentication</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link 
                          to="/solutions/single-sign-on" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Single Sign-On
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/multifactor" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Multi-Factor Authentication
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/passwordless" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Passwordless
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/identitybrokering" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Identity Brokering
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Industry */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Industrial Applications</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link 
                          to="/solutions/industry/financial-services" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Financial Services
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/industry/healthcare" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/industry/manufacturing" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Manufacturing
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/industry/government" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Government
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/industry/oil-gas" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Oil and Gas
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/industry/education" 
                          className="text-gray-700 hover:text-premium-accent transition-colors" 
                          onClick={() => setOpenDropdown(null)}
                        >
                          Education
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/company"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-premium-accent' : 'text-white hover:text-premium-accent'
            }`}
          >
            Company
          </Link>

          <Link
            to="/contact"
            className="px-6 py-2 bg-premium-accent hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
          <div className="mb-3">
            <button
              onClick={() => toggleMobileDropdown('products')}
              className="w-full flex items-center justify-between text-gray-700 hover:text-premium-accent font-medium py-2"
            >
              <span>Products</span>
              <span className={`text-xs transition-transform ${mobileDropdown === 'products' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {mobileDropdown === 'products' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-premium-accent">
                <Link to="/products/provider" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  PremiumID Provider
                </Link>
                <Link to="/products/smart-card" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  PremiumID Smart Card Plugin
                </Link>
              </div>
            )}
          </div>

          <div className="mb-3">
            <button
              onClick={() => toggleMobileDropdown('solutions')}
              className="w-full flex items-center justify-between text-gray-700 hover:text-premium-accent font-medium py-2"
            >
              <span>Solutions</span>
              <span className={`text-xs transition-transform ${mobileDropdown === 'solutions' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {mobileDropdown === 'solutions' && (
              <div className="pl-4 mt-2 border-l-2 border-premium-accent">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider py-2">Identity & Authentication</p>
                <div className="space-y-2 mb-3">
                  <Link to="/solutions/single-sign-on" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Single Sign-On</Link>
                  <Link to="/solutions/multifactor" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Multi-Factor Authentication</Link>
                  <Link to="/solutions/passwordless" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Passwordless</Link>
                  <Link to="/solutions/identitybrokering" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Identity Brokering</Link>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider py-2 border-t border-gray-100">Industry Applications</p>
                <div className="space-y-2">
                  <Link to="/solutions/industry/financial-services" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Financial Services</Link>
                  <Link to="/solutions/industry/healthcare" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Healthcare</Link>
                  <Link to="/solutions/industry/manufacturing" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Manufacturing</Link>
                  <Link to="/solutions/industry/government" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Government</Link>
                  <Link to="/solutions/industry/oil-gas" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Oil and Gas</Link>
                  <Link to="/solutions/industry/education" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>Education</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/company" className="block text-gray-700 hover:text-premium-accent font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Company</Link>
          <Link to="/contact" className="block mt-4 text-center px-6 py-2 bg-premium-accent hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}