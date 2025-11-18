import React from 'react';
import { motion, Variants } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    { value: "100k+", label: "Tickets Transacted", span: "col-span-1 md:col-span-2" },
    { value: "100%", label: "Secure", span: "col-span-1" },
    { value: "5+", label: "Universities", span: "col-span-1" },
    { value: "50k+", label: "Happy Students", span: "col-span-1 md:col-span-2" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Trusted by Students.
        </motion.h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className={`relative group bg-zinc-900/20 border border-white/5 rounded-3xl p-10 flex flex-col items-center justify-center text-center overflow-hidden hover:bg-white/5 transition-colors duration-500 ${stat.span}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
                <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                {stat.value}
                </div>
                <div className="text-zinc-500 font-medium text-lg">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
