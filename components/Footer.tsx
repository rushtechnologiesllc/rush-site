import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <div className="mb-8">
          <img src="logos.jpeg" alt="Rush Logo" className="w-16 h-16 rounded-xl mx-auto mb-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500" />
          <span className="text-zinc-500 font-medium text-sm tracking-wider uppercase">Verified student ticket resale</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-zinc-400">
          <a href="contact.html" className="hover:text-white transition-colors">Contact</a>
          <a href="terms.html" className="hover:text-white transition-colors">Terms</a>
          <a href="privacy.html" className="hover:text-white transition-colors">Privacy</a>
        </div>

        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Rush Technologies LLC — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
