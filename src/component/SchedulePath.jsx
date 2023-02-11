import React, {useLayoutEffect} from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useWindowDimensions from "./useWindowDimensions";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function SchedulePath() {
  const { width } = useWindowDimensions();

  useLayoutEffect(() => {
    gsap.to("#motionSVG", {
      scrollTrigger: {
        trigger: "#path",
        start: "top 90%",
        scrub: 1,
        // markers: true
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
  if (width < 486) 
  return (
      <svg
        width={101.78572}
        height={963.14301}
        viewBox="0 0 101.78572 963.14299"
        id="svg5"
        xmlSpace="preserve"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-205.70183,-5.0411163)">
          <g id="layer1-8" transform="translate(-638.11391,-252.14617)">
            <circle
              style={{
                fill: "#ffc107",
                fillOpacity: 1,
                stroke: "#ffc107",
                strokeWidth: 20,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "none",
              }}
              id="motionSVG"
              cx={883.81573}
              cy={297.18729}
              r={30}
            />
          </g>
          <path
            style={{
              fill: "none",
              stroke: "#ffc107",
              strokeWidth: 10,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 302.48756,39.800995 V 963.18408"
            id="path"
          />
        </g>
      </svg>
  )
  else
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