import { useState, useEffect } from 'react';
import { IoArrowUp } from 'react-icons/io5';
import { scrollToTop } from '../../utils/helpers';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary-dark transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <IoArrowUp size={20} />
      </button>
    )
  );
}
