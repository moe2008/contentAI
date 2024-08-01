/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = Math.min(window.innerWidth - 35, e.pageX);
      const y = Math.min(window.innerHeight + 1500, e.pageY);

      setMouseX(x);
      setMouseY(y);

      gsap.to("#cursor", {
        x: x - 15,
        y: y - 15,
        duration: 0.1,
        ease: "power3.out",
        delay: 0.03,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      gsap.killTweensOf("#cursor");
    };
  }, []);

  return (
    <div
      className="absolute bg-black h-6 w-6 rounded-full z-50 ease-in-out active:bg-slate-500 touch:hidden dark:bg-white"
      id="cursor"
      style={{ pointerEvents: "none", filter: "blur(2px)" }}
    />
  );
};

export default Cursor;
