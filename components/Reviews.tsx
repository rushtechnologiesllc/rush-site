import React from 'react';
import { motion } from 'framer-motion';

const Reviews: React.FC = () => {
  const reviews = [
    { text: "Rush made buying event tickets way less stressful—no scams. Super fast & easy!", author: "Maya", school: "Ohio State" },
    { text: "Got my concert tickets instantly and connected with another student. Love the clean design!", author: "Chase", school: "NYU" },
    { text: "The best way to sell my game day tickets. Payout was instant right to my account.", author: "Alice", school: "USC" },
    { text: "All my friends use Rush—it’s trusted on my campus.", author: "Chris", school: "Boston College" },
    { text: "Finally an app that actually verifies students. Felt so much safer.", author: "Sarah", school: "UCLA" },
  ];

  return (
    <section id="reviews" className="w-full overflow-hidden py-20 relative">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Real Student Reviews</h2>
        <p className="text-zinc-500 text-lg">Hear from the community.</p>
      </div>

      {/* Gradient masks for smooth fade out on edges */}
      <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

      <div className="flex overflow-hidden gap-6 mask-image-linear-gradient">
        <motion.div 
          className="flex gap-6 pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the array to create seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-3xl w-[320px] md:w-[400px] flex flex-col justify-between border border-white/5 hover:border-white/20 transition-colors"
            >
              <p className="text-lg text-zinc-200 font-medium mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg">{review.author}</span>
                <span className="text-sm text-zinc-500 font-medium">{review.school}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
