import React from 'react'

const ThemeCardComponent = ({theme}) => {
  return (
    <>
        <div className='card bg-dark m-3' style={{"width": "18rem", "height": "15rem"}}>
            <div className='card-body'>
                <h5 className='card-title' style={{"color": "gold"}}>{theme}</h5>
            </div>
        </div>
    </>
  )
}

export default ThemeCardComponent