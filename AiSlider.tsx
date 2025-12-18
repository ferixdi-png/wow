
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AI_TOOLS } from '../constants';
import * as LucideIcons from 'lucide-react';
import { generateDemoText } from '../services/geminiService';

const AiSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [demoContent, setDemoContent] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeTool = AI_TOOLS[activeIndex];
  const Icon = (LucideIcons as any)[activeTool.icon];

  // Automatically handle demo generation when active index changes
  useEffect(() => {
    let isMounted = true;
    
    const handleDemo = async () => {
      setIsGenerating(true);
      setDemoContent(null);
      
      try {
        if (activeTool.demoType === 'text') {
          const result = await generateDemoText(activeTool.name);
          if (isMounted) setDemoContent(result);
        } else if (activeTool.demoType === 'image') {
          // Simulate high-quality marketing visual generation
          await new Promise(resolve => setTimeout(resolve, 1800));
          if (isMounted) setDemoContent(`https://picsum.photos/seed/${activeTool.id + activeIndex}/800/600`);
        } else {
          await new Promise(resolve => setTimeout(resolve, 1500));
          if (isMounted) setDemoContent("Пакет маркетинговых материалов успешно сформирован. Конверсия прогнозируема.");
        }
      } catch (err) {
        if (isMounted) setDemoContent("Ошибка потока данных. Переподключение...");
      } finally {
        if (isMounted) setIsGenerating(false);
      }
    };

    handleDemo();
    return () => { isMounted = false; };
  }, [activeIndex, activeTool.name, activeTool.demoType, activeTool.id]);

  return (
    <div className="w-full max-w-6xl mx-auto py-4 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Selection Column */}
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2 font-black">
              Neural Module Selector
            </h3>
            <div className="h-px w-20 bg-cyan-500/30" />
          </div>
          
          {AI_TOOLS.map((tool, idx) => {
            const ToolIcon = (LucideIcons as any)[tool.icon];
            return (
              <motion.button
                key={tool.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-500 flex items-center space-x-6 relative overflow-hidden group ${
                  activeIndex === idx 
                    ? `bg-slate-900 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]` 
                    : `bg-slate-900/40 border-slate-800/50 hover:border-slate-700`
                }`}
                whileHover={{ x: 8 }}
              >
                {activeIndex === idx && (
                  <motion.div 
                    layoutId="active-glow"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" 
                  />
                )}
                
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <ToolIcon size={24} />
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className={`text-lg font-black uppercase italic tracking-tight transition-colors ${activeIndex === idx ? 'text-white' : 'text-slate-400'}`}>
                    {tool.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium group-hover:text-slate-400 transition-colors">
                    {tool.description}
                  </p>
                </div>

                {activeIndex === idx && (
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Demo Visualization Column - "The Terminal" */}
        <div className="relative min-h-[500px] bg-slate-950 rounded-[3rem] border border-slate-800 p-2 flex flex-col overflow-hidden shadow-2xl">
          {/* Inner Screen */}
          <div className="flex-1 rounded-[2.8rem] bg-slate-900/50 border border-white/5 relative flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Background Data Stream Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[8px] overflow-hidden leading-none break-all text-cyan-500">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="whitespace-nowrap">
                  {Math.random().toString(36).substring(2).repeat(10)}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="flex flex-col items-center z-10"
                >
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 border-2 border-cyan-500/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </div>
                  <div className="mt-8 space-y-2 text-center">
                    <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase animate-pulse">Инициализация потока</p>
                    <p className="text-slate-600 font-mono text-[10px] uppercase">Neural Core v4.2 // Accessing API</p>
                  </div>
                </motion.div>
              ) : demoContent ? (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full h-full flex flex-col items-center justify-center z-10"
                >
                  {activeTool.demoType === 'image' ? (
                    <div className="relative group w-full h-full max-h-[350px] flex items-center justify-center">
                      <motion.div 
                        className="absolute inset-0 bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <img 
                        src={demoContent} 
                        className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all duration-700" 
                        alt="AI Marketing Visual" 
                      />
                      {/* Scanning Line Overlay */}
                      <motion.div 
                        className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-md p-10 bg-slate-950/80 rounded-[2.5rem] border border-slate-800 shadow-inner relative overflow-hidden group">
                       <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center space-x-2 mb-6 text-cyan-500/40">
                          <LucideIcons.Terminal size={14} />
                          <span className="text-[10px] font-mono uppercase tracking-widest">Output Response</span>
                        </div>
                        <p className="font-mono text-cyan-100 leading-relaxed text-lg italic tracking-tight">
                          "{demoContent}"
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex items-center space-x-4 px-6 py-2 rounded-full bg-slate-950/50 border border-white/5 text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Preview Validated // Margin x2 Optimized</span>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Corner Decorative Elements */}
            <div className="absolute top-6 left-8 flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500/30" />
              <div className="w-2 h-2 rounded-full bg-amber-500/30" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
            </div>
            
            <div className="absolute top-6 right-8">
              <span className="text-[10px] font-mono text-slate-700 tracking-tighter uppercase select-none flex items-center gap-2">
                <LucideIcons.Activity size={10} className="text-cyan-500/50 animate-pulse" />
                Processing Module: {activeTool.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSlider;
