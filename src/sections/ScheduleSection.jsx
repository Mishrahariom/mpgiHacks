import React from 'react';
import SchedulePath from '../component/SchedulePath';
import ScheduleCardComponent from '../component/ScheduleCardComponent';
import useWindowDimensions from '../component/useWindowDimensions';

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
    console.log(positions)
  } else {
    positions = positionsForLaptop.map(pos => {return {...pos}})
    console.log(positions)
  }

  return (
    <section className='schedule mt-5 mt-md-0'>
      <h1 className='text-center'>Schedule</h1>
      <div className='schedule-height position-relative'>
        <div className='text-center'><SchedulePath /></div>
        {
          phases.map((phase,i) => (
            <ScheduleCardComponent
              phaseName={phase.phaseName}
              phaseDetails={phase.phaseDetails}
              posLeft={positions[i].left}
              posRight={positions[i].right}
              posTop={positions[i].top} />
          ))
        }
      </div>
    </section>
  )
}

export default ScheduleSection
