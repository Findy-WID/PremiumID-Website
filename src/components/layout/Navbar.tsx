import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-premium-dark'
      }`}
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

          {/* Products Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('products')} 
            onMouseLeave={handleMouseLeave}
          >
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
                    >
                      PremiumID Provider
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Complete IAM solution</p>
                  </li>
                  <li className="pt-3 border-t border-gray-200">
                    <Link 
                      to="/products/smart-card" 
                      className="block text-gray-700 hover:text-premium-accent font-medium transition-colors"
                    >
                      PremiumID Smart Card Plugin
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Hardware authentication</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('solutions')} 
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`flex items-center gap-1 font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-premium-accent' : 'text-white hover:text-premium-accent'
              }`}
            >
              Solutions <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white text-gray-800 rounded-lg shadow-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">By Industry</h4>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <li>
                    <Link to="/solutions/financial-services" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Financial Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/healthcare" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/manufacturing" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/government" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Government
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/oil-gas" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Oil and Gas
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/utilities" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Utilities
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/education" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/retail" className="text-gray-700 hover:text-premium-accent transition-colors">
                      Retail
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`flex items-center gap-1 font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-premium-accent' : 'text-white hover:text-premium-accent'
              }`}
            >
              Resources <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white text-gray-800 rounded-lg shadow-xl p-6 border border-gray-200">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/resources/blog" 
                      className="block text-gray-700 hover:text-premium-accent font-medium transition-colors"
                    >
                      Blog
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Latest insights and news</p>
                  </li>
                  <li className="pt-3 border-t border-gray-200">
                    <Link 
                      to="/resources/documentation" 
                      className="block text-gray-700 hover:text-premium-accent font-medium transition-colors"
                    >
                      Documentation
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Technical guides and docs</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Company Link */}
          <Link
            to="/company"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-premium-accent' : 'text-white hover:text-premium-accent'
            }`}
          >
            Company
          </Link>

          {/* Contact CTA */}
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

      {/* Mobile Menu - FIXED! */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
          
          {/* Products Dropdown */}
          <div className="mb-3">
            <button
              onClick={() => toggleMobileDropdown('products')}
              className="w-full flex items-center justify-between text-gray-700 hover:text-premium-accent font-medium py-2"
            >
              <span>Products</span>
              <span className={`text-xs transition-transform ${mobileDropdown === 'products' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {mobileDropdown === 'products' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-premium-accent">
                <Link 
                  to="/products/provider" 
                  className="block text-sm text-gray-600 hover:text-premium-accent py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PremiumID Provider
                </Link>
                <Link 
                  to="/products/smart-card" 
                  className="block text-sm text-gray-600 hover:text-premium-accent py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PremiumID Smart Card Plugin
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="mb-3">
            <button
              onClick={() => toggleMobileDropdown('solutions')}
              className="w-full flex items-center justify-between text-gray-700 hover:text-premium-accent font-medium py-2"
            >
              <span>Solutions</span>
              <span className={`text-xs transition-transform ${mobileDropdown === 'solutions' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {mobileDropdown === 'solutions' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-premium-accent">
                <Link to="/solutions/financial-services" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Financial Services
                </Link>
                <Link to="/solutions/healthcare" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Healthcare
                </Link>
                <Link to="/solutions/manufacturing" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Manufacturing
                </Link>
                <Link to="/solutions/government" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Government
                </Link>
                <Link to="/solutions/oil-gas" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Oil and Gas
                </Link>
                <Link to="/solutions/utilities" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Utilities
                </Link>
                <Link to="/solutions/education" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Education
                </Link>
                <Link to="/solutions/retail" className="block text-sm text-gray-600 hover:text-premium-accent py-1" onClick={() => setMobileMenuOpen(false)}>
                  Retail
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="mb-3">
            <button
              onClick={() => toggleMobileDropdown('resources')}
              className="w-full flex items-center justify-between text-gray-700 hover:text-premium-accent font-medium py-2"
            >
              <span>Resources</span>
              <span className={`text-xs transition-transform ${mobileDropdown === 'resources' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {mobileDropdown === 'resources' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-premium-accent">
                <Link 
                  to="/resources/blog" 
                  className="block text-sm text-gray-600 hover:text-premium-accent py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/resources/documentation" 
                  className="block text-sm text-gray-600 hover:text-premium-accent py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
              </div>
            )}
          </div>

          {/* Company Link */}
          <Link 
            to="/company" 
            className="block text-gray-700 hover:text-premium-accent font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Company
          </Link>

          {/* Contact Link */}
          <Link 
            to="/contact" 
            className="block mt-4 text-center px-6 py-2 bg-premium-accent hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}