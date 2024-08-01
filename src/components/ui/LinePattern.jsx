/* eslint-disable react/no-unknown-property */
const LinePattern = () => {
  return (
    <div
      style={{
        margin: 0,
        backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 3422 800"
          width="3422"
          height="800"
          opacity="0.43"
        >
          <g
            transform="scale(1) rotate(27) translate(-16 -13) skewX(9) skewY(9)"
            transformOrigin="711 400"
          >
            <rect
              width="2844"
              height="1600"
              x="-711"
              y="-400"
              fill="url(#rrreplicate-pattern1)"
            />
            <rect
              width="2844"
              height="1600"
              x="-711"
              y="-400"
              fill="url(#rrreplicate-pattern2)"
            />
          </g>
          <defs>
            <pattern
              id="rrreplicate-pattern1"
              width="304"
              height="304"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(26)"
              strokeWidth="4"
              fill="none"
              stroke="#836FFF"
              strokeOpacity="0.48"
            >
              <line x1="76" y1="0" x2="76" y2="304" />
              <line x1="228" y1="0" x2="228" y2="304" />
            </pattern>
            <pattern
              id="rrreplicate-pattern2"
              width="304"
              height="304"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(91)"
              strokeOpacity="0.67"
              strokeWidth="2.2"
              fill="none"
              stroke="#15F5BA"
            >
              <line x1="76" y1="0" x2="76" y2="304" />
              <line x1="228" y1="0" x2="228" y2="304" />
            </pattern>
          </defs>
        </svg>
      ')`)}`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    ></div>
  );
};

export default LinePattern;
