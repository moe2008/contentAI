/* eslint-disable no-unused-vars */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const skillSetAnimation = () => {
  const next = document.getElementById("#next");
  console.log(next);
  const firebase = document.getElementById("#firebase");
  const menu = document.getElementById("#menu");
  const mongo = document.getElementById("#mongo");
  const figma = document.getElementById("#figma");
  const react = document.getElementById("#react");
  const node = document.getElementById("#node");
  const tailwind = document.getElementById("#tailwind");
  const sanity = document.getElementById("#sanity");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".circleBox",
    },
  });

  tl.fromTo(
    "#menu",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: "bounce.inOut" }
  )
    .fromTo(
      "#next",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#react",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#sanity",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#tailwind",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#node",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#firebase",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#mongo",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    )
    .fromTo(
      "#figma",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: "bounce.inOut" }
    );

  // gsap.fromTo(
  //   ".circle",
  //   {
  //     scale: 0,
  //     opacity: 0,
  //   },
  //   {
  //     scale: 1,
  //     opacity: 1,
  //     duration: 0.1,
  //     stagger: 0.05,
  //     scrollTrigger: {
  //       trigger: ".circleBox",
  //     },
  //   }
  // );

  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle) => {
    circle.addEventListener("mouseenter", () => {
      gsap.to(circle, { scale: 1.1, duration: 0.1, transformOrigin: "center" });
    });
    circle.addEventListener("mouseleave", () => {
      gsap.to(circle, { scale: 1, duration: 0.1 });
    });
  });
};
