
import React from 'react';
import { 
  Image, 
  Type, 
  Video, 
  Music, 
  Cpu,
  BarChart3,
  Globe,
  Zap,
  Target,
  Users,
  Megaphone,
  Search,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { AiTool, ProfitData } from './types';

export const AI_TOOLS: AiTool[] = [
  {
    id: 'marketing-visuals',
    name: 'Маркетинговые Визуалы',
    description: 'Генерация баннеров для FB/Instagram. Закупка: 10₽. Твоя цена: 20₽ (Маржа ×2).',
    icon: 'Image',
    demoType: 'image',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    id: 'seo-content',
    name: 'SEO-Контент & GPT-4',
    description: 'Статьи и блоги для поискового продвижения. Закупка: 5₽. Твоя цена: 10₽ (Маржа ×2).',
    icon: 'Type',
    demoType: 'text',
    color: 'from-purple-400 to-pink-600'
  },
  {
    id: 'video-ads',
    name: 'Рекламные Видео',
    description: 'Профессиональные ролики через Runway ML. Закупка: 50₽. Твоя цена: 100₽ (Маржа ×2).',
    icon: 'Video',
    demoType: 'video',
    color: 'from-orange-400 to-red-600'
  },
  {
    id: 'audio-tracks',
    name: 'Аудио-брендинг',
    description: 'Фоновые треки и озвучка в Hi-Fi качестве. Закупка: 15₽. Твоя цена: 30₽ (Маржа ×2).',
    icon: 'Music',
    demoType: 'music',
    color: 'from-green-400 to-emerald-600'
  }
];

export const BUSINESS_PROCESS = [
  {
    step: "01",
    title: "Доступ к 50+ AI",
    desc: "Подключаем единый шлюз ко всем топовым нейросетям мира через REST API.",
    icon: <Globe className="text-cyan-400" />
  },
  {
    step: "02",
    title: "Маржа ×2",
    desc: "Ты продаешь генерации клиентам ровно в 2 раза дороже закупочной стоимости.",
    icon: <TrendingUp className="text-emerald-400" />
  },
  {
    step: "03",
    title: "Масштабирование",
    desc: "Автоматизированная система биллинга берет на себя все расчеты и транзакции.",
    icon: <Zap className="text-yellow-400" />
  }
];

export const TARGET_AUDIENCE = [
  {
    title: "Маркетологи",
    desc: "Создание рекламных материалов, которые повышают конверсии и экономят бюджет.",
    icon: <Megaphone className="w-8 h-8 text-blue-400" />
  },
  {
    title: "SMM-Агентства",
    desc: "Массовая генерация контента для сотен клиентов с минимальными затратами.",
    icon: <Users className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Контент-Менеджеры",
    desc: "Автоматизация написания SEO-статей и постов для любых ниш бизнеса.",
    icon: <Search className="w-8 h-8 text-cyan-400" />
  }
];

export const PROFIT_CHART_DATA: ProfitData[] = [
  { name: 'Старт', cost: 10, retail: 20, profit: 10 },
  { name: '100 зап.', cost: 1000, retail: 2000, profit: 1000 },
  { name: '500 зап.', cost: 5000, retail: 10000, profit: 5000 },
  { name: '1000 зап.', cost: 10000, retail: 20000, profit: 10000 },
];

export const TESTIMONIALS = [
  {
    name: "Маркетолог X",
    text: "Я использую нейросети для генерации текстов и увеличил конверсии в 2 раза.",
    role: "Performance Lead"
  },
  {
    name: "Дмитрий Ф.",
    text: "Система закупки по 10₽ и продажи по 20₽ — это самый понятный ROI, который я видел.",
    role: "Business Owner"
  }
];
