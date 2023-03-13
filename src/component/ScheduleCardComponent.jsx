import React from 'react'

const ScheduleCardComponent = ({phaseName, phaseDetails, posLeft, posTop, posRight,id}) => {
    // let t1 = gsap.timeline();
    // useLayoutEffect()

    return (
        <div key={id} id={phaseName.split(" ").join("").toLowerCase()} className='schedule-card bg-dark border border-warning border-2 m-3 position-absolute' style={{"width": "15rem", "height": "15rem","borderRadius":"20%", "left": posLeft, "top": posTop, "right": posRight}}>
            <div className='p-3 text-center'>
                <h3 style={{"color": "gold"}}>{phaseName}</h3>
                <p>{phaseDetails}</p>
            </div>
        </div>  
    )
}

export default ScheduleCardComponent