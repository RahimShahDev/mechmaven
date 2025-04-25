'use client';

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Phone, MessageSquare } from 'lucide-react';


function portfolio () {
    return (
        <>
        {/* image section  */}
        <section
  className="relative flex justify-center items-center bg-cover bg-center bg-fixed min-h-[450px]"
  style={{
    backgroundImage: "url('/assets/images/portfolio.webp')",
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
      OUR PROJECTS
      </h1>
    </motion.div>
  </motion.div>
</section>

{/* Expoler our engineering mastery section  */}
<section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Explore Our Engineering Mastery: The MechMaven Portfolio
          </motion.h2>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg text-gray-600 mx-auto mb-12 md:mb-16 text-center max-w-4xl hover:bg-gray-50 transition-colors duration-300 p-6 rounded-lg"
        >
          <p>
            Dive into the heart of innovation with MechMaven's portfolio, a testament to our diverse expertise and groundbreaking work in mechanical engineering services. From intricate CAD designs and detailed CFD analyses to eco-friendly HVAC systems, green building strategies, SolidWorks 3D modeling, drafting, product animation, and rendering, each project showcases our commitment to excellence and sustainable solutions. Browse through our curated selection of projects to witness how we tackle complex engineering challenges, turning visionary ideas into tangible successes. Our portfolio is not just a display of our achievements; it's an invitation to see the potential in your own projects, brought to life by MechMaven's skilled team.
          </p>
        </motion.div>

        {/* Secondary Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-red-600 rounded-full"></div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 pl-6 md:pl-8 leading-relaxed">
            Working closely with our clients has given us the hands-on experience to build most of what we design. These are just a few examples of work we've done. Browse some of our latest projects.
          </h3>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center group"
          >
            <span>View Our Portfolio</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>

    {/* Let’s Talk About Your Project Needs */}
    <section 
      className="relative flex items-center min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/assets/images/portfolio2.png')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative inline-block">
              <span className="relative">
                Let's Talk About Your Project Needs
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-500 origin-left"
                />
              </span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              See how our innovative engineering services can bring value to your project.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
          >
            <motion.a
              whileHover={{ y: -5, backgroundColor: "#1a365d" }}
              whileTap={{ scale: 0.98 }}
              href="#consultation"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
            >
              <MessageSquare className="w-5 h-5" />
              Get a Consultation
            </motion.a>

            <span className="text-white font-medium hidden md:block">or</span>

            <motion.a
              whileHover={{ y: -5, backgroundColor: "#9d174d" }}
              whileTap={{ scale: 0.98 }}
              href="tel:+923319988598"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-pink-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call (+92331) 9988598
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>

        </>
    )
}

export default portfolio;