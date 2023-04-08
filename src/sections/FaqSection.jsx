import React from 'react'
import FaqCardComponent from '../component/FaqCardComponent'

const faqQuestions = [
  {
    no: "q1",
    question: "What if I don't know how to code?",
    answer: "Not knowing how to code should not hold you back! There are a couple of ways to approach this. Firstly, you can create presentations as an alternative way to communicate your ideas without the need to write any code. Tools like Tableau and WordPress can be useful for creating no-code solutions that showcase your ideas effectively. Additionally, if you have an interest in technology, that's the most important factor. Your current coding experience level is not a barrier. You can also present a no-code solution that clearly demonstrates your working prototype."
  },
  {
    no: "q2",
    question: "Do all team members need to be from the same college?",
    answer: "No, you can form a team with members from different colleges who have diverse domain knowledge. Alternatively, you can also participate in a team formed by members from another college."
  },
  {
    no: "q3",
    question: "What should I do if I'm having trouble finding a teammate for the hackathon?",
    answer: "You can consider reaching out to friends from other colleges, connecting with potential teammates on LinkedIn, or joining our Discord server to find a partner."
  },
  {
    no: "q4",
    question: "Can i bring my own Problem Statements?",
    answer: "For the Junior Batch, the participants are given this relaxation to bring their own problem statements based on any domain. But for the senior batch, the teams will receive the problem statements on the day of the Hackathon. It is recommended for teams to have a diverse skill set in fields such as AI/ML, web development, and blockchain. Additionally, good communication and presentation skills are essential for pitching solutions."
  },
  {
    no: "q5",
    question: "Will there be a mentoring session?",
    answer: "No, but if needed you may consult a mentor during review round."
  },
  {
    no: "q6",
    question: "Are food and accommodation provided during the hackathon?",
    answer: "Yes timely meals will be provided to all but accommodations, only for the outstation students.",
  },
  {
    no: "q7",
    question: "Is there reimbursement for travel?",
    answer: "Yes, the travel expenses of participants whose colleges are outside Kanpur will be reimbursed at the end of the hackathon. Please note that the total cost of sleeper seats for train travel from your college to Kanpur and back will be provided. The procedure for providing travel expense reimbursement will be communicated via email or Discord."
  },
  {
    no: "q8",
    question: "Will there be Internet Facility?",
    answer: "Yes, there will be."
  },
  {
    no: "q9",
    question: "What should I bring?",
    answer: "Join us with your laptops, mobile phones, and wearable computing devices, along with your high spirits, to collaborate with people in the two days hackathon."
  },
  {
    no: "q10",
    question: "Can i also join remotely?",
    answer: "No, we want this hackathon to be an offline event so remotely joining as well as working with a remote team is not allowed."

  },
  {
    no: "q11",
    question: "How are the winners selected?",
    answer: "There will be an independent Jury selecting the winners with a rating system: (Implementability, financial benefits, presentation skills, creativity, etc)."
  },
  {
    no: "q12",
    question: "I have a question or concern what should I do?",
    answer: "Contact us. Don't be shy! We are here to help and create a great atmosphere."
  },
]

// currently the window height of this section is more than 100vh in laptop. So if you are looking for scroll snapping then first resolve the height removing the Navigation bar so that we get rid of 7rem padding top section.
const FaqSection = () => {
  // const [first, setfirst] = useState(second)
  return (
    <section id="faqs" className='mt-5 mt-md-0' style={{"minHeight": "100vh", "paddingTop": "7rem"}}>
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
        <div className='mt-5 d-flex flex-column align-items-center'>
          <p className='fs-4 text-center'>Still have doubts? Let's connect over Discord Server.</p>
          <a href="https://discord.com/invite/EADG6ANSb7" className='text-decoration-none'>
            <button className='custom-apply-button apply-button'>
              <p style={{"marginBottom": "0"}}>Join the Discord</p>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FaqSection