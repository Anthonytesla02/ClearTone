import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/motion-variants';
import multiDeviceImage from '@assets/1748118455.png';

const MultiDeviceSection: React.FC = () => {
  const features = [
    "PDF format for easy reading on any device",
    "Printable routine trackers and checklists",
    "Bookmark your favorite sections for quick reference",
    "Download once, access forever"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img 
              src={multiDeviceImage} 
              alt="ClearTone on multiple devices" 
              className="rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              Available on All Your Devices
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Get instant access to your ClearTone guide on any device. Read it on your computer, tablet, or phone - wherever is most convenient for you.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="ml-3 text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiDeviceSection;
