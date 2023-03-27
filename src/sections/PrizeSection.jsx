import React from 'react'

function PrizeSection() {
  return (
    <section id="abouthacks" className='container-fluid min-vh-100'>
      <div className='row'>
        <div className='col-12'>
        <h1>Prizes</h1>
        </div>
        <div className='col-12' style={{ "padding":"30px 40px"}}>
        <p className=''  style={{ "text-align": "center",  "color": "gold"}}>Prize pool Worth 15000-/</p>
        </div>
        
      </div>
      <div className='row'>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center">
          <img style={{ "width":"100px",}} src="https://i.ibb.co/YjkQJ1g/clipart-png-trophy-3.webp" />
          <h1  style={{  "color": "gold" ,"fontSize":"50px","text-align": "center"  }}>senior batch</h1>
          <p>1st Prize<code> ( 5000-/ )</code></p>
          <p>2nd Prize<code> ( 2500-/ )</code></p>          
        </div>
        <div className='col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center'>
          <img style={{ "width":"100px" , }} src="https://i.ibb.co/YjkQJ1g/clipart-png-trophy-3.webp" />
          <h1 style={{  "color": "gold" ,"fontSize":"50px",  }}>junior batch</h1>
          <p>1st Prize<code> ( 5000-/ )</code></p>
          <p>2nd Prize<code> ( 2500-/ )</code></p>

          

        </div>
        <div className='col-12' style={{ "padding":"30px 40px"}}>
        <p className=''  style={{ "text-align": "center"}}><code> GOODIES </code>&<code> CERTIFICATE </code>will provided to Everyone</p>
        </div>
        </div>
    </section>
  );
}

export default PrizeSection;

// const PrizeSection = () => {
//   return (
//     <section id="prizes" className='mt-5 mt-md-0' style={{"minHeight": "50vh"}}>
//       <h1>Prizes</h1>
//       <h2 className='text-center text-warning'>Rs.15000 Worth of Prize pool</h2>
//     </section>
//   )
// }

// export default PrizeSection