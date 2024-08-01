/* eslint-disable no-unused-vars */
import React from "react";
import me from "../../assets/MrRobot.jpg";

export const AboutHeader = () => {
  return (
    <div className="w-full min-h-4/5 overflow-x-hidden flex items-center flex-col lg:flex-row justify-center text-whiteMode-text dark:text-darkMode-text font-Technor gap-6 sm:gap-0">
      <div className="h-full flex flex-col justify-center lg:w-1/2 w-2/3 order-2 lg:order-1 text-xs text-left gap-5 sm:gap-4 ml-4 mr-4">
        <h1 className="text-5xl gradientText aboutText">MODEV</h1>
        <h1 className="text-3xl text-whiteMode-text dark:text-darkMode-text aboutText">
          Full Stack Developer
        </h1>
        <h1 className="text-2xl text-whiteMode-text dark:text-darkMode-text font-Supreme aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          viverra justo, vitae tincidunt quam. Cras porttitor ipsum id ultrices
          luctus. Curabitur sagittis nisi urna, id aliquam ex consectetur ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          viverra justo, vitae tincidunt quam. Cras porttitor ipsum id ultrices
          luctus. Curabitur sagittis nisi urna, id aliquam ex consectetur ut.
        </h1>
      </div>
      <div className="order-1 lg:order-2 h-full w-full md:w-1/2 lg:w-2/5 flex items-center ">
        <img
          src={me}
          className="w-full lg:h-full h-2/3 hero-image imgContainer order-1 sm:order-2 "
        />
      </div>
    </div>
  );
};
