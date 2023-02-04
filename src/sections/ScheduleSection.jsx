import React from 'react';
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
      <h1 className=''>Schedule</h1>
      <div className='d-flex'>
      {
        phases.map(phase => <ScheduleCardComponent phaseName={phase.phaseName} phaseDetails={phase.phaseDetails} />)
      }
      </div>
    </div>
  )
}

export default ScheduleSection