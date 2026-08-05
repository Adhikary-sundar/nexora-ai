import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const MODEL = "gemini-3.6-flash";

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
    });

    return response.text ?? "No response.";
  } catch (error) {
    console.error("Gemini Error:", error);

    if (error instanceof Error) {
      return error.message;
    }

    return "❌ Failed to generate response.";
  }
}

export async function summarizePage(pageContent: string): Promise<string> {
  try {
    const prompt = `
You are an expert webpage summarizer.

Summarize the following webpage into:
- 5 to 8 concise bullet points
- Keep the important information only
- Use simple English
- Ignore advertisements, menus, navigation and footer

Webpage:

${pageContent.slice(0, 15000)}
`;

    const response = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
    });

    return response.text ?? "No summary generated.";
  } catch (error) {
    console.error("Summary Error:", error);

    if (error instanceof Error) {
      return error.message;
    }

    return "❌ Failed to summarize webpage.";
  }
}