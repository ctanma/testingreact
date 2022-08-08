import HomePage from './components/HomePage.js'
import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dropdown from './components/Dropdown.js';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Tutoring from './components/pages/Tutoring';
import WaitTimes from './components/pages/WaitTimes';
import Courses from './components/pages/Courses';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     {/* <Home /> */}
     <Routes>
     <Route exact path = '/' element={<Home/>}/>
      <Route exact path = '/home' element={<Home/>}/>
      <Route exact path = '/courses' element = {<Courses/>} />
      <Route exact path = '/wait-times' element = {<Reviews/>} />
      <Route exact path='/tutoring' element={<Tutoring/>} />
      {/* <Route exact path='/wait-times' element={<WaitTimes/>} /> */}
     </Routes>
    </Router>        
    </>
  )
}

export default App;

/* <HomePage todos = {todos}/>
        <input type="text" />
        <button> Button1 </button>
        <button> Button2</button>
        <div> Random text here </div> */