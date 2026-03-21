import { useEffect } from 'react';

// This hook implements a robust smooth scrolling behavior for anchor links.
const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (event) => {
      const href = event.currentTarget.getAttribute('href');

      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []); // Empty dependency array ensures this runs only once
};

export default useSmoothScroll;
