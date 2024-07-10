import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Title, Imagedescription, Targetplatform, Dimensions, Colorscheme, Style } = req.body;

    if (!Title || !Imagedescription || !Targetplatform || !Dimensions || !Style || !Colorscheme) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const prompt = `Create a thumbnail for ${Targetplatform}. The title is ${Title}. I describe my image as following: ${Imagedescription}. The Image should be in dimension ${Dimensions}. Style: ${Style}, Color Scheme: ${Colorscheme}`;

      const response = await openai.images.generate({
        prompt,
        n: 1, // Number of images to generate
        size: "256x256", // Thumbnail size
      });

      res.status(200).json({ content: response.data[0].url });
    } catch (error) {
      console.error("Error generating image:", error);
      res.status(500).json({ error: "Error generating content" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}