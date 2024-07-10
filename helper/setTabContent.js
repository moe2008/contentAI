import React from "react";
import SocialMediaTab from "@/components/Tabs/SocialMedia/SocialMediaTab";
import ProductTab from "@/components/Tabs/Product/ProductTab";
import BlogPostTab from "@/components/Tabs/BlogPost/BlogPostTab";
import ThumbnailTab from "@/components/Tabs/Thumbnail/ThumbnailTab";
import VideoScriptTab from "@/components/Tabs/VideoScript/VideoScriptTab";

export const setTabContent = (name, setContent, clearParams, setActiveTab) => {
  clearParams();
  setActiveTab(name);
  switch (name) {
    case "Social Media Post":
      setContent(<SocialMediaTab />);
      break;
    case "Product Description":
      setContent(<ProductTab />);
      break;
    case "Blog Post":
      setContent(<BlogPostTab />);
      break;
    case "Thumbnail":
      setContent(<ThumbnailTab />);
      break;
    case "Video Script":
      setContent(<VideoScriptTab />);
      break;
    default:
      setContent(<SocialMediaTab />);
  }
};
