
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, User } from 'lucide-react';

const NAMES = ['Alex', 'Dmitry', 'Elena', 'Maria', 'Ivan', 'Sofia', 'Artem', 'Olga'];
const TYPES = ['Image Generation', 'GPT-4 Analysis', 'Music Mastering', 'Video Render'];

const LiveRequestTicker: React.FC = () => {
  const [requests, setRequests] = useState<{id: number, name: string, type: string, profit: number}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newReq = {
        id: Date.now(),
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        type: TYPES[Math.floor(Math.random() * TYPES.length)],
        profit: Math.floor(Math.random() * 15) + 5
      };
      setRequests(prev => [newReq, ...prev.slice(0, 4)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-xs overflow-hidden">
      <div className="flex items-center space-x-2 text-cyan-400 mb-4 border-b border-slate-800 pb-2">
        <Zap size={14} className="animate-pulse" />
        <span className="uppercase tracking-widest">Live Activity Log</span>
      </div>
      <div className="space-y-3 h-48 overflow-hidden relative">
        <AnimatePresence initial={false}>
          {requests.map((req) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex items-center justify-between p-2 bg-slate-900/50 rounded border border-slate-800"
            >
              <div className="flex items-center space-x-2">
                <User size={12} className="text-slate-500" />
                <span className="text-slate-300">{req.name}</span>
              </div>
              <span className="text-cyan-600 truncate max-w-[100px]">{req.type}</span>
              <span className="text-emerald-500 font-bold">+{req.profit}₽</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiveRequestTicker;
