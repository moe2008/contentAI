import React, { useEffect } from "react";
import { useParams } from "@/context/ParamsContext";
import { Textarea } from "@material-tailwind/react";

const UserTextOption = (props) => {
  const { setParams } = useParams();

  return (
    <div className={`${props.classes} animationBox`}>
      <Textarea
        color="purple"
        className="text-white min-h-60"
        variant="outlined"
        label={props.name}
        placeholder={props.description}
        onChange={(val) =>
          setParams((prevParams) => ({
            ...prevParams,
            [props.name]: val.target.value,
          }))
        }
      />
    </div>
  );
};

export default UserTextOption;
