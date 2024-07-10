import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Topic, Keywords, Conclusion, Audience, Style, Tone } = req.body;

    if (!Topic || !Keywords || !Conclusion || !Audience || !Style || !Tone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a Blog Post Content Creator and help the user create Blog post. Act like you are a professional.",
          },
          {
            role: "user",
            content: `Make a Blog Post about: ${Topic}. Use Keywords: ${Keywords} The Conclusion of the Blog Post is ${Conclusion}. My Audience are ${Audience}.  Write in in style ${Style} and tonality ${Tone}`,
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
