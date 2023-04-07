import React, {useLayoutEffect} from 'react'
import ThemeCardComponent from '../component/ThemeCardComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

// const themes = ["Web Development", "App Development", "Blockchain", "AI/ML", "Social Cause"]
const themes = [
  {
    themeName: "Web & App development", 
    themePhoto: "https://i.ibb.co/RpgfhnL/Web-App-Dev.png",
  },
  {
    themeName: "Blockchain", 
    themePhoto: "https://i.ibb.co/Jj5KkKp/Blockchain.png",
  },
  {
    themeName: "AI / ML", 
    themePhoto: "https://i.ibb.co/pfSGdjB/229372667-c103b2ff-49a0-40ac-a4b2-08c008d9dee7.png",
  },
  {
    themeName: "IOT", 
    themePhoto: "https://i.ibb.co/2gRGfX2/IOT.png",
  },
  {
    themeName: "Cyber Security", 
    themePhoto: "https://i.ibb.co/9HqjJD3/Cyber-Security.png",
  },
  {
    themeName: "Cloud Computing", 
    themePhoto: "https://i.ibb.co/84mRk0R/Cloud-Computing.png",
  },
  {
    themeName: "Data Science", 
    themePhoto: "https://i.ibb.co/c1jtfgr/Data-Science.png",
  },
  {
    themeName: "AR & VR", 
    themePhoto: "https://i.ibb.co/d7Jzp5x/AR-VR.png",
  },
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
    <section id="themes" className='mt-5 mt-md-0' style={{"minHeight": "100vh",  "paddingTop": "7rem"}}>
      <h1>Themes</h1>
      <div id="theme-images" className='row gy-4' style={{"margin": "0"}}>
      {
        themes.map((theme) => <ThemeCardComponent {...theme } key={theme.themePhoto} id={theme.themePhoto} />)
      }
      </div>
    </section>
  )
}

export default ThemeSection