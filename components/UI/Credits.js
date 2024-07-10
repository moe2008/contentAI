// components/UI/Credits.js
import React from "react";
import { useFetchCredits } from "@/helper/useFetchCredits";

const Credits = () => {
  const { credits } = useFetchCredits();

  return <h3 className="text-teal-500 mb-2 pr-4">Credits left {credits}</h3>;
};

export default Credits;
