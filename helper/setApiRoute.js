export const setApiRoute = (name) => {
  var url = "";
  if (name === "Social Media Post") {
    url = "/api/generateSocialMediaPost";
  }
  if (name === "Product Description") {
    url = "/api/generateProductDescription";
  }
  if (name === "Blog Post") {
    url = "/api/generateBlogPost";
  }

  if (name === "Thumbnail") {
    url = "/api/generateThumbnail";
  }

  if (name === "Video Script") {
    url = "/api/generateVideoScript";
  }

  return { url };
};
