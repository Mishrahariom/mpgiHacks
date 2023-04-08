import React from 'react';

const Travel = () => {

  return (
    <section id="travelexpense" className='container-fluid' style={{ "paddingTop": "7rem" }}>
      <div className='d-flex flex-column align-items-center justify-content-between'>
        <h1>Free Travel Expence</h1>
        <div className='mt-5'>
          <p className='travelexpense-terms'> <span className='text-warning'> Terms & Condition </span> </p>
          <div style={{ "fontSize": "25px" }} >
            <ul className='travelexpense-list'><li>The travel expenses of participants whose colleges are <span className='text-warning'> outside Kanpur </span> will be reimbursed at the<span className='text-warning'> End of the Hackathon.</span></li>
              <li>Please note that the total cost of <span className='text-warning'> sleeper seats </span> for <span className='text-warning'> train travel </span> from your college to kanpur and back will be provided.</li>
              <li>The procedure for providing travel expense reimbursement will be communicated via <span className='text-warning'> Email </span> or<span className='text-warning'> Discord. </span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Travel
// col-12 col-md-12