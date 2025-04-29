// components/CEOMessageSection.tsx
'use client';

import Image from 'next/image';
import React from "react";
import { motion } from "framer-motion";

// For our Team 
const teamMembers = [
  {
    name: "Alex Johnson",
    position: "CEO & Founder",
    description: "Visionary leader with 15+ years in mechanical engineering innovation.",
    image: "/assets/images/team1.jpg" // Using regular img tag instead of Next.js Image
  },
  {
    name: "Sarah Williams",
    position: "Lead Engineer",
    description: "Specializes in sustainable HVAC solutions and energy efficiency.",
    image: "/assets/images/team1.jpg"
  },
  {
    name: "Michael Chen",
    position: "CAD Design Director",
    description: "Pushes boundaries in 3D modeling and computational design.",
    image: "/assets/images/team1.jpg"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// For our Projects 
const projects = [
  {
    title: "Green Energy Complex",
    description: "Sustainable HVAC design for a 50,000 sq ft commercial building reducing energy consumption by 40%.",
    image: "/assets/images/project1.webp" // Replace with your image path
  },
  {
    title: "Industrial Retrofit",
    description: "Mechanical systems upgrade for manufacturing facility achieving 30% operational efficiency improvement.",
    image: "/assets/images/project2.webp"
  },
  {
    title: "Smart Building Automation",
    description: "Integrated CAD and CFD solutions for next-generation intelligent building management.",
    image: "/assets/images/project3.webp"
  }
];

function About () {
    return (

    // Main Image Section 
    <>
           {/* Main Image Section  */}
        <section
  className="relative flex justify-center items-center bg-cover bg-center bg-fixed min-h-[450px]"
  style={{
    backgroundImage: "url('/assets/images/about.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center px-4 md:px-10 py-12"
  >
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
      }}
      className="max-w-3xl mx-auto bg-black bg-opacity-60 backdrop-blur-md p-6 rounded-xl shadow-lg transition-shadow duration-300"
    >
      <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
        About Mechmaven
      </h1>
    </motion.div>
  </motion.div>
</section>

{/* About us Text Section */}
<section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    
    {/* About Us Text Column - Enhanced with floating animation */}
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group">
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#B50303] opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#B50303] opacity-5 rounded-full group-hover:opacity-15 transition-opacity duration-500"></div>
      
      <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight relative z-10">
        ABOUT <span className="text-[#B50303]">US</span>
      </h4>
      <span className="block h-1 w-24 sm:w-32 bg-[#B50303] mt-2 mb-6 rounded-full transition-all duration-500 group-hover:w-40"></span>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10">
        MECHMAVEN is an engineering company providing advanced mechanical solutions in many technical fields. Projects are executed within our design office or directly at the customer's premises.
      </p>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 relative z-10">
        We support companies operating in high-tech environments with strict constraints like thermal, vibration, and environmental challenges.
      </p>
    </div>

    {/* Highlights Column - Enhanced with staggered animations */}
    <div className="space-y-6">
      {/* Quality - Enhanced with icon */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group border-l-4 border-transparent hover:border-[#B50303]">
        <div className="flex items-start">
          <div className="bg-[#B50303] p-2 rounded-lg mr-4 group-hover:rotate-6 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#B50303] mb-2 group-hover:text-black transition-colors duration-300">Quality</h5>
            <p className="text-gray-700 text-base group-hover:text-gray-900 transition-colors duration-300">
              Following the quality of our service, we've gained the trust of many clients.
            </p>
          </div>
        </div>
      </div>

      {/* Reliability - Enhanced with icon */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group border-l-4 border-transparent hover:border-[#B50303]">
        <div className="flex items-start">
          <div className="bg-[#B50303] p-2 rounded-lg mr-4 group-hover:-rotate-6 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#B50303] mb-2 group-hover:text-black transition-colors duration-300">Reliability</h5>
            <p className="text-gray-700 text-base group-hover:text-gray-900 transition-colors duration-300">
              We've established a corporate mandate to uphold values that truly reflect our mission.
            </p>
          </div>
        </div>
      </div>

      {/* Innovation - Enhanced with icon */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group border-l-4 border-transparent hover:border-[#B50303]">
        <div className="flex items-start">
          <div className="bg-[#B50303] p-2 rounded-lg mr-4 group-hover:rotate-12 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#B50303] mb-2 group-hover:text-black transition-colors duration-300">Innovation</h5>
            <p className="text-gray-700 text-base group-hover:text-gray-900 transition-colors duration-300">
              Our company develops dynamically and keeps in step with the times through innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* OUR VISION Section  */}
<section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    
    {/* Enhanced Image Column with Interactive Elements */}
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group h-full min-h-[300px]">
      {/* Main Image with Zoom Effect */}
      <img 
        src="/assets/images/Our-Mission.webp" 
        alt="Our vision at Mechmaven" 
        className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:to-black/60 transition-all duration-500"></div>
      
      {/* Interactive Service Tags (Appear on Hover) */}
      <div className="absolute inset-0 flex flex-wrap items-end p-4 sm:p-6">
        <div className="w-full flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {['CAD Design', 'CFD Analysis', 'HVAC Solutions', 'Green Building', 'Product Animation'].map((service, index) => (
            <span 
              key={index}
              className="inline-flex items-center bg-white/90 text-[#B50303] px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-[#B50303] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {service}
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          ))}
        </div>
      </div>
      
      {/* Floating Play Button (Center) */}
      <button 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#B50303] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group-hover:opacity-0"
        aria-label="Play video about our vision"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      </button>
    </div>
    
    {/* Enhanced Text Column */}
    <div className="px-2 sm:px-4 lg:px-6">
      <div className="relative">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
          OUR <span className="text-[#B50303] relative inline-block">
            VISION
            {/* <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#B50303] rounded-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500"></span> */}
          </span>
        </h4>

        <span className="block h-1 w-24 sm:w-32 bg-[#B50303] mt-2 mb-6 rounded-full transition-all duration-500 group-hover:w-40"></span>

        <div className="space-y-5 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300 ">
            Mechmaven's vision focuses on transforming engineering ideas into reality by offering professional services in CAD design, CFD analysis, HVAC solutions, green building strategies, and product animations.
          </p>
          <p className="text-base sm:text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
            Our goal is to provide innovative and sustainable solutions in mechanical engineering, combining cutting-edge technology with eco-friendly practices to enhance efficiency, reduce environmental impact, and contribute to global progress.
          </p>
          <p className="text-base sm:text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
            Mechmaven emphasizes a commitment to precision, performance, and partnership with clients, guiding them through complex challenges toward achieving sustainable outcomes.
          </p>
        </div>

        {/* Interactive Pillars */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['Precision', 'Performance', 'Innovation', 'Sustainability'].map((pillar, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-[#B50303] hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="bg-[#B50303]/10 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 group-hover:bg-[#B50303]/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B50303]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium text-gray-800 group-hover:text-[#B50303] transition-colors duration-300">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* our mission section  */}
<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    
  
    
    {/* Text Column (left) - Clean and professional */}
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          OUR <span className="text-[#B50303]">MISSION</span>
        </h2>
        <div className="w-20 h-1 bg-[#B50303] rounded-full mb-6"></div>
      </div>

      <div className="space-y-5 text-gray-700">
        <p className="text-lg leading-relaxed">
          The mission of Mechmaven is to leverage our expertise in mechanical engineering to provide innovative, efficient, and sustainable solutions.
        </p>
        <p className="text-lg leading-relaxed">
          We aim to excel in CAD design, CFD analysis, HVAC solutions, and green building strategies, ensuring high-quality results that meet the evolving needs of our clients.
        </p>
        <p className="text-lg leading-relaxed">
          Through our commitment to excellence and sustainability, we strive to contribute positively to the engineering field and the wider community.
        </p>
      </div>
    </div>

      {/* Image Column (Right) - Simplified but elegant */}
      <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
      <img 
        src="/assets/images/about.webp" 
        alt="Mechmaven's engineering solutions" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  </div>
</section>

{/* CEO MESSAGE Section  */}
<section className="bg-black overflow-hidden py-[60px] px-3">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row gap-0">
        {/* Image Column */}
        <div className="w-full md:w-1/2 p-0">
          <div className="relative h-full w-full min-h-[300px]">
            <Image
              src="/assets/images/ceo_message.png"
              alt="Mechmaven background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full md:w-1/2 p-[15px] text-white">
          <div className="flex flex-col h-full justify-center">
            {/* Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CEO <span className='text-[#B50303]'>MESSAGE</span></h2>
              <div className="h-[2px] bg-[#B50303] w-[50px]"></div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg text-gray-300"
            >
              <p className="mb-4">
                Welcome to Mechmaven, where engineering innovation meets sustainability. Our journey began with a simple belief: that mechanical engineering can be a cornerstone for building a greener, more efficient future.
              </p>
              <p className="mb-4">
                Every day, our team pushes the boundaries of CAD design, CFD analysis, and HVAC solutions to not only meet but exceed our clients' expectations.
              </p>
              <div className="border-l-4 border-[#B50303] pl-4 my-6">
                <p className="font-medium text-white">
                  Our commitment to green building and sustainable practices is not just a part of our business model; it's our responsibility to the planet.
                </p>
              </div>
              <p className="mb-4">
                We're here to solve complex challenges, transform ideas into reality, and pave the way for a sustainable future.
              </p>
              <p className="font-semibold text-white">
                Thank you for joining us on this exciting journey.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Projects Section  */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-lg  font-medium mb-2">
            Explore our recent works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#B50303] mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-[#B50303] hover:bg-[#B50634] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Explore More Projects
          </button>
        </motion.div>
      </div>
    </section>


  </>
  );
};

export default  About;
