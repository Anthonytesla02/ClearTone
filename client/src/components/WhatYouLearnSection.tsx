import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion-variants';

const WhatYouLearnSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Cleansing Secrets",
      description: "Learn the right way to cleanse that removes impurities without stripping your skin's natural barrier.",
      bonus: "+ Recommended gentle cleansers for every skin type"
    },
    {
      number: 2,
      title: "Exfoliation Mastery",
      description: "Discover how to safely use chemical exfoliants to unclog pores and prevent breakouts.",
      bonus: "+ Weekly exfoliation schedule for all skin concerns"
    },
    {
      number: 3,
      title: "Treatment Protocols",
      description: "The exact active ingredients that target acne bacteria, reduce inflammation, and heal breakouts fast.",
      bonus: "+ How to layer products for maximum effectiveness"
    },
    {
      number: 4,
      title: "Moisture Balance",
      description: "Why even oily, acne-prone skin needs the right moisturizer and how to choose one that won't clog pores.",
      bonus: "+ Non-comedogenic moisturizer recommendations"
    },
    {
      number: 5,
      title: "Sun Protection",
      description: "The crucial step most acne routines miss - how to protect your skin without causing breakouts.",
      bonus: "+ Lightweight SPF options for acne-prone skin"
    },
    {
      number: 6,
      title: "Weekly Schedule",
      description: "A complete 7-day routine template that tells you exactly what to do morning and night for optimal results.",
      bonus: "+ Printable routine tracker included"
    }
  ];

  const bonuses = [
    {
      title: "Hormonal Breakout Rescue",
      description: "Quick-action steps to prevent and treat those monthly chin and jawline breakouts."
    },
    {
      title: "Big Event Skin Prep",
      description: "7-day plan to get your skin photo-ready for special occasions."
    },
    {
      title: "Overnight Spot Treatment",
      description: "How to safely shrink a surprise pimple when you need results fast."
    },
    {
      title: "Post-Acne Mark Fading",
      description: "The exact ingredients that help fade stubborn red and brown marks."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-4">
            What You'll Discover Inside
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
            A complete, step-by-step system for clear, healthy skin - no guesswork required
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-cream rounded-xl p-6 shadow-md relative step-card"
              variants={fadeIn}
              custom={index * 0.1}
            >
              <div className="count-box bg-peach text-white">{step.number}</div>
              <h3 className="font-montserrat font-bold text-xl mb-3 pt-4">{step.title}</h3>
              <p className="text-gray-700 mb-4">{step.description}</p>
              <p className="text-sm text-lavender font-semibold">{step.bonus}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-lavender bg-opacity-10 p-8 rounded-xl max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
            <span className="text-lavender">BONUS:</span> Skin Emergency Protocols
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm"
                variants={fadeIn}
                custom={index * 0.1 + 0.3}
              >
                <h4 className="font-montserrat font-bold text-lg mb-2">{bonus.title}</h4>
                <p className="text-gray-700">{bonus.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
