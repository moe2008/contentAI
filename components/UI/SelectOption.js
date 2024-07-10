import React, { useState, useEffect } from "react";
import { Select, Option, Typography } from "@material-tailwind/react";
import { useParams } from "@/context/ParamsContext";

const SelectOption = (props) => {
  const { setParams } = useParams();

  return (
    <div className={`${props.classes} animationBox z-10`}>
      <Select
        id={props.name}
        size="lg"
        required
        label={<h1 className="">{props.name}</h1>}
        color="purple"
        className="text-base-label"
        onChange={(val) =>
          setParams((prevParams) => ({ ...prevParams, [props.name]: val }))
        }
      >
        {props.options.map((option) => (
          <Option className="opacity-100 black" value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectOption;
