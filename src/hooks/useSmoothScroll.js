import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Custom smooth scroll function with precise control
    const smoothScrollTo = (targetY, duration = 1500) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startY + distance * easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleLinkClick = (event) => {
      const href = event.currentTarget.getAttribute('href');

      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          const headerOffset = 80; // Account for any fixed headers
          const targetPosition = targetElement.offsetTop - headerOffset;
          smoothScrollTo(targetPosition, 1200); // 1.2 second smooth scroll
        }
      }
    };

    // Apply to all anchor links
    const addSmoothScrolling = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick); // Remove existing
        link.addEventListener('click', handleLinkClick);
      });
    };

    // Initial setup
    addSmoothScrolling();

    // Re-apply when DOM changes (for dynamic content)
    const observer = new MutationObserver(addSmoothScrolling);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      observer.disconnect();
    };
  }, []);
};

export default useSmoothScroll;
