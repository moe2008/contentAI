import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      Productname,
      Categorie,
      Characteristics,
      Audience,
      OtherInformations,
      Style,
      Tone,
    } = req.body;

    if (
      !Productname ||
      !Categorie ||
      !Characteristics ||
      !Audience ||
      OtherInformations
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a E-Commerce Content Creator and help the user create product descriptions. Act like you are a professional.",
          },
          {
            role: "user",
            content: `Make a product description for my product: ${Productname}. You can categorize my product in ${Categorie}. My product has following characterisics:  ${Characteristics}.My Audience are ${Audience}. Add additional Information about ${OtherInformations}. Write in in style ${Style} and tonality ${Tone}`,
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