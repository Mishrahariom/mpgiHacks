import React from 'react'

const ScheduleCardComponent = ({phaseName, phaseDetails}) => {
  return (
    <div className='card bg-dark m-3' style={{"width": "20rem", "height": "20rem"}}>
        <div className='card-body'>
            <h3 style={{"color": "gold"}}>{phaseName}</h3>
            <p>{phaseDetails}</p>
        </div>
    </div>
  )
}

export default ScheduleCardComponent