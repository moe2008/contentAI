import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Platform, Style, Tone, Audience, Hastags, About } = req.body;

    if (!Platform || !Style || !Tone || !Audience) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a Social Media Content Creator and help the user create Social Media Post. Act like you are a professional.",
          },
          {
            role: "user",
            content: `Make a Social Media Post for ${Platform}. Write it in style ${Style} and tonality ${Tone}.My Audience are ${Audience}. Write about ${About} and use this hastags ${Hastags}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
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
