import { useEffect, useState, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: stop observing once revealed
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isVisible];
}
