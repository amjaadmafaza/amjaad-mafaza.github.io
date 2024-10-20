import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50); // Dipercepat dari 150

  const textArray = ['Pengembang Web', 'Developer', 'Seller Product Digital'];
  const period = 1000; // Dipercepat dari 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % textArray.length;
    let fullText = textArray[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(30); // Dipercepat
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period / 4); // Dipercepat
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(50); // Dipercepat
    }
  };

  const whatsappNumber = "+6285726065368";
  const whatsappMessage = "Halo, saya tertarik dengan layanan Anda!";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-between overflow-hidden bg-gradient-animation py-8 px-4 sm:py-16"
    >
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Amjaad Mafaza
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-white h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {text}
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base mb-6 sm:mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Saya adalah seorang pengembang web dengan passion untuk 
            menciptakan website yang menarik dan fungsional.
          </motion.p>
          <motion.button 
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-semibold hover:bg-yellow-300 transition inline-block"
          >
            Hubungi Saya via WhatsApp
          </motion.button>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 relative flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="star-container w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 relative">
            <img 
              src="https://cdn.discordapp.com/attachments/1140684662096810166/1258388147486593064/SUKOWATI_STORE_Logo_-_White_with_Black_Background_-_5000x5000.png?ex=6714448a&is=6712f30a&hm=9119833a5c97bdae3c7bd7066808555047ffca86079f7bdca8ed77aeb3003500&" 
              alt="Hero Image" 
              className="star-image w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
