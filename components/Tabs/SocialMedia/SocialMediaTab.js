import React from "react";
import SelectOption from "@/components/UI/SelectOption";
import UserTextOption from "@/components/UI/UserTextOption";

const SocialMediaTab = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 w-full flex-wrap justify-center">
        <SelectOption
          name="Platform"
          options={["Twitter", "Instagram", "TikTok", "LinkedIn"]}
          classes="w-full md:w-1/4 z-40"
        />
        <SelectOption
          name="Style"
          options={[
            "Formal",
            "Informal",
            "Humorous",
            "Serious",
            "Friendly",
            "Professional",
          ]}
          classes="w-full md:w-1/3 z-20"
        />
        <SelectOption
          name="Tone"
          options={[
            "Conversational",
            "Technical",
            "Persuasive",
            "Informative",
            "Narrative",
            "Descriptive",
          ]}
          classes="w-full md:w-1/4 z-22"
        />
      </div>
      <div className="flex gap-4 w-full flex-wrap justify-center">
        <UserTextOption
          name="Audience"
          description="Describe your Audience (Age, Sex, etc.)"
          classes="w-full md:w-2/5"
        />
        <UserTextOption
          name="Hashtags"
          description="Type in your Hashtags"
          classes="w-full md:w-2/5"
        />
        <UserTextOption
          name="About"
          description="Type in your topic"
          classes="w-full md:w-2/5"
        />
      </div>
    </div>
  );
};

export default SocialMediaTab;
