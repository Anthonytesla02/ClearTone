import { useState, useEffect } from 'react';

interface CountdownState {
  hours: string;
  minutes: string;
  seconds: string;
}

export const useCountdown = (initialHours = 12): CountdownState => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    hours: String(initialHours).padStart(2, '0'),
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Set the target time to the specified hours from when the component first mounts
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + initialHours);
    
    const updateCountdown = () => {
      const currentTime = new Date();
      const difference = targetTime.getTime() - currentTime.getTime();
      
      // If the target time has passed, reset it to a new 12-hour period
      if (difference < 0) {
        const newTargetTime = new Date();
        newTargetTime.setHours(newTargetTime.getHours() + 12); // Always reset to 12 hours
        targetTime.setTime(newTargetTime.getTime());
        return;
      }
      
      // Calculate hours, minutes, seconds
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };
    
    // Initialize
    updateCountdown();
    
    // Set up interval
    const interval = setInterval(updateCountdown, 1000);
    
    // Cleanup
    return () => clearInterval(interval);
  }, [initialHours]);
  
  return timeLeft;
};
