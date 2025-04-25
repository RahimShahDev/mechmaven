'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers3, Thermometer, Leaf, Box, PlayCircle, Hammer } from 'lucide-react';

const services = [
    {
      title: "CFD Consulting Services",
      description:
        "Plunge into the currents of innovation with Mechmaven's CFD Consulting Services. Our team excels in fine-tuning fluid dynamics and thermal management systems, propelling your project's performance to new heights. With a rich background in sectors like medical, aerospace, marine, civil, and automotive, we bring a depth of knowledge to validate your designs against the toughest benchmarks and real-world conditions.",
      icon: <Layers3 className="w-6 h-6" />,
    },
    {
      title: "Mechanical & HVAC Design",
      description:
        "Elevate your spaces with Mechmaven's Mechanical & HVAC Design services. We blend comfort with energy efficiency, tailoring HVAC solutions that fit your unique needs. From residential homes to large-scale commercial buildings, our designs prioritize sustainability, air quality, and optimal environmental control.",
      icon: <Thermometer className="w-6 h-6" />,
    },
    {
      title: "Green Building Services",
      description:
        "Build sustainably with Mechmaven's Green Building Services. We're committed to eco-friendly design principles that minimize environmental impact while maximizing efficiency. Our green solutions encompass innovative materials, energy conservation, and water-saving technologies.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      title: "SolidWorks 3D Modelling",
      description:
        "Bring your ideas to life with Mechmaven's SolidWorks 3D Modelling Services. Our expert team uses SolidWorks to deliver detailed, accurate 3D models and drawings that bring clarity and precision to your projects.",
      icon: <Box className="w-6 h-6" />,
    },
    {
      title: "3D Animation with SolidWorks",
      description:
        "Visualize your concepts in motion with Mechmaven's 3D Animation Services powered by SolidWorks. From showcasing machinery movements to demonstrating product functionalities, our animations enhance understanding and decision-making for your stakeholders.",
      icon: <PlayCircle className="w-6 h-6" />,
    },
    {
      title: "On-Demand SolidWorks Design",
      description:
        "Customize your projects with Mechmaven's on-demand SolidWorks Design Services. Whether it's one-off designs or full project support, we deliver tailored solutions with precision and excellence.",
      icon: <Hammer className="w-6 h-6" />,
    },
  ];

function Services (){
    return (
        <>
         {/* Main Image Section  */}
        <section
        className="relative flex justify-center items-center bg-cover bg-center bg-fixed min-h-[450px] md:min-h-[550px]"
        style={{
          backgroundImage: "url('/assets/images/about.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
  
        {/* Content container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 md:px-10 py-12 w-full"
        >
          {/* Animated text box */}
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="max-w-3xl mx-auto bg-black bg-opacity-60 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 border border-white border-opacity-10"
          >
            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            >
              OUR SERVICES
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto"
            >
              Put Our Experience To Work For You
            </motion.p>
  
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
                Explore Services
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
  
        {/* Scrolling indicator (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce w-6 h-6 text-white">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

    {/* Services Section  */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 inline-block"
          >
            <span className="relative">
              SERVICES
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-6"
              >
                <Sparkles className="w-6 h-6 text-[#B50303]" />
              </motion.span>
            </span>
          </motion.h2>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              "As opposed to 'cookie cutter' methods seen so often in our profession, 
              we take the time to listen to the needs of our clients and understand 
              their strengths, weaknesses, challenges, and goals. Services are then 
              tailored to fit these unique traits, ensuring that both short-term 
              and long-term goals are strategic and mission-driven."
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Custom Solutions",
              description: "Tailored engineering approaches designed specifically for your unique requirements.",
              icon: "⚙️"
            },
            {
              title: "Strategic Planning",
              description: "Comprehensive roadmaps aligning with your business objectives.",
              icon: "📊"
            },
            {
              title: "Mission-Driven",
              description: "Solutions focused on achieving your core organizational goals.",
              icon: "🎯"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 p-6"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-red-600 font-medium flex items-center group"
              >
                Learn more
                <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>

    {/* Service Cards Section  */}
   <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center bg-red-50 px-4 py-2 rounded-full mb-4">
            <span className="text-red-600 font-medium text-sm uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          <motion.h2
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6"
          >
            <span className="relative inline-block">
              Engineering Services
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -top-4 -right-6"
              >
                <Sparkles className="w-6 h-6 text-red-600" />
              </motion.span>
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert mechanical engineering services tailored for innovation, efficiency, and sustainability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-red-600/30 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <motion.button
                whileHover={{ x: 4 }}
                className="mt-6 inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>

      </>
    )
}

export default Services;