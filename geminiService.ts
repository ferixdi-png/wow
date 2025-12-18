
import { GoogleGenAI } from "@google/genai";

// Always use a named parameter for the API key and obtain it directly from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDemoText = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a 2-sentence futuristic vision or tagline based on this theme: ${prompt}. Keep it in Russian.`,
    });
    // The response.text property directly returns the generated string.
    return response.text || "Цифровое будущее уже наступило. Твои инструменты готовы.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Нейросеть генерирует будущее в реальном времени...";
  }
};
