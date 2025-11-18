import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <Hero />
        
        <div className="h-24 md:h-32" />

        <Stats />
        
        <div className="h-24 md:h-40" />

        <Features />
        
        <div className="h-24 md:h-40" />

        <Reviews />
        
        <div className="h-20 md:h-24" />

        {/* Pre-Footer CTA */}
        <section className="w-full max-w-4xl mx-auto px-2 mb-32 text-center">
          <div className="rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-900/40 to-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 relative z-10">
              Join the Rush
            </h2>
            <p className="text-zinc-400 text-xl mb-10 relative z-10 max-w-xl mx-auto leading-relaxed">
              Join thousands of students buying and selling tickets safely on campus.
            </p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                window.location.href = isIOS ? "https://apps.apple.com/us/app/id6744488351" : "not-ios.html";
              }}
              className="relative z-10 inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get the App <ArrowRight size={20} />
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
