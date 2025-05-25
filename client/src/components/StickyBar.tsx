import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/hooks/use-countdown';
import coverImage from '@assets/file_000000002c0c61f89c8d0351a7b30c1c.png';

const StickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { hours, minutes, seconds } = useCountdown();

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 shadow-lg p-3 z-50"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-3 sm:mb-0">
              <img 
                src={coverImage} 
                alt="ClearTone" 
                className="w-12 h-12 object-cover rounded-full mr-3"
              />
              <div>
                <p className="font-montserrat font-bold text-darkgray text-sm">ClearTone E-Book</p>
                <p className="text-sm text-gray-600 line-through">$39.99</p>
                <p className="font-bold text-teal">$19.99 Today Only!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-3 sm:mb-0">
              <div className="bg-darkgray text-white p-2 rounded text-center w-14">
                <span className="text-lg font-bold">{hours}</span>
                <p className="text-xs">Hours</p>
              </div>
              <div className="bg-darkgray text-white p-2 rounded text-center w-14">
                <span className="text-lg font-bold">{minutes}</span>
                <p className="text-xs">Mins</p>
              </div>
              <div className="bg-darkgray text-white p-2 rounded text-center w-14">
                <span className="text-lg font-bold">{seconds}</span>
                <p className="text-xs">Secs</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="cta-button bg-teal hover:bg-teal-600 text-white py-3 px-6 rounded-full font-montserrat font-bold text-center w-full sm:w-auto"
            >
              GET YOUR COPY NOW
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
