import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion-variants';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "I've struggled with cystic acne for years and tried everything from antibiotics to expensive treatments. The ClearTone routine is the first thing that's given me consistent results. My skin hasn't been this clear since I was 12!",
      name: "Jessica M.",
      age: "28",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      text: "As someone who has spent hundreds on dermatologist visits and prescription creams, I was skeptical. But the science behind this routine makes sense, and the results speak for themselves. My skin is calmer, clearer, and I finally understand what works and why.",
      name: "Michael T.",
      age: "34",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      text: "As a mom of a teenager with acne, I bought this for my daughter. Not only has her skin improved dramatically, but she's gained so much confidence. The routine is simple enough that she sticks with it, and the explanations helped her understand why she was breaking out in the first place.",
      name: "Sarah K.",
      age: "",
      duration: "",
      note: "Purchased for teen daughter",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          What Others Are Saying
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover-scale"
              variants={fadeIn}
              custom={index * 0.2}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  {testimonial.age && testimonial.duration ? (
                    <p className="text-sm text-gray-600">Age {testimonial.age}, Using ClearTone for {testimonial.duration}</p>
                  ) : (
                    <p className="text-sm text-gray-600">{testimonial.note}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
