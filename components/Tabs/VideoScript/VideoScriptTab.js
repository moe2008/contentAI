import React from "react";
import UserTextOption from "@/components/UI/UserTextOption";
import SelectOption from "@/components/UI/SelectOption";
const VideoScriptTab = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Topic"
            description="Topic of Video"
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Audience"
            description="Describe your Audience (Age, Sex, etc.)"
            classes="w-full z-20"
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        <div className="flex flex-col w-full gap-4 md:w-1/3">
          <SelectOption
            classes="z-30"
            name="Length"
            options={["< 30 sec", "30 sec - 1 min", "> 1 min"]}
          />

          <SelectOption
            name="Style"
            classes="z-20"
            options={[
              "Formal",
              "Informal",
              "Humorous",
              "Serious",
              "Friendly",
              "Professional",
            ]}
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
          />
        </div>
      </div>
    </div>
  );
};

export default VideoScriptTab;
