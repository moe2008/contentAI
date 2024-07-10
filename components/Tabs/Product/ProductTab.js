import React from "react";
import SelectOption from "../../UI/SelectOption";
import UserTextOption from "../../UI/UserTextOption";

const ProductTab = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-full md:w-1/3">
          <UserTextOption name="Productname" description="Your Product Name" classes="w-full"/>
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption name="Categorie" description="Product Categorie" classes="w-full"/>
        </div>
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="Characteristics"
            description="Product Characteristics"
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
        <div className="w-full md:w-1/3">
          <UserTextOption
            name="OtherInformation"
            description="Advantages, Use Case, Material, Price, Brand etc."
            classes="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/3">
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
            classes="z-20"
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

export default ProductTab;
