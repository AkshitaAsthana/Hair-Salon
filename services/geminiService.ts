
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStyleConsultation = async (history: ChatMessage[], userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `You are the AI Style Consultant for Auric Hair Collective, a high-end luxury salon template. 
        Your goal is to provide expert hair advice, recommend styles based on face shapes, skin tones, and hair types. 
        Be professional, elegant, and encouraging. 
        Keep responses concise but highly knowledgeable. 
        Recommend premium services like bespoke coloring or high-end styling when appropriate.`,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting to my creative mind. How else can I help you styling today?";
  } catch (error) {
    console.error("Gemini Consultation Error:", error);
    return "I'm currently offline for maintenance. Please feel free to book a physical consultation with our master stylists!";
  }
};
