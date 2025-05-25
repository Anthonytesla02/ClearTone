import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion-variants';

const FinalCTA: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
            Start Your Clear Skin Journey Today
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto mb-8">
            Join thousands of others who have transformed their skin and their confidence with the ClearTone routine
          </p>
          <a 
            href="#checkout" 
            onClick={handleClick}
            className="cta-button bg-white text-lavender hover:bg-gray-100 py-4 px-8 rounded-full font-montserrat font-bold inline-block text-lg mb-6"
          >
            GET INSTANT ACCESS NOW
          </a>
          <p className="text-white text-sm">Only $19.99 today (Regular price: $39.99)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
