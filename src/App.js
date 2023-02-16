import React, {useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from './component/NavbarComponent';
import { Contact } from './sections';
import HomePage from './pages/HomePage';

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
      </Routes>
      <Contact />
    </>
  )
}

export default App