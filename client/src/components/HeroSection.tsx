import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/motion-variants';
import coverImage from '@assets/file_000000002c0c61f89c8d0351a7b30c1c.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cream py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className="text-peach">Clear</span><span className="text-lavender">Tone</span>
              <span className="block text-3xl md:text-4xl mt-2">The Ultimate Acne-Fighting Routine</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 font-opensans">
              Say goodbye to breakouts, redness, and embarrassment. Transform your skin with a science-backed routine that <span className="font-semibold">actually works</span>.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-l-4 border-lavender">
              <p className="italic text-gray-700">"I've spent thousands on dermatologists and products that never worked. This simple routine cleared my skin in just 3 weeks."</p>
              <p className="font-bold mt-2">— Rebecca T.</p>
            </div>
            <a 
              href="https://bit.ly/cleartone" 
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button bg-teal hover:bg-teal-600 text-white py-4 px-8 rounded-full font-montserrat font-bold inline-block text-lg"
            >
              START HEALING YOUR SKIN NOW
            </a>
            <p className="text-sm text-gray-600 mt-4">✓ One-time payment • ✓ 60-day money back guarantee • ✓ Instant download</p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <div className="relative z-10">
              <img 
                src={coverImage} 
                alt="ClearTone E-Book" 
                className="rounded-lg shadow-2xl mx-auto hover-scale"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <p className="text-sm font-medium">256 Purchased Today</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
