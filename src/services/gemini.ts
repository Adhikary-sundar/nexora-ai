import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return response.text ?? "No response";
  } catch (error) {
    console.error("Gemini Full Error:", error);

    if (error instanceof Error) {
      return error.message;
    }

    return JSON.stringify(error);
  }
}