import React from "react";
import UserTextOption from "@/components/UI/UserTextOption";
import SelectOption from "@/components/UI/SelectOption";
const ThumbnailTab = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Title"
            description="Text to be included on the thumbnail."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Imagedescription"
            description="Description of the desired image."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Targetplatform"
            description="Selection of the platform for which the thumbnail is intended (e.g., YouTube, Instagram, Blog)."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Dimensions"
            description=" Preferred dimensions or aspect ratio for the thumbnail."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Colorscheme"
            description="Preferred colors or themes."
            classes="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        <div className="flex flex-col w-full md:w-1/2">
          <SelectOption
            name="Style"
            options={[
              "Minimalist",
              "Bold and Bright",
              "Professional",
              "Artistic",
              "Fun and Playful",
              "Luxurious",
              "Technical",
              "Informative",
              "Narrative",
              "Promotional",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ThumbnailTab;
