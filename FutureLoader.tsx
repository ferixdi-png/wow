
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FutureLoaderProps {
  onComplete: () => void;
}

const FutureLoader: React.FC<FutureLoaderProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute w-64 h-64 border-2 border-cyan-500 rounded-full blur-[2px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 4], 
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />

          <motion.h1
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            ЦИФРОВАЯ ГАЛАКТИКА МАРКЕТИНГА.
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-cyan-400 font-mono font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            50+ НЕЙРОСЕТЕЙ В ОДНОМ БОТЕ.
          </motion.p>

          <motion.div
            className="mt-12 w-48 h-1 bg-slate-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full bg-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FutureLoader;
