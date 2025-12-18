
import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_PROCESS } from '../constants';

const ProcessStepper: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto py-12 px-4">
      {BUSINESS_PROCESS.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl group hover:border-cyan-500/50 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2 }}
        >
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-slate-950 shadow-lg">
            {item.step}
          </div>
          <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
          <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          
          {idx < 2 && (
            <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div 
                className="w-8 h-8 text-cyan-500/30"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessStepper;
