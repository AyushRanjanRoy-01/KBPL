import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (event) => {
      const targetId = event.currentTarget.getAttribute('href');
      if (targetId.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);
};

export default useSmoothScroll;
