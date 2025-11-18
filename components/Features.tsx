import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, GraduationCap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-16 text-center">
         <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
        >
          Built for speed. <br/> <span className="text-zinc-500">Designed for trust.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] relative overflow-hidden group hover:border-white/20 transition-colors"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
              <Zap size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Instant Payments.</h3>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Send and receive money instantly. No middlemen, no waiting periods. Funds go straight to your account the moment the ticket is transferred.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 bg-zinc-900/30 border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group hover:border-white/20 transition-colors"
        >
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
           
           <div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Student Verified.</h3>
            <p className="text-zinc-400 leading-relaxed">
              Our rigorous verification ensures you only deal with real students from your campus. No bots. No scalpers.
            </p>
           </div>
        </motion.div>

         {/* Card 3 */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 lg:col-span-3 bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden hover:border-white/20 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="w-full">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Campus First.</h3>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              Tailored specifically for your university. We filter out the noise so you only see events and tickets relevant to your school community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
