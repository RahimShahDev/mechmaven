'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';


import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: "Professional Mechanical Engineering Services",
    desc: "Accurate, Fast & Quality Driven Technical Services by Technical Experts.",
    link: "/services",
    image: "/assets/images/COMPUTER-AIDED-ENGINEERING.webp"
  },
  {
    title: "CFD Consulting Services",
    desc: "Unlock the potential of fluid dynamics with our advanced CFD services – where precision meets performance.",
    link: "/services",
    image: "/assets/images/Cfd-mechmaven.webp"
  },
  {
    title: "Green Building Services",
    desc: "Building a Sustainable Future with Our Green, Eco-Friendly, Efficient, Innovative, Building Services.",
    link: "/services",
    image: "/assets/images/Green-building-services-jpg-1.webp",
  },
  {
    title: "Mechanical & HVAC Design",
    desc: "Your Comfort, Our Commitment - Smart HVAC Designs",
    link: "/services",
    image: "/assets/images/3d-rendering-ventilation-system-1-scaled-1.webp",
  },
  {
    title: "SOLIDWORKS Engineering Services",
    desc: "SOLIDWORKS Engineering Services: Crafting the Future of Design Excellence.",
    link: "/services",
    image: "/assets/images/Solidworks-3d-Modeling-jpg-2.webp",
  },
];

const AnimatedCounter = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2.5,
      ease: "easeOut",
    });

    // Subscribe to value changes
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to]);
  return (
    <motion.span className="text-4xl font-semibold text-[#c40303]">
    {display}
  </motion.span>
  );
};



const Home = () => {
  const [index, setIndex] = useState(0);
  const [showTestimonials, setShowTestimonials] = useState(true);

  
const testimonials = [
  {
    name: 'Rochelle N.',
    message:
      'Mechmaven team is extremely professional and done an excellent job for me. Would highly recommend and will come straight to them if I need anything else doing. 100% happy. Thanks.',
    rating: 5, // 5 stars
  },
  {
    name: 'Jonathan D.',
    message:
      'Their team exceeded expectations. Very detailed, fast, and friendly. Looking forward to working with them again!',
    rating: 4, // 4 stars
  },
  {
    name: 'Anika S.',
    message:
      'Very skilled and communicative. They brought our HVAC design to life with clarity and precision. Highly satisfied!',
    rating: 5, // 5 stars
  },
];

useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 6000);
  return () => clearInterval(timer);
}, []);

const currentTestimonial = testimonials[index];

