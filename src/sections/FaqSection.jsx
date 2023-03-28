import React from 'react'
import FaqCardComponent from '../component/FaqCardComponent'

const faqQuestions = [
  
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
  },
  {
    no: "q9",
    question: "Is there reimbursement for travel?",
    answer: ""
  },
  {
    no: "q10",
    question: "Will there be wireless internet access?",
    answer: "Yes, there will be."
  },
  {
    no: "q11",
    question: "What should I bring?",
    answer: "Bring your laptops, mobile phones, Kinects, Oculus Rifts, Leap Motions, wearable computing devices, to whatever inspires you or you want to work with."
  },
  {
    no: "q12",
    question: " Can i also join remotely?",
    answer: "No, we want this hackathon to be an onsite event so remotely joining as well as working with a remote team is not allowed."

  },
  {
    no: "q13",
    question: "I have a question or concern what should I do?",
    answer: "Contact us. Don’t be shy! We are here to help and create a great atmosphere."
  },
  {
    no: "q14",
    question: "What is the problem we will be hacking to solve?",
    answer: "Details of the business problem will be announced on the day of the event."
  },
  {
    no: "q15",
    question: "Do all team members need to be present in person?",
    answer: "Yes, every team member should be present. If a team member cannot be present during the pitch or can only come later please tell us and we will find a way to manage! This is not an online event."
  },
  {
    no: "q16",
    question: "How are the winners selected?",
    answer: "There will be an independent Jury selecting the winners with a rating system: (Implementability, financial benefits, presentation skills, creativity)."
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
}

export default FaqSection