
import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import FutureLoader from './components/FutureLoader';
import NeonBackground from './components/NeonBackground';
import AiSlider from './components/AiSlider';
import ProfitChart from './components/ProfitChart';
import TelegramButton from './components/TelegramButton';
import PricingCalculator from './components/PricingCalculator';
import ProcessStepper from './components/ProcessStepper';
import LiveRequestTicker from './components/LiveRequestTicker';
import { TARGET_AUDIENCE, TESTIMONIALS } from './constants';
import { 
  ChevronDown, 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Server, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3, 
  Megaphone, 
  PlayCircle,
  Database,
  Lock
} from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (loading) {
    return <FutureLoader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden text-slate-100">
      <NeonBackground />
      
      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left z-[60] shadow-[0_0_15px_rgba(6,182,212,0.6)]" style={{ scaleX }} />

      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Animated Galaxy Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)] rounded-full animate-pulse-slow" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10 max-w-7xl"
        >
          <div className="inline-flex items-center space-x-3 px-8 py-3 rounded-full bg-slate-900/60 border border-cyan-500/30 text-cyan-400 font-mono text-sm mb-12 tracking-[0.3em] uppercase backdrop-blur-xl">
            <TrendingUp size={18} className="animate-bounce" />
            <span>ROI Optimizer Active: Margin x2</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black mb-8 leading-[0.85] text-white uppercase italic tracking-tighter drop-shadow-2xl">
            AI для бизнеса: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-600">
              Генерируй с маржей ×2!
            </span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-xl md:text-3xl text-slate-200 font-bold mb-16 leading-tight tracking-tight">
            50+ нейросетей для маркетинга, продвижения и профита. <br /> 
            <span className="text-cyan-400">Ты покупаешь генерацию за 10₽, а продаешь за 20₽. Чистая математика успеха.</span>
          </p>
          
          <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
            <div className="space-y-8">
              <TelegramButton label="Начни зарабатывать с AI" />
              <p className="text-slate-400 font-mono text-sm uppercase tracking-widest opacity-60">Direct Access: @dmitriy_ferixdi</p>
            </div>
            <div className="hidden lg:block scale-90">
              <LiveRequestTicker />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 animate-bounce cursor-pointer text-slate-500 hover:text-cyan-400 transition-colors"
          onClick={() => document.getElementById('business-plan')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={64} />
        </motion.div>
      </header>

      {/* 2. REAL BUSINESS PLAN */}
      <section id="business-plan" className="py-40 px-6 relative bg-slate-950/80 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="inline-flex items-center space-x-3 text-cyan-400 font-mono uppercase tracking-[0.4em] text-sm font-bold">
                <Briefcase size={24} />
                <span>Это реальный бизнес-план</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9]">
                Не просто «тема». <br /> <span className="text-blue-500">Система дохода.</span>
              </h2>
              <div className="space-y-8 text-xl text-slate-300 leading-relaxed font-medium">
                <p>
                  Мы предлагаем тебе не просто использовать нейросети для генерации контента, а построить прибыльный бизнес, 
                  где ты зарабатываешь на <b>разнице между закупочными ценами</b> и ценами для твоих клиентов.
                </p>
                <div className="p-10 bg-cyan-500/10 rounded-[2.5rem] border-l-8 border-cyan-500 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Zap size={100} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">Маржа ×2 в каждой сделке</h4>
                  <p className="text-slate-200">
                    Модель для генерации изображений стоит тебе <b>10₽</b>, а ты продаешь доступ за <b>20₽</b>. 
                    Твоя прибыль с каждой генерации — <b>10₽</b>. Без скрытых затрат.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <AiSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARGIN CALCULATION */}
      <section className="py-40 px-6 bg-slate-900/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center space-x-3 text-emerald-400 font-mono uppercase tracking-widest text-sm">
              <BarChart3 size={24} />
              <span>Финансовая визуализация</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter">Как работает маржа ×2?</h2>
            <p className="text-2xl text-slate-400 font-medium max-w-3xl mx-auto uppercase">
              Каждый запрос генерирует прибыль. Прозрачно. Понятно. Выгодно.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <PricingCalculator />
            <div className="space-y-10">
              <ProfitChart />
              <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 font-mono uppercase text-xs">Закупочная цена</span>
                  <span className="text-xl font-bold text-rose-500">10.00 ₽</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 font-mono uppercase text-xs">Продажная цена</span>
                  <span className="text-xl font-bold text-emerald-500">20.00 ₽</span>
                </div>
                <div className="h-px bg-slate-800 my-6" />
                <div className="flex items-center justify-between">
                  <span className="text-white font-black uppercase text-lg italic">Твоя прибыль</span>
                  <span className="text-3xl font-black text-cyan-400">×2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARKETING CAPABILITIES */}
      <section className="py-40 px-6 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic">AI в Маркетинге</h2>
            <p className="text-slate-500 font-mono uppercase tracking-[0.3em]">Scale your marketing with 50+ neural networks</p>
          </div>
          
          <ProcessStepper />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {TARGET_AUDIENCE.map((audience, i) => (
              <motion.div
                key={i}
                className="p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {audience.icon}
                </div>
                <h4 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter">{audience.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">{audience.desc}</p>
                <div className="mt-8 pt-6 border-t border-slate-800 text-cyan-400 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> Profit Optimized
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL STACK & SECURITY */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic">Техническое превосходство</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Мы используем архитектуру <b>Google Cloud</b> и <b>AWS</b> для моментальной обработки 50+ нейросетей через единое API. 
              Твои клиенты получают результат за секунды, а ты — стабильную прибыль.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-6 bg-cyan-500/10 text-cyan-400 rounded-3xl group-hover:rotate-12 transition-transform">
                <Database size={40} />
              </div>
              <h5 className="font-black text-white uppercase italic tracking-widest">Unified API</h5>
              <p className="text-slate-500 text-sm">Бесшовный доступ к 50+ моделям через один шлюз.</p>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-6 bg-purple-500/10 text-purple-400 rounded-3xl group-hover:rotate-12 transition-transform">
                <Lock size={40} />
              </div>
              <h5 className="font-black text-white uppercase italic tracking-widest">SSL Security</h5>
              <p className="text-slate-500 text-sm">Шифрование данных и авторизация OAuth 2.0.</p>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-6 bg-emerald-500/10 text-emerald-400 rounded-3xl group-hover:rotate-12 transition-transform">
                <ShieldCheck size={40} />
              </div>
              <h5 className="font-black text-white uppercase italic tracking-widest">24/7 Support</h5>
              <p className="text-slate-500 text-sm">Гарантированная работа всех систем без перебоев.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="p-12 rounded-[3.5rem] bg-slate-950 border border-slate-800 relative group overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -right-4 text-cyan-500/5 group-hover:scale-125 transition-transform">
                <PlayCircle size={120} />
              </div>
              <p className="text-2xl text-slate-300 italic mb-10 leading-relaxed font-medium">"{t.text}"</p>
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
                <div>
                  <h5 className="font-black text-white uppercase italic tracking-tighter text-xl">{t.name}</h5>
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <footer className="py-60 px-6 relative overflow-hidden bg-slate-950 text-center">
        {/* Deep Pulsing Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-cyan-600/10 blur-[250px] rounded-full animate-pulse-slow pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-9xl font-black text-white uppercase italic leading-[0.8] tracking-tighter">
              Ты готов <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">заработать?</span>
            </h2>
            <p className="text-2xl md:text-4xl text-slate-300 font-bold leading-tight tracking-tight max-w-4xl mx-auto">
              Напиши мне в Telegram прямо сейчас и узнай, <br /> 
              как начать свой прибыльный бизнес с маржей ×2!
            </p>
          </motion.div>
          
          <div className="flex flex-col items-center space-y-12">
            <TelegramButton label="Написать в Telegram" />
            <div className="flex items-center space-x-6 text-emerald-500/70 font-mono text-sm uppercase tracking-[0.4em] font-black">
              <ShieldCheck size={28} className="animate-bounce" />
              <span>Network Secure // @dmitriy_ferixdi</span>
            </div>
          </div>
        </div>
        
        <div className="mt-60 pt-16 border-t border-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-slate-600 font-mono text-[11px] tracking-[0.4em] uppercase">
            <span>Neural Business Core v4.2 // Latency: 42ms</span>
            <span className="my-6 md:my-0">© {new Date().getFullYear()} DMITRIY FERIXDI // NEURAL FUTURE HUB</span>
            <div className="flex space-x-10">
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Documentation</span>
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Profit API</span>
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Support</span>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.9); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
