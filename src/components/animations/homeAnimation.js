import gsap from "gsap";
import ScrambleTextPlugin from "gsap-trial/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const homeAnimation = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "#preloaderContainer",
    { x: -1060 },
    {
      x: 0,
      onComplete: () => {
        gsap.to("#LogoSVG3", {
          transformOrigin: "center center",
          rotate: 360,
          duration: 1,
          stagger: 0.2,
          repeat: 1,
          onComplete: () => {
            gsap.to("#LogoSVG", {
              scale: 0.2,
              position: "relative",
              top: "-42%",
              left: "0%",
              duration: 1,
              onComplete: () => {
                document.querySelector("#preloaderContainer").style.display =
                  "none";

                gsap.fromTo(
                  "#navbar",
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 2, stagger: 0.2 }
                );
                gsap.fromTo(
                  "#header",
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 2, stagger: 0.3 }
                );
              },
            });
          },
        });
      },
    }
  ).to("#text", {
    duration: 2.5,
    delay: 3,
    scrambleText: {
      text: "modev",
      chars: "abcdefghiklmnopqrstuvwxyz",
      revealDelay: 0.5,
      speed: 0.3,
      newClass: "myClass",
    },
    ease: "Power0.easeInOut",
  });
};
