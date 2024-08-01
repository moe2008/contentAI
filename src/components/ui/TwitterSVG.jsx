/* eslint-disable react/prop-types */
import gsap from "gsap";

const TwitterSVG = (props) => {
  const onNavItemEnter = (e) => {
    gsap.to("#cursor", {
      duration: 0.7, // Dauer der Animation
      css: {
        filter: "blur(19px)",
        height: "3rem",
        width: "3rem",
      },
    });
    gsap.to(e.target, {
      duration: 0.3,
      scale: 1.2,
      ease: "Power0.easeInOut",
    });
  };

  const onNavItemLeave = (e) => {
    gsap.to("#cursor", {
      duration: 0.7, // Dauer der Animation
      css: {
        height: "2rem",
        width: "2rem",
        filter: "blur(2px)",
      },
    });
    gsap.to(e.target, {
      duration: 0.3,
      scale: 1.0,
      ease: "Power0.easeInOut",
    });
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className={props.className}
      onMouseEnter={onNavItemEnter}
      onMouseLeave={onNavItemLeave}
      id={props.id}
    >
      <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
    </svg>
  );
};

export default TwitterSVG;
