'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';


const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable HVAC Systems",
      excerpt: "Exploring how new technologies are making HVAC systems more energy efficient and environmentally friendly.",
      category: "Sustainability",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/assets/images/Cfd-mechmaven.webp"
    },
    {
      id: 2,
      title: "Advanced CAD Techniques for Mechanical Engineers",
      excerpt: "Learn about the latest CAD methodologies that are revolutionizing mechanical design processes.",
      category: "CAD Design",
      date: "April 28, 2023",
      readTime: "7 min read",
      image: "/assets/images/Green-building-services-jpg-1.webp"
    },
    {
      id: 3,
      title: "CFD Analysis in Modern Engineering Projects",
      excerpt: "How computational fluid dynamics is solving complex engineering challenges across industries.",
      category: "CFD Analysis",
      date: "April 10, 2023",
      readTime: "6 min read",
      image: "/assets/images/Mechmaven-vision_choose-us.webp"
    },
    {
      id: 4,
      title: "Green Building Strategies for Commercial Spaces",
      excerpt: "Implementing eco-friendly solutions in large-scale commercial construction projects.",
      category: "Green Building",
      date: "March 22, 2023",
      readTime: "8 min read",
      image: "/assets/images/Our-Mission.webp"
    },
    {
      id: 5,
      title: "3D Modeling Best Practices with SolidWorks",
      excerpt: "Essential tips and tricks for creating efficient and accurate 3D models in SolidWorks.",
      category: "3D Modeling",
      date: "March 5, 2023",
      readTime: "4 min read",
      image: "/assets/images/Solidworks-3d-Modeling-jpg-2.webp"
    },
    {
      id: 6,
      title: "Innovations in Product Rendering and Animation",
      excerpt: "How cutting-edge rendering technologies are transforming product visualization.",
      category: "Visualization",
      date: "February 18, 2023",
      readTime: "5 min read",
      image: "/assets/images/COMPUTER-AIDED-ENGINEERING.webp"
    }
  ];

function blog () {
    return (
        <>
         {/* Main image section  */}
         <section
  className="relative flex justify-center items-center bg-cover bg-center bg-fixed min-h-[450px]"
  style={{
    backgroundImage: "url('/assets/images/popular-stories-banner.jpg')",
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
        Blog Mechmaven
      </h1>
    </motion.div>
  </motion.div>
</section>

{/* Second Section  */}
<section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            MechMaven Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover industry trends, technical guides, and innovative solutions from our engineering experts.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`} className="block">
                {/* Featured Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-6 flex items-center text-red-600 font-medium group">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination/CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
        </>
    )
}

export default blog