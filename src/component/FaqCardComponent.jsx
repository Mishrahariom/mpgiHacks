import React from 'react'

const FaqCardComponent = ({question, answer}) => {
  return (
    <div className='card bg-dark m-3' style={{"width": "18rem", "height": "15rem"}}>
        <div className='card-body'>
            <h5 className='card-title' style={{"color": "gold"}}>{question}</h5>
            <p className='card-text'>{answer}</p>
        </div>
    </div>
  )
}

export default FaqCardComponent