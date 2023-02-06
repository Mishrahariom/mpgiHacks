import React from 'react';
import SchedulePath from '../component/SchedulePath';
import ScheduleCardComponent from '../component/ScheduleCardComponent';

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
]

const ScheduleSection = () => {
  return (
    <div className='schedule'>
      <h1 className='text-center'>Schedule</h1>
      <div className='position-relative vh-100' style={{"min-height": "250vh"}}>
        <div className='text-center'><SchedulePath /></div>
        <ScheduleCardComponent phaseName={phases[0].phaseName} phaseDetails={phases[0].phaseDetails} posLeft="20%" posTop="0%" posRight="" />
        <ScheduleCardComponent phaseName={phases[1].phaseName} phaseDetails={phases[1].phaseDetails} posLeft="66%" posTop="17%" posRight="" />
        <ScheduleCardComponent phaseName={phases[2].phaseName} phaseDetails={phases[2].phaseDetails} posLeft="21%" posTop="36%" posRight="" />
        <ScheduleCardComponent phaseName={phases[3].phaseName} phaseDetails={phases[3].phaseDetails} posLeft="66%" posTop="52%" posRight="" />
        <ScheduleCardComponent phaseName={phases[4].phaseName} phaseDetails={phases[4].phaseDetails} posLeft="22%" posTop="69%" posRight="" />
      </div>
    </div>
  )
}

export default ScheduleSection

{/* <div className='d-flex vh-100'>
</div> */}
  {/* phases.map(phase => <ScheduleCardComponent phaseName={phase.phaseName} phaseDetails={phase.phaseDetails} />) */}