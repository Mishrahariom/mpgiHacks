import React, {useLayoutEffect} from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function SchedulePath() {
  useLayoutEffect(() => {
    gsap.to("#motionSVG", {
      scrollTrigger: {
        trigger: "#path",
        start: "top 90%",
        scrub: 1,
        markers: true
      },
      // duration: 1,
      yoyo: true,
      ease: "none",
      immediateRender: true,
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });
  });
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="478.795"
        height="1491.267"
        version="1.1"
        viewBox="0 0 478.795 1491.267"
        xmlSpace="preserve"
        style={{"position": "relative", "top": "-100px"}}
      >
        <g
          fillOpacity="1"
          stroke="#ffc107"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-844 177.336)"
        >
          <path
            id="path"
            fill="none"
            strokeWidth="25.551"
            d="M944.316 63.749s360.63 227.673 359.479 341.388c-1.151 113.715-363.776 171.839-363.65 282.507.125 110.667 366.082 193.397 369.84 290.848 3.756 97.452-351.338 322.664-351.338 322.664"
          ></path>
          <g id="motionSVG">
            <circle
              id="circle"
              cx="904.001"
              cy="-117.336"
              r="50"
              fill="#ffc107"
              strokeWidth="20"
            ></circle>
          </g>
        </g>
      </svg>
    </>
  );
}

export default SchedulePath;