const renderStars = (rating) => {
  return (
    <div className="text-yellow-400 text-lg">
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
  );
};




  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full text-white">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                  <div className="text-center max-w-2xl mx-auto p-8 bg-black bg-opacity-40 rounded-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                      {slide.desc}
                    </p>
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 px-8 py-3 text-base font-medium bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Excellence Section */}
      <section className="bg-white py-10 px-4 md:px-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl text-[#B50303] font-bold inline-block relative">
            Excellence in Mechanical Engineering Services
            <span className="block h-1 w-36 bg-[#B50303] mx-auto mt-2 rounded"></span>
          </h2>
          <p className="text-gray-700">
            MECHMAVEN is an engineering company providing advanced mechanical solutions in many technical fields.
          </p>
          <p className="text-gray-700">
            We support companies operating in high-tech environments with strong constraints (thermal, vibration, environmental).
          </p>
          <p className="text-gray-700">
            We breathe life into your engineering visions. With a steadfast commitment to innovation and excellence, we are your premier destination for cutting-edge CAD design, comprehensive CFD analysis, efficient HVAC solutions, sustainable green building strategies, and captivating product animations.
          </p>
          <Link href="/about" passHref>
          <button className="bg-[#B50303] text-white px-6 py-3 rounded-lg text-base hover:bg-[#a00202] transition duration-300">
            Explore More
          </button>
          </Link>
        </div>
      </section>

      {/* Project + Counter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
    {/* Project Description - 65% width */}
    <div className="lg:w-[65%] bg-black text-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-4 md:space-y-6">
        <div>
          <h4 className="text-sm sm:text-base font-bold tracking-wider text-gray-300">WORLD'S LEADING MECHANICAL ENGINEERING SERVICES</h4>
          <span className="block h-1 w-24 sm:w-36 bg-[#B50303] mt-2 rounded-full"></span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
          Excellence in <span className="text-[#B50303]">Mechanical Engineering</span> Solutions
        </h2>
        
        <div className="space-y-3 text-gray-300">
          <p className="text-base sm:text-lg leading-relaxed hover:text-white transition-colors duration-200">
            MECHMAVEN delivers cutting-edge mechanical solutions across diverse technical sectors.
          </p>
          <p className="text-base sm:text-lg leading-relaxed hover:text-white transition-colors duration-200">
            We specialize in high-tech environments with demanding thermal, vibration, and environmental constraints.
          </p>
          <p className="text-base sm:text-lg leading-relaxed hover:text-white transition-colors duration-200">
            Transforming engineering visions into reality through innovation and precision craftsmanship.
          </p>
        </div>

        {/* Features - Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            {
              icon: "https://mechmaven.com/wp-content/uploads/2023/11/fb-icon-01.webp",
              title: "Environmental Sensitivity",
              desc: "Eco-conscious engineering solutions"
            },
            {
              icon: "https://mechmaven.com/wp-content/uploads/2023/11/fb-icon-02.webp",
              title: "Tailored Solutions",
              desc: "Custom-designed for your needs"
            },
            {
              icon: "https://mechmaven.com/wp-content/uploads/2023/11/fb-icon-03.webp",
              title: "Performance Metrics",
              desc: "Measurable excellence"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
              onClick={() => console.log(`Clicked ${item.title}`)}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <h4 className="font-semibold text-sm sm:text-base mb-1 group-hover:text-[#B50303] transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Counter Section - 35% width */}
    <div className="lg:w-[35%] flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="text-center">
        <div className="text-[#c40303] text-5xl sm:text-6xl mb-6 hover:animate-spin transition-transform duration-1000 cursor-pointer">
          <i className="fas fa-cogs" aria-hidden="true"></i>
        </div>

        <div 
          className="flex items-center justify-center space-x-2 mb-4 group"
          onMouseEnter={() => console.log('Hover counter')}
        >
          <span className="text-3xl sm:text-4xl text-[#c40303] font-bold">+</span>
          <AnimatedCounter 
            to={5000} 
            className="text-4xl sm:text-5xl text-[#c40303] font-bold tracking-tight group-hover:text-black transition-colors duration-300"
          />
        </div>
        
        <h3 className="text-xl sm:text-2xl text-[#c40303] font-medium mb-4 hover:underline cursor-pointer">
          Successful Projects
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          Trusted by industries worldwide for precision engineering solutions.
        </p>
        
        <Link href="/contact" passHref>
        <button 
          className="bg-[#B50303] text-white px-6 py-2 rounded-full font-medium hover:bg-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#B50303] focus:ring-offset-2"
          onClick={() => console.log('Contact clicked')}
        >
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Our Mission Section  */}
<section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    {/* Image Column - Responsive with hover effect */}
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <img 
        src='/assets/images/Our-Mission.webp' 
        alt='Our mission in mechanical engineering' 
        className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
    </div>

    {/* Content Column */}
    <div className="px-2 sm:px-4 lg:px-6">
      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
        OUR <span className="text-[#B50303]">MISSION</span>
      </h4>
      
      <span className="block h-1 w-24 sm:w-32 bg-[#B50303] mt-2 mb-6 rounded-full"></span>
      
      <div className="space-y-4 text-gray-700">
        <p className="text-base sm:text-lg leading-relaxed">
          Our mission is to empower innovation and sustainability in mechanical engineering through cutting-edge solutions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          We combine advanced technology with eco-friendly practices to enhance efficiency while reducing environmental impact across all our services.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          From CAD design to CFD analysis and HVAC solutions, we're committed to driving progress that makes a lasting difference.
        </p>
      </div>

      <Link href="/services" passHref>
      <button 
        className="mt-6 bg-[#B50303] text-white px-8 py-3 sm:px-10 sm:py-3 rounded-lg text-base font-medium hover:bg-[#8a0202] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B50303] focus:ring-offset-2"
        onClick={() => console.log('Explore More clicked')}
      >
        Explore Our Services
        <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
      </button>
      </Link>
    </div>
  </div>
</section>

