/* eslint-disable no-unused-vars */
import React from "react";
import CircleAsset from "../../../../assets/CircleAsset";
import { skillSetAnimation } from "../../../animations/skillsetAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const SkillSet = () => {
  useGSAP(() => {
    skillSetAnimation();
  });

  return (
    <div className="h-screen sm:h-screen flex flex-col items-center p-4 bg-gray-300 dark:bg-darkMode-bg text-whiteMode-text dark:text-darkMode-text font-Technor justify-evenly">
      <div className="w-full sm:h-1/6 h-1/6 flex items-center justify-center">
        <h1 className="text-whiteMode-text dark:text-darkMode-text font-Technor justify-self-start">
          My Skillset
        </h1>
      </div>
      <div className="w-11/12 h-5/6 sm:h-3/4 flex flex-col items-center justify-center circleBox overflow-visible">
        
          <CircleAsset />
      
      </div>
    </div>
  );
};

export default SkillSet;
