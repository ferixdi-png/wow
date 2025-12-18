
export interface AiTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  demoType: 'text' | 'image' | 'video' | 'music' | 'avatar';
  color: string;
}

export interface ProfitData {
  name: string;
  cost: number;
  retail: number;
  profit: number;
}
