'use client';

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from 'lucide-react';

function contact () {
    return (
        <>
        {/* image section  */}
        <section
        className="relative flex justify-center items-center bg-cover bg-center bg-fixed min-h-[450px] md:min-h-[550px]"
        style={{
          backgroundImage: "url('/assets/images/contact')",
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
              contact us
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto"
            >
              Feel free to ask question
            </motion.p>
    
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

      {/* Contact Section  */}
      <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8 relative">
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">CONTACT US</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Get In Touch With MechMaven</h3>
            </div>

            <p className="text-gray-600 mb-6">
              We're here to bring your engineering projects to life. At MechMaven, your questions, projects, and visions are what drive us forward. Whether you're seeking advanced mechanical engineering services, need expert advice on CAD design, CFD analysis, HVAC solutions, or sustainable building strategies, our team is ready to assist.
            </p>
            <p className="text-gray-600 mb-10">
              Reach out to us through the form below, give us a call, or drop by our office. Let's collaborate to transform your engineering challenges into innovative, sustainable solutions. Your journey towards engineering excellence starts here, with MechMaven.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://api.whatsapp.com/send?phone=923319988598"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-100 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">Phone Call</h4>
                  <p className="text-gray-600">+92331-9988598</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:Ceo@mechmaven.com"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">Email drop us</h4>
                  <p className="text-gray-600">Info@mechmaven.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-100 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">Location</h4>
                  <p className="text-gray-600">Peshawar Deans Trade Center, UG 391</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-10 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send A Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your query"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    
        
        
        </>
    )
}

export default contact;