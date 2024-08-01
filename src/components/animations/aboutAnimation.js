/* eslint-disable no-unused-vars */
import gsap from "gsap";

export const aboutAnimation = () => {
  const container = document.querySelector(".imgContainer");
  const tl = gsap.timeline();
  tl.fromTo(".rect", { x: -1000 }, { x: 0, duration: 1.22, stagger: 0.05 });

  const animation = gsap.to(".rect", {
    scale: 3.42,
    paused: true,
    duration: 0.8,
  });

  container.addEventListener("mouseenter", () => animation.play());
  container.addEventListener("mouseleave", () => animation.reverse());

  const animation2 = gsap.fromTo(
    ".aboutText",
    {
      opacity: 0,
      y: 80,
    },
    { y: 0, opacity: 1, stagger: 0.5, duration: 1.8 }
  );

  const animation3 = gsap.fromTo(
    ".navItemAnim",
    { opacity: 0, x: 10, y: 80 },
    { x: 0, y: 0, opacity: 1, stagger: 0.5, duration: 1.8 }
  );

  animation2.play();
  animation3.play();
};
