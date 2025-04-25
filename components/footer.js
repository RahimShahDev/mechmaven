import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#2A2929] text-white">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
        {/* Logo & Description */}
        <div className="md:flex md:flex-col md:items-center md:justify-center w-full md:w-1/2 md:mx-auto text-center ">
  <a href="https://mechmaven.com/" className="inline-block mb-4">
    <img
      src="https://mechmaven.com/wp-content/uploads/2023/10/admin-ajax.webp"
      alt="Mechmaven Logo"
      className="w-full max-w-[180px] hover:opacity-90 transition-opacity"
    />
  </a>
  <p className="text-sm leading-snug">
    Accurate, Fast &amp; Quality Driven Technical Services by technical experts
  </p>

  {/* Social Media Icons */}
  <ul className="flex space-x-4 mt-4 justify-center">
    <li>
      <a
        href="#"
        aria-label="Facebook"
        className="hover:text-blue-500 transition-colors"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </li>
    <li>
      <a
        href="#"
        aria-label="Twitter"
        className="hover:text-blue-300 transition-colors"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
    <li>
      <a
        href="https://pk.linkedin.com/in/fariz-aneeq-b8968b113"
        aria-label="LinkedIn"
        className="hover:text-blue-600 transition-colors"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </li>
    <li>
      <a
        href="#"
        aria-label="Instagram"
        className="hover:text-pink-500 transition-colors"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
  </ul>
</div>


        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-blue-400 transition">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/accessibilityStatement" className="hover:text-blue-400 transition">
                Accessibility Statement
              </Link>
            </li>
            <li>
              <Link href="/cookiePolicy" className="hover:text-blue-400 transition">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-blue-400 transition">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-blue-400 transition">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition">
                Blog & News
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Contact Us</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <FaClock className="text-blue-400 mt-1" size={20} />
              <div>
                <p className="font-medium">Working Time</p>
                <p className="text-gray-300">Mon-Fri 09:AM - 05:PM</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaPhoneAlt className="text-green-400 mt-1" size={20} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-300">+92 331-9988598</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope className="text-red-400 mt-1" size={20} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300">info@mechmaven.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="bg-[#B50303] text-white px-4 py-3 border-t border-red-700">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-2 md:space-y-0">
    
    {/* Left Side - Copyright */}
    <div className="text-sm text-center md:text-left">
      &copy; {new Date().getFullYear()} Mechmaven. All rights reserved.
    </div>
    
    {/* Right Side - Links */}
    <ul className="flex space-x-4 text-sm">
      <li>
        <a href="/privacy-policy" className="hover:underline hover:text-gray-200 transition">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="/terms-and-conditions" className="hover:underline hover:text-gray-200 transition">
          Terms & Conditions
        </a>
      </li>
    </ul>
  </div>
</div>

    </footer>
  );
}

export default Footer;