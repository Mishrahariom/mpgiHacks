import React from 'react'
import FaqCardComponent from '../component/FaqCardComponent'

const faqQuestions = [
  {
    no: "q1",
    question: "Who can participate?",
    answer:  "The hackathon is open for Students from all over India. It is the right place for anyone who's interested in learning and innovating with their ideas."
  },
  {
    no: "q2",
    question: "How much will it cost?",
    answer: "Thanks to our college the hackathon is completely free of cost."
  },
  {
    no: "q3",
    question: "How long is the hackathon going to last?",
    answer: "The hackathon is a 24-hour event."
  },
  {
    no: "q4",
    question: "What if I don't know how to code?",
    answer: "No worries, Interest in learning and working with technology is much more important than your current experience level."
  },
  {
    no: "q5",
    question: "Can i use half-baked code?",
    answer: "No. Team must choose a theme prior to the event and then pick one problem statement out of four provided. This is to ensure that no half-baked code is developed and that all projects are relevant to the theme."
  },
  {
    no: "q6",
    question: "What is the team size",
    answer: "The team can consist of minimum 2 and a maximum of 4 participants."
  },
  {
    no: "q7",
    question: "Will there be a mentoring session?",
    answer: "Yes, there will be mentors and industry experts who will guide you during the hackathon."
  },
  {
    no: "q8",
    question: "Will there be food?",
    answer: "Yes, delicious food and beverages will be provided throughout the event, courtesy of Kroger Tech."
  }
]

// const faqQuestions = [
//   {
//     question: "Q: What is a community hackathon?",
//     answer: "A: A community hackathon is an event where individuals with an interest in coding come together to collaborate on software projects over a 24-hour period."
//   },
//   {
//     question: "Q: Who can participate in the community hackathon?",
//     answer: "A: Students from all over India can participate in the community hackathon."
//   },
//   {
//     queston: ""
//   }
// ]

// currently the window height of this section is more than 100vh in laptop. So if you are looking for scroll snapping then first resolve the height removing the Navigation bar so that we get rid of 7rem padding top section.
const FaqSection = () => {
  // const [first, setfirst] = useState(second)
  return (
    <section id="faqs" className='mt-5 mt-md-0' style={{"minHeight": "100vh"}}>
      <h1>FAQs</h1>
      <div className='container'>
        <div className='accordion accordian-flush'>
        {
          faqQuestions.map(el => 
            <div className='w-100 m-auto'>
              <FaqCardComponent question={el.question} answer={el.answer} key={el.no} id={el.no} />
            </div>
          )
        }
        </div>
      </div>
    </section>
  )
  // return (
  //   <section id="faqs" className='mt-5 mt-md-0' style={{"minHeight": "100vh"}}>
  //     <h1>FAQs</h1>
  //     <div className='container'>
  //       <div className='row g-0'>
  //       {
  //         faqQuestions.map(el => 
  //           <div className='col-3'>
  //             <FaqCardComponent question={el.question} answer={el.answer} key={el.question} id={el.question} />
  //           </div>
  //         )
  //       }
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default FaqSection