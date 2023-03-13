import React, {useLayoutEffect} from 'react';
import SchedulePath from '../component/SchedulePath';
import ScheduleCardComponent from '../component/ScheduleCardComponent';
import useWindowDimensions from '../component/useWindowDimensions';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const positionsForMobile = [
  {
    left: "0%",
    // right: 0,
    top: "0%",
  },
  {
    // left: auto,
    right: "0%",
    top: "20%",
  },
  {
    left: "0%",
    // right: 0,
    top: "40%",
  },
  {
    // left: 0,
    right: "0%",
    top: "60%",
  },
  {
    left: "0%",
    // right: 0,
    top: "80%",
  },
]

const positionsForLaptop = [
  {
    left: "20%",
    // right: auto,
    top: "0%",
  },
  {
    left: "66%",
    // right: auto,
    top: "17%",
  },
  {
    left: "21%",
    // right: auto,
    top: "36%",
  },
  {
    left: "66%",
    // right: auto,
    top: "52%",
  },
  {
    left: "22%",
    // right: auto,
    top: "69%",
  },
]

const phases = [
  {
    phaseName: "Phase 1",
    phaseDetails: "Registrations or Opening Ceremony"
  },
  {
    phaseName: "Phase 2",
    phaseDetails: "Shortlisting or Hackthon Begins"
  },
  {
    phaseName: "Phase 3",
    phaseDetails: "Judgement Round 1 or Review Round"
  },
  {
    phaseName: "Phase 4",
    phaseDetails: "Hackathon End"
  },
  {
    phaseName: "Phase 5",
    phaseDetails: "Closing Ceremony"
  }
];



const ScheduleSection = () => {

  const { width } = useWindowDimensions();
  let positions;

  if(width < 486){
    positions = positionsForMobile.map(pos => {return {...pos}})
  } else {
    positions = positionsForLaptop.map(pos => {return {...pos}})
  }

  useLayoutEffect(() => {
    // let t1 = gsap.timeline();
    // gsap.to("#phase1", {
    //   scrollTrigger: {
    //     trigger: "#schedule-start",
    //     start: `${positions[1].top}`,
    //     markers: true,
    //   },
    //   scale: 0.7
    // })
    for(let i = 0; i< 5; i++ ){
      gsap.set(`#${phases[i].phaseName.split(" ").join("").toLowerCase()}`, {autoAlpha: 0})
      gsap.to(`#${phases[i].phaseName.split(" ").join("").toLowerCase()}`, {
        scrollTrigger: {
          trigger: "#schedule-start",
          start: `${positions[i].top} ${positions[4 - i].top}` ,
          // markers: true,
        },
        autoAlpha: 1,
        ease: "in",
        duration: 0.5,
      })
    }
  })


  return (
    <section id="schedule" className='mt-5 mt-md-0'>
      <h1 className='text-center'>Schedule</h1>
      <div id="schedule-start" className='schedule-height position-relative'>
        <div className='text-center'><SchedulePath /></div>
        {
          phases.map((phase,i) => (
            <ScheduleCardComponent
              phaseName={phase.phaseName}
              phaseDetails={phase.phaseDetails}
              posLeft={positions[i].left}
              posRight={positions[i].right}
              posTop={positions[i].top}
              key={i.toString()}
              id={i.toString()}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ScheduleSection
