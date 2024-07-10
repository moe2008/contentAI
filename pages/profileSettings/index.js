import React from "react";
import ProfileSettings from "@/components/UI/ProfileSettings";

const index = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-evenly items-center">
      <div className="flex w-screen justify-center">
        <h1 className="text-white text-2xl">Profile Settings</h1>
      </div>
      <ProfileSettings />
    </div>
  );
};

export default index;
