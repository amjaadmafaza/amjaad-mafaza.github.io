import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const menuVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <header className="bg-black text-white py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Amjaad Mafaza</h1>
          {isMobile ? (
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          ) : (
            <ul className="flex space-x-6">
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-yellow-400 transition duration-300">Tentang</a></li>
              <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="hover:text-yellow-400 transition duration-300">Keahlian & Teknologi</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="hover:text-yellow-400 transition duration-300">Proyek</a></li>
              <li><a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="hover:text-yellow-400 transition duration-300">Testimonial</a></li>
            </ul>
          )}
        </nav>
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.ul
              className="mt-4 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="block py-2 hover:text-yellow-400 transition duration-300">Tentang</a></li>
              <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="block py-2 hover:text-yellow-400 transition duration-300">Keahlian & Teknologi</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="block py-2 hover:text-yellow-400 transition duration-300">Proyek</a></li>
              <li><a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="block py-2 hover:text-yellow-400 transition duration-300">Testimonial</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
