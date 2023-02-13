import React from 'react'
import ThemeCardComponent from '../component/ThemeCardComponent'

const themes = ["Web Development", "App Development", "Blockchain", "AI/ML", "Social Cause"]

const ThemeSection = () => {
  return (
    <section id="theme" className='mt-5 mt-md-0' style={{"minHeight": "100vh"}}>
      <h1>Themes</h1>
      <div className='theme-mobile d-flex flex-row flex-wrap align-center' style={{"paddingLeft": "6.5rem"}}>
      {
        themes.map((theme) => <ThemeCardComponent theme={theme}/>)
      }
      <ThemeCardComponent theme={"showMore"} />
      </div>
    </section>
  )
}

export default ThemeSection