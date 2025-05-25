import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion-variants';
import BeforeAfterSlider from './ui/before-after-slider';

const BeforeAfterSection: React.FC = () => {
  const testimonials = [
    {
      name: "Jamie, 26",
      text: "After 2 months of following the ClearTone routine, my skin is completely different. No more painful cysts!",
      beforeImage: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      name: "Chris, 31",
      text: "I've struggled with acne for 15 years. This is the only routine that has ever worked consistently.",
      beforeImage: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-4">
            Real Results from Real People
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
            These transformations came from following the exact routine outlined in the ClearTone guide
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg"
              variants={fadeIn}
              custom={index * 0.3}
            >
              <div className="relative h-80">
                <BeforeAfterSlider 
                  beforeImage={testimonial.beforeImage}
                  afterImage={testimonial.afterImage}
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between mb-2">
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a 
            href="#checkout" 
            className="cta-button bg-teal hover:bg-teal-600 text-white py-4 px-8 rounded-full font-montserrat font-bold inline-block text-lg"
          >
            GET MY COPY NOW
          </a>
          <p className="mt-4 text-gray-600">Join 10,000+ others who have transformed their skin</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
