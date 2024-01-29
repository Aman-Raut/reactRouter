import './App.css';
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';


function App() {
  return<>
   <div className="primary">
   <BrowserRouter>
    <NavBar />
   <Routes>
   <Route path='/home' element={<Home /> } />
   <Route path='/about' element={<About /> } />
   </Routes>
   </BrowserRouter>
   </div>
   </>
  
}

export default App;
