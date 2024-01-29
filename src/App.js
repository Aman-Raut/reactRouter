import './App.css';
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';


function App() {
  return<>
   <div className="primary">
   <BrowserRouter>
    <NavBar />
   <Routes>
   <Route path='/home' element={<Home /> } />
   <Route path='/about' element={<About /> } />
   <Route path='/*' element={<Page404 /> } />
   <Route path='/user/:name' element={<User /> } />
   </Routes>
   </BrowserRouter>
   </div>
   </>
  
}

export default App;
