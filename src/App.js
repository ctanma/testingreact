import HomePage from './components/HomePage.js'
import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dropdown from './components/Dropdown.js';
import Home from './components/pages/Home';


function App() {
  //const[todos,setTodos] = useState(['Todo 1', 'Todo 2']);
  return (
    <>
    <Router>
     <Navbar />
     <Home />
     <Routes>
      <Route path = '/' exact component={Home}/>
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