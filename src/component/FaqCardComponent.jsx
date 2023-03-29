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
          <p className='text-white' style={{"fontSize": "15px"}}>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqCardComponent