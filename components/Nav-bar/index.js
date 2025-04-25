import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/home" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFLIO", path: "/portfolio" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/images/mechmaven_logo.webp" 
                alt="Mechmaven Logo" 
                className="h-12 sm:h-16 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <ul className="flex space-x-2 lg:space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors
                      ${router.pathname === link.path ? 
                        'text-[#B50303] font-semibold' : 
                        'text-gray-700 hover:text-[#B50303] hover:bg-gray-50'}
                    `}
                    aria-current={router.pathname === link.path ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="ml-4">
              <button 
                onClick={() => router.push('/contact')}
                className="px-4 py-2 lg:px-6 lg:py-3 bg-[#B50303] text-white font-semibold rounded-md 
                  transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 
                  focus:ring-[#B50303] focus:ring-opacity-50"
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#B50303] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B50303]"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium
                ${router.pathname === link.path ? 
                  'bg-[#B50303] text-white' : 
                  'text-gray-700 hover:bg-gray-100 hover:text-[#B50303]'}`}
              aria-current={router.pathname === link.path ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              router.push('/get-started');
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-2 px-4 py-3 bg-[#B50303] text-white font-semibold rounded-md 
              transition-all duration-300 hover:bg-black focus:outline-none focus:ring-2 
              focus:ring-[#B50303] focus:ring-opacity-50"
          >
          Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
