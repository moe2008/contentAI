// pages/api/generate-content.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { role, type, topic, style, language } = req.body;

    if (!role || !type || !topic) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a writer for any kind of blogs, posts etc. Act like you are professional.",
          },
          {
            role: "user",
            content: `I am a ${role}. I need a ${type} about ${topic}. Write it in ${style} style and in the language ${language}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      console.log(response.choices[0].message.content.toString());

      res
        .status(200)
        .json({ content: response.choices[0].message.content.toString() });
    } catch (error) {
      res.status(500).json({ error: "Error generating content" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
