
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [requests, setRequests] = useState(1000);
  const costPerGen = 10; // rubles
  const retailPerGen = 20; // rubles (strictly x2)
  
  const totalCost = requests * costPerGen;
  const totalRevenue = requests * retailPerGen;
  const netProfit = totalRevenue - totalCost;

  return (
    <motion.div 
      className="bg-slate-900/90 border border-cyan-500/20 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.1)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center space-x-4 mb-10">
        <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
          <Calculator size={32} />
        </div>
        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Калькулятор прибыли ×2</h3>
      </div>

      <div className="space-y-10">
        <div>
          <div className="flex justify-between items-center mb-6">
            <label className="text-slate-400 font-mono uppercase tracking-widest text-xs">Запросов в месяц</label>
            <span className="text-2xl font-black text-cyan-400 font-mono">{requests.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="100" 
            max="10000" 
            step="100"
            value={requests} 
            onChange={(e) => setRequests(Number(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800">
            <p className="text-slate-500 text-xs uppercase font-mono mb-2 tracking-widest">Твоя закупка</p>
            <p className="text-3xl font-black text-white">{totalCost.toLocaleString()} ₽</p>
            <p className="text-[10px] text-slate-600 mt-2 font-mono">10₽ / запрос</p>
          </div>
          <div className="p-6 rounded-3xl bg-cyan-500/5 border border-cyan-500/20">
            <p className="text-cyan-500/60 text-xs uppercase font-mono mb-2 tracking-widest">Продажа клиенту</p>
            <p className="text-3xl font-black text-cyan-400">{totalRevenue.toLocaleString()} ₽</p>
            <p className="text-[10px] text-cyan-600 mt-2 font-mono">20₽ / запрос</p>
          </div>
        </div>

        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp size={80} />
          </div>
          <p className="text-emerald-500 text-xs uppercase font-mono mb-2 font-bold tracking-[0.2em]">Чистая прибыль (Маржа ×2)</p>
          <p className="text-5xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            {netProfit.toLocaleString()} ₽
          </p>
        </div>

        <p className="text-slate-500 text-xs text-center font-medium leading-relaxed uppercase tracking-tighter opacity-60">
          Математика успеха: Каждая генерация приносит тебе +100% прибыли
        </p>
      </div>
    </motion.div>
  );
};

export default PricingCalculator;
