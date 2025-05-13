
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  className = "" 
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
