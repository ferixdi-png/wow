
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PROFIT_CHART_DATA } from '../constants';
import { motion } from 'framer-motion';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-cyan-500 p-4 rounded-lg shadow-2xl backdrop-blur-md">
        <p className="text-cyan-300 font-bold mb-1">{payload[0].payload.name}</p>
        <p className="text-rose-400 text-sm">Расход: ${payload[0].value}</p>
        <p className="text-emerald-400 text-sm">Доход: ${payload[1].value}</p>
        <p className="text-white font-mono mt-2 pt-2 border-t border-slate-700">
          Чистая прибыль: <span className="text-cyan-400">${payload[0].payload.profit}</span>
        </p>
      </div>
    );
  }
  return null;
};

const ProfitChart: React.FC = () => {
  return (
    <motion.div 
      className="w-full h-[400px] bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={PROFIT_CHART_DATA}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRetail" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="cost" 
            stroke="#f43f5e" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorCost)" 
            animationDuration={2000}
          />
          <Area 
            type="monotone" 
            dataKey="retail" 
            stroke="#10b981" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRetail)" 
            animationDuration={2500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ProfitChart;
