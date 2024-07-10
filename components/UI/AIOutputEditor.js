import { Textarea } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const AIOutputEditor = (props) => {
  const [isUrl, setIsUrl] = useState(false);

  useEffect(() => {
    if (props.answer) {
      if (props.answer.startsWith("https:")) {
        setIsUrl(true);
      }
    }
  }, [props.answer]);

  return (
    <div className="w-full sm:w-3/4 min-h-full mb-12 mt-4 sm:mb-4 relative aioAnimation">
      {!props.answer && (
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 text-5xl">
          Loading...
        </h1>
      )}
      {isUrl && (
        <div className="flex w-full justify-center items-center">
          <img src={props.answer} />{" "}
        </div>
      )}
      {!isUrl && (
        <Textarea
          color="purple"
          className="resize-none min-h-[380px] text-white"
          label="Generated Content"
          readOnly={true}
          value={props.answer}
        />
      )}
    </div>
  );
};

export default AIOutputEditor;
