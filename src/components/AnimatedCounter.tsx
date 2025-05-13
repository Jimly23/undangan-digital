
import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutQuart for smooth slowing down at the end
      const easing = 1 - Math.pow(1 - percentage, 4);
      countRef.current = Math.floor(easing * end);
      setCount(countRef.current);
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration]);

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  );
};

export default AnimatedCounter;
