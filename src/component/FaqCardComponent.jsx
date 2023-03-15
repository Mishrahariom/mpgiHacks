import React from 'react'

const FaqCardComponent = ({question, answer, id}) => {
  return (
    <div className="accordion-item bg-dark">
      <h2 className="accordion-header" id={"heading" + id}>
        <button className="accordion-button bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + id} aria-expanded="true" aria-controls={"collapse" + id}>
          <code>{question}</code>
        </button>
      </h2>
      <div id={"collapse" + id} className="accordion-collapse collapse show " aria-labelledby={"headingOne" + id} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <code className='text-warning'>{answer}</code>
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