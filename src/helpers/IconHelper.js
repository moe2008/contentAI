import Chakra from "../assets/Icons/ChakraUI";
import Firebase from "../assets/Icons/Firebase";
import Next from "../assets/Icons/NextJs";
import ReactIcon from "../assets/Icons/ReactIcon";
import Sanity from "../assets/Icons/Sanity";
import TailwindIcon from "../assets/Icons/TailwindIcon";

const twClasses = "h-8 w-8 fill-black dark:fill-white";

export const Icons = [
  { name: "Chakra", Icon: <Chakra class={twClasses} /> },
  { name: "Firebase", Icon: <Firebase class={twClasses} /> },
  { name: "Next", Icon: <Next class={twClasses} /> },
  { name: "React", Icon: <ReactIcon class={twClasses} /> },
  { name: "Sanity", Icon: <Sanity class={twClasses} /> },
  { name: "Tailwind", Icon: <TailwindIcon class={twClasses} /> },
];
