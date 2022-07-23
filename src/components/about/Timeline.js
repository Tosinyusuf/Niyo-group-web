
import React, { useRef, useEffect, useState } from "react";
import { timeLines } from "../../constants/data";
import StyledTimeline from "../../styled/Timeline.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Timeline = () => {

  // const ref = useRef(null);
  // const [tween, setTween] = useState(null);

  // useEffect(() => {
  //   if (tween) return;

  //   gsap.registerPlugin(ScrollTrigger);
  //   let scrollTween = gsap.to(ref.current, {
  //     ease: "none",
  //     backgroundColor: "#DAF7A6",
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       pin: true,
  //       anticipatePin: 1,
  //       invalidateOnRefresh: true,
  //       refreshPriority: 1,
  //       start: "top 0%",
  //       scrub: 1,
  //       end: "+=100%",
  //       markers: false,
  //       toggleActions: "play reset play reset",
  //       // onUpdate: (self) => {
  //       // }
  //     }
  //   });

  //   setTween(scrollTween);
  // }, []);
  return (
    <>
      <StyledTimeline> 
        {timeLines.map((item, index) => {
          return (
            <>
              <div className="each-timeline" key={index}>
                <div className="text">
                  <h2>{item.year}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="divider"></div>
                <div
                  className="timeline-image"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <img src={item.badge} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </StyledTimeline>
    </>
  );
};

export default Timeline;
