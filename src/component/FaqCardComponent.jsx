import React from 'react'

const FaqCardComponent = ({question, answer, id}) => {
  return (
    <div className="accordion-item " style={{"background": "transparent", "borderLeft": "0", "borderRight": "0", "borderTop": "0", "borderRadius": "0"}}>
      <h2 className="accordion-header" id={"heading" + id}>
        <button className="accordion-button bg-transparent text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + id} aria-expanded="true" aria-controls={"collapse" + id}>
          <p className='text-white'>{question}</p>
        </button>
      </h2>
      <div id={"collapse" + id} className="accordion-collapse collapse" aria-labelledby={"headingOne" + id} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <p className='text-white'>{answer}</p>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className='card bg-dark m-3' style={{"width": "16rem", "height": "calc(14rem + 1em)",}} key={id}>
  //       <div className='card-body'>
  //           <p className='card-title' style={{"color": "gold", "fontSize": "1.1rem"}}>{question}</p>
  //           <p className='card-text' style={{"fontSize": "14px"}}>{answer}</p>
  //       </div>
  //   </div>
  // )
}

export default FaqCardComponent