import React from "react";
import UserTextOption from "@/components/UI/UserTextOption";
import SelectOption from "@/components/UI/SelectOption";
const BlogPostTab = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Topic"
            description="Important points that should be addressed in the blog post."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Keywords"
            description="Relevant keywords to be included in the blog post."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Conclusion"
            description="Desired conclusions or calls to action."
            classes="w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Audience"
            description="Describe your Audience (Age, Sex, etc.)"
            classes="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        <div className="flex flex-col w-full md:w-1/3">
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
          />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
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

export default BlogPostTab;
