import React from 'react'
import ThemeCardComponent from '../component/ThemeCardComponent'

// const themes = ["Web Development", "App Development", "Blockchain", "AI/ML", "Social Cause"]
const themes = [
  {
        // themeName: "Web development", 
        themePhoto: "https://i.ibb.co/sK1Tsf0/APP-DEV1.jpg",
        
  },
  {
    // themeName: "Blockchain", 
    themePhoto: "https://i.ibb.co/nw6ZFzm/blockchain.jpg",
},
{
  // themeName: "Machine learning", 
  themePhoto: "https://i.ibb.co/L0HC9Qj/alml.jpg",
},
{
  // themeName: "Show More", 
  themePhoto: "https://i.ibb.co/qRY79w9/iot.jpg",
},
{
  // themeName: "App development", 
  themePhoto: "https://i.ibb.co/sQ5bm2f/WEB-DEVEPMENT1.jpg",
},
{
  // themeName: "Technology", 
  themePhoto: "https://i.ibb.co/HpwB8zH/cloud-computing.jpg",
},
{
  // themeName: "Technology", 
  themePhoto: "https://i.ibb.co/Qn13zGj/datascei3.jpg",
},
{
  // themeName: "Technology", 
  themePhoto: "https://i.ibb.co/BC0VCjS/ARVR.jpg",
}

]
const ThemeSection = () => {
  return (
    <section className='theme mt-5 mt-md-0' style={{"minHeight": "100vh"}}>
      <h1>Themes</h1>
      <div className='theme-mobile d-flex flex-row flex-wrap align-center' style={{"paddingLeft": "6.5rem"}}>
      {
        themes.map((theme) => <ThemeCardComponent {...theme }/>)
      }
      {/* <ThemeCardComponent theme={"showMore"} /> */}
      </div>
    </section>
  )
}

export default ThemeSection