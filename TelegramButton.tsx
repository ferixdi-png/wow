
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface TelegramButtonProps {
  label: string;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ label }) => {
  return (
    <motion.a
      href="https://t.me/dmitriy_ferixdi"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center justify-center px-12 py-6 font-black text-white transition-all duration-300 bg-transparent rounded-full focus:outline-none overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Dynamic Glow Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-90 group-hover:opacity-100"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Outer Pulse */}
      <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-500/30 blur-xl animate-pulse group-hover:blur-2xl transition-all" />

      {/* Content */}
      <span className="relative z-10 flex items-center space-x-4 text-xl tracking-tight">
        <Send className="group-hover:rotate-12 transition-transform duration-300" size={28} />
        <span className="uppercase">{label}</span>
      </span>
      
      {/* Scanning effect */}
      <motion.div 
        className="absolute inset-0 w-1/4 h-full bg-white/40 -skew-x-12 translate-x-[-200%]"
        animate={{ translateX: ["-200%", "400%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.a>
  );
};

export default TelegramButton;
