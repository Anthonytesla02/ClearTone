import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion-variants';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Is this routine suitable for all skin types?",
      answer: "Yes! The ClearTone guide includes specific modifications for dry, oily, combination, and sensitive skin types. All product recommendations include options for different skin concerns, and the routine can be adapted based on your unique needs."
    },
    {
      question: "How long until I see results?",
      answer: "Most people notice their skin becoming calmer and less inflamed within the first 2 weeks. Significant improvement in acne usually appears within 4-6 weeks, and maximum results are typically seen around the 12-week mark. Remember, consistency is key!"
    },
    {
      question: "Do I need expensive products for this to work?",
      answer: "Absolutely not! The guide includes product recommendations at every price point, from budget-friendly drugstore options to mid-range selections. The routine focuses on using the right ingredients in the right order, not on luxury brands or fancy packaging."
    },
    {
      question: "What format is the e-book delivered in?",
      answer: "The ClearTone guide is delivered as a downloadable PDF that you can read on any device. It includes printable routine trackers and checklists to help you stay consistent. After purchase, you'll receive an email with your download link for instant access."
    },
    {
      question: "How is this different from other acne guides?",
      answer: "ClearTone is based on scientific research and real-world testing, not just theory. It focuses on fixing your skin barrier (which many acne treatments damage), provides specific product recommendations, and includes emergency protocols for flare-ups. The routine is designed to be sustainable long-term, not a quick fix that stops working."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We stand behind our routine with a 60-day money-back guarantee. If you follow the steps consistently for 60 days and don't see improvement, simply email us for a full refund. We believe in this system and want you to try it risk-free."
    }
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
          Frequently Asked Questions
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index * 0.1}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors font-montserrat font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