{/* Our Mechanical Engineering Services */}
<section className="bg-gray-900 py-16 md:py-24 px-4 sm:px-6">
  {/* Hero Heading */}
  <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
    <span className="inline-block text-red-600 text-sm md:text-base border border-gray-700 rounded-full py-2 px-6 mb-4 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-default">
      Journey Towards Success
    </span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
      Our <span className="text-red-600 animate-pulse">Mechanical Engineering</span> Services
    </h2>
    <div className="w-20 h-1 bg-red-600 mx-auto mt-6 mb-8"></div>
  </div>
  
  {/* Services Cards */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
    {/* CFD Consulting Services */}
    <Link href="/services" passHref>
    <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-red-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative h-full bg-gray-800 rounded-lg p-6 border border-gray-700 group-hover:border-red-600 transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="h-full flex flex-col">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 group-hover:text-red-400 transition-colors duration-300">
            <span className="text-red-600 mr-2">▹</span>CFD Consulting
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 flex-grow">
            Advanced fluid dynamics simulations for aerospace, medical, and automotive sectors. Optimize performance while reducing development costs.
          </p>
          <div className="mt-auto pt-4 border-t border-gray-700 group-hover:border-red-600 transition-colors duration-300">
            <a href="https://mechmaven.com/cfd-consulting-services/" className="inline-flex items-center text-red-400 font-medium group-hover:text-white transition-colors duration-300">
              Explore Service
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </Link>

    {/* Green Building Services */}
    <Link href="/services" passHref>
    <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-red-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative h-full bg-gray-800 rounded-lg p-6 border border-gray-700 group-hover:border-red-600 transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="h-full flex flex-col">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 group-hover:text-red-400 transition-colors duration-300">
            <span className="text-red-600 mr-2">▹</span>Green Building
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 flex-grow">
            Sustainable design solutions enhancing energy efficiency while maintaining architectural integrity. LEED-certified approaches.
          </p>
          <div className="mt-auto pt-4 border-t border-gray-700 group-hover:border-red-600 transition-colors duration-300">
            <a href="https://mechmaven.com/green-building-services/" className="inline-flex items-center text-red-400 font-medium group-hover:text-white transition-colors duration-300">
              Explore Service
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </Link>

    {/* Mechanical & HVAC Design */}
    <Link href="/services" passHref>
    <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-red-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative h-full bg-gray-800 rounded-lg p-6 border border-gray-700 group-hover:border-red-600 transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="h-full flex flex-col">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 group-hover:text-red-400 transition-colors duration-300">
            <span className="text-red-600 mr-2">▹</span>HVAC Systems
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 flex-grow">
            Custom climate control solutions balancing performance with energy conservation for commercial and residential spaces.
          </p>
          <div className="mt-auto pt-4 border-t border-gray-700 group-hover:border-red-600 transition-colors duration-300">
            <a href="https://mechmaven.com/mechanical-hvac-design/" className="inline-flex items-center text-red-400 font-medium group-hover:text-white transition-colors duration-300">
              Explore Service
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </Link>
  </div>

  {/* SolidWorks Section Heading */}
  <div className="max-w-4xl mx-auto text-center mt-24 mb-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
      <span className="text-red-600">SolidWorks</span> Engineering Services
    </h2>
    <div className="w-20 h-1 bg-red-600 mx-auto mt-6 mb-8"></div>
  </div>

  {/* SolidWorks Cards */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
    {[
      {
        title: "3D Modeling Services",
        desc: "Transform your vision into precise 3D models for thorough analysis and optimization before fabrication.",
        href: "#"
      },
      {
        title: "3D Animation Services",
        desc: "Showcase your projects in motion with captivating animations of machinery and component operations.",
        href: "#"
      },
      {
        title: "Design Services on Demand",
        desc: "Expert SolidWorks solutions for complex machinery and innovative products of any scale.",
        href: "#"
      }
    ].map((service, index) => (
      <Link href="/services" passHref>
      <div key={index} className="group relative transform hover:-translate-y-2 transition-all duration-300">
        <div className="absolute -inset-0.5 bg-red-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div className="relative h-full bg-gray-800 rounded-lg p-6 border border-gray-700 group-hover:border-red-600 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-full flex flex-col">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 group-hover:text-red-400 transition-colors duration-300">
              <span className="text-red-600 mr-2">▹</span>{service.title}
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-6 flex-grow">
              {service.desc}
            </p>
            <div className="mt-auto pt-4 border-t border-gray-700 group-hover:border-red-600 transition-colors duration-300">
              <a href={service.href} className="inline-flex items-center text-red-400 font-medium group-hover:text-white transition-colors duration-300">
                Explore Service
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </Link>
    ))}
  </div>
</section>

{/* Why Choose Us Section */}
<section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    {/* Image Column - Equal Height */}
    <div className="relative group h-full">
      <div className="h-full overflow-hidden rounded-xl shadow-2xl">
        <img 
          src='/assets/images/Mechmaven-vision_choose-us.webp' 
          alt='Expert mechanical engineering team' 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white text-lg font-medium">Engineering Excellence</span>
      </div>
    </div>

    {/* Content Column - Equal Height */}
    <div className="bg-gray-900 p-6 sm:p-8 rounded-xl border-l-4 border-red-600 shadow-lg h-full">
      <div className="h-full flex flex-col">
        {/* Heading */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            WHY <span className="text-red-600">CHOOSE US</span>
          </h3>
          <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>
        </div>

        {/* Benefits List */}
        <ul className="space-y-5 flex-grow">
          {[
            {
              text: "Our team is composed of seasoned professionals with extensive knowledge in CAD, CFD, HVAC, and 3D animation."
            },
            {
              text: "We leverage the latest in engineering software and tools, including advanced SolidWorks capabilities."
            },
            {
              text: "Our approach is to collaborate closely with you, ensuring the final product aligns perfectly with your vision."
            }
          ].map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-4 p-4 hover:bg-gray-800 rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-300 text-base sm:text-lg">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500">
            Discover Our Expertise
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Enjoy The Best Experience with Us  */}
<section
      className="relative min-h-[500px] bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{
        backgroundImage:
          "url('/assets/images/about.webp')",
      }}
    >
      <div className="absolute inset-0 bg-[#252525] opacity-50"></div>

      <div className="relative container mx-auto max-w-5xl px-4 py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 p-6 rounded-xl shadow-lg text-black"
            >
              <h3 className="text-xl font-semibold mb-4">
                {currentTestimonial.name}
              </h3>
              <p className="italic text-sm md:text-base mb-4">
                “{currentTestimonial.message}”
              </p>
              {renderStars(currentTestimonial.rating)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>

    </>
  );
};

export default Home;
