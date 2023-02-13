import React, {useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from './component/NavbarComponent';
import { Contact } from './sections';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';

function App() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  
  }, [location.pathname])
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="team" element={ <TeamPage/> } />
      </Routes>
      <Contact />
    </>
  )
}

export default App