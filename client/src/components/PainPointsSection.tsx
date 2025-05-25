import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion-variants';

const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: "fas fa-frown",
      title: "Constant Breakouts",
      description: "Waking up to new pimples every morning, no matter what products you try or how much you spend."
    },
    {
      icon: "fas fa-search-dollar",
      title: "Wasted Money",
      description: "Drawers full of expensive products that promised results but only made your skin worse or did nothing at all."
    },
    {
      icon: "fas fa-camera",
      title: "Social Anxiety",
      description: "Avoiding photos, canceling plans, and hiding your face because you're embarrassed about your skin."
    }
  ];

  const benefits = [
    "Wake up confident, knowing your skin is finally healing",
    "Use just the right products in the right order, without wasting money",
    "Take selfies without filters and feel beautiful in your own skin",
    "Follow a simple, science-backed routine that works with your body, not against it"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Tired of <span className="text-lavender">Acne Taking Control</span> of Your Life?
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-cream rounded-xl p-6 shadow-md hover-scale"
              variants={fadeIn}
              custom={index * 0.2}
            >
              <div className="rounded-full bg-peach w-14 h-14 flex items-center justify-center mb-4">
                <i className={`${point.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-montserrat font-bold text-2xl mb-4">You're Not Alone</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Acne affects over 50 million Americans annually, and 85% of people experience acne at some point in their lives. But here's the truth: <span className="font-semibold">it doesn't have to be your reality anymore</span>.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-lavender bg-opacity-10 p-8 rounded-xl max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-montserrat font-bold text-2xl mb-4 text-center text-lavender">What if You Could...</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal flex items-center justify-center mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <p className="ml-3 text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.replace(/(<span.*?>|<\/span>)/g, '') }}></p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
