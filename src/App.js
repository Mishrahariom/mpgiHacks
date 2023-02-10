import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavbarComponent from './component/NavbarComponent';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="team" element={ <TeamPage/> } />
      </Routes>   
    </>
  )
}

export default App