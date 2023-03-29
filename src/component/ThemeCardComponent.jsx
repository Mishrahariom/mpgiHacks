import React from 'react'

const ThemeCardComponent = ({themeName,themePhoto, id}) => {
  return (
    <div className='col-sm-12 col-md-3 d-flex justify-content-center'>
        <div key={id} id={themeName.split(" ").join("").toLowerCase()} className='card m-3 bg-transparent' style={{"width": "14rem","height": "14rem"}}>
          <img src={`${themePhoto}`} class="card-img-top" alt="..." />
          <div className='card-body'>
              <h5 className='card-title text-center text-white'>{themeName}</h5>
          </div>
        </div>
    </div>
  )
}

export default ThemeCardComponent
{/* <div key={id} id={themeName.split(" ").join("").toLowerCase()} className='card m-3' style={{"width": "14rem","height": "14rem", backgroundImage:`url(${themePhoto})` , backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "transparent"}}> */}
