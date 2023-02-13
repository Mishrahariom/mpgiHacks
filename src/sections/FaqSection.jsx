import React from 'react'
import FaqCardComponent from '../component/FaqCardComponent'

const faqQuestions = [
  {
    question: "Who can participate?",
    answer:  "The hackathon is open for Students from all over India. It is the right place for anyone who's interested in learning and innovating with their ideas."
  },
  {
    question: "How much will it cost?",
    answer: "Thanks to our college the hackathon is completely free of cost."
  },
  {
    question: "How long is the hackathon going to last?",
    answer: "The hackathon is a 24-hour event."
  },
  {
    question: "What if I don't know how to code?",
    answer: "No worries, Interest in learning and working with technology is much more important than your current experience level."
  },
  {
    question: "Can I code before coming to the hackathon?",
    answer: "You can come prepared with half baked codes, write your own APIs and modules."
  },
  {
    question: "What is the team size",
    answer: "The team can consist of minimum 2 and a maximum of 4 participants."
  },
  {
    question: "Will there be a mentoring session?",
    answer: "Yes, there will be mentors and industry experts who will guide you during the hackathon."
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className='mt-5 mt-md-0' style={{"minHeight": "100vh"}}>
      <h1>FAQs</h1>
      <div className='faq-questions'>
      {
        faqQuestions.map(el => <FaqCardComponent question={el.question} answer={el.answer}/>)
      }
      <FaqCardComponent question={"showMore"} />
      </div>
    </section>
  )
}

export default FaqSection