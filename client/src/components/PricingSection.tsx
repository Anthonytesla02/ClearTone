import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion-variants';
import coverImage from '@assets/file_000000002c0c61f89c8d0351a7b30c1c.png';

const PricingSection: React.FC = () => {
  const features = [
    "Complete 6-step acne-fighting routine",
    "Weekly schedule for maximum results",
    "Product recommendations for every budget",
    "BONUS: 4 Emergency Skin Protocols",
    "BONUS: Printable routine tracker"
  ];

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    // Redirect to the specified checkout page
    window.open('https://bit.ly/cleartone', '_blank');
  };

  return (
    <section id="checkout" className="py-16 bg-cream scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-lavender text-white px-4 py-2 rounded-full text-sm font-bold mb-4">LIMITED TIME OFFER</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Get Clear Skin For Less Than a Single Facial
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Invest in yourself today with the complete ClearTone acne-fighting guide at our special launch price
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient p-1">
              <div className="bg-white p-6 md:p-8 rounded-t-xl">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src={coverImage} 
                      alt="ClearTone E-Book" 
                      className="rounded-lg shadow-md mx-auto w-full max-w-xs"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-montserrat font-bold text-2xl mb-4">ClearTone: Complete Acne-Fighting System</h3>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400"></i>
                        ))}
                      </div>
                      <p className="text-gray-600">(394 reviews)</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check-circle text-teal mt-1 mr-2"></i>
                          <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-end mb-6">
                      <div className="mr-4">
                        <p className="text-sm text-gray-500 line-through">Regular Price: $39.99</p>
                        <p className="text-3xl font-bold text-lavender">$19.99</p>
                      </div>
                      <p className="text-sm bg-peach bg-opacity-20 text-peach font-semibold px-3 py-1 rounded">50% OFF</p>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <button 
                        onClick={handleCheckout}
                        className="cta-button bg-teal hover:bg-teal-600 text-white py-4 px-8 rounded-full font-montserrat font-bold text-center text-lg"
                      >
                        GET INSTANT ACCESS
                      </button>
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <i className="fas fa-lock mr-2"></i>
                        <p>Secure checkout with PayPal or Credit Card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 bg-gray-50">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center mr-4">
                  <i className="fas fa-shield-alt text-teal text-xl"></i>
                </div>
                <h4 className="font-montserrat font-bold text-lg">60-Day Money-Back Guarantee</h4>
              </div>
              <p className="text-center text-gray-700">
                If you don't see improvement in your skin within 60 days of following the routine, we'll refund your purchase - no questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
