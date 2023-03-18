import React, {useLayoutEffect} from 'react'
import ThemeCardComponent from '../component/ThemeCardComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

// const themes = ["Web Development", "App Development", "Blockchain", "AI/ML", "Social Cause"]
const themes = [
  {
    themeName: "Web development", 
    themePhoto: "https://i.ibb.co/sQ5bm2f/WEB-DEVEPMENT1.jpg",
  },
  {
    themeName: "Blockchain", 
    themePhoto: "https://i.ibb.co/nw6ZFzm/blockchain.jpg",
  },
  {
    themeName: "Machine learning", 
    themePhoto: "https://i.ibb.co/L0HC9Qj/alml.jpg",
  },
  {
    themeName: "IOT", 
    themePhoto: "https://i.ibb.co/qRY79w9/iot.jpg",
  },
  {
    themeName: "App development", 
    themePhoto: "https://i.ibb.co/sK1Tsf0/APP-DEV1.jpg",
  },
  {
    themeName: "Cloud Computing", 
    themePhoto: "https://i.ibb.co/HpwB8zH/cloud-computing.jpg",
  },
  {
    themeName: "Data Science", 
    themePhoto: "https://i.ibb.co/Qn13zGj/datascei3.jpg",
  },
  {
    themeName: "ARVR", 
    themePhoto: "https://i.ibb.co/BC0VCjS/ARVR.jpg",
  }
]
const ThemeSection = () => {
  useLayoutEffect(() => {
    // themes.forEach((theme) => 
    // gsap.to(`#${theme.themeName.split(" ").join("").toLowerCase()}`, {
    //   scrollTrigger: {
    //     trigger: "#theme-images",
    //     start: "top 50%",
    //     markers: true,
    //   },
    //   scale: 0.5,
    //   delay: 1,
    //   // stagger: {
    //   //   grid: [4,4],
    //   //   from: "center",
    //   //   amount: 1,
    //   // },
    // })
    // )
    // gsap.to("#theme .card", {
    //   scrollTrigger: {
    //     trigger: "#theme-images",
    //     start: "top 50%",
    //     markers: true,
    //   },
    //   scale: 0.9,
    //   duration: 1,
    //   y: 40,
    //   ease: "power1.inOut",
    //   stagger: {
    //     // each: 0.1,
    //     amount: 5, 
    //     grid: "4 4",
    //     from: 1,
    //   }  
    // })
  }, [])
  return (
    <section id="theme" className='mt-5 mt-md-0 vh-100' style={{"minHeight": "100vh"}}>
      <h1>Themes</h1>
      <div id="theme-images" className='theme-mobile d-flex flex-row flex-wrap align-center' style={{"paddingLeft": "6.5rem"}}>
      {
        themes.map((theme) => <ThemeCardComponent {...theme } key={theme.themePhoto} id={theme.themePhoto} />)
      }
      {/* <ThemeCardComponent theme={"showMore"} /> */}
      </div>
    </section>
  )
}

export default ThemeSection