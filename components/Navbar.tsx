import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    window.location.href = isIOS ? "https://apps.apple.com/us/app/id6744488351" : "not-ios.html";
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass-panel rounded-full px-5 pl-6 py-3 flex items-center justify-between w-full max-w-[320px] shadow-2xl shadow-black/50 border border-white/10 backdrop-blur-xl bg-black/30">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-lg text-white">RUSH</span>
        </div>

        <button 
          onClick={handleDownload}
          className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all transform hover:scale-105"
        >
          Download
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
