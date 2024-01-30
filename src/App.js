import './App.css';
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Login from './component/Login';
import Protected from './component/Protected';


function App() {
  return<>
   <div className="primary">
   <BrowserRouter>
    <NavBar />
   <Routes>
   <Route path='/home' element={<Protected Component={Home} /> } />
   <Route path='/about' element={<About /> } />
   <Route path='/*' element={<Page404 /> } />
   <Route path='/user/:name' element={<User /> } />
   <Route path='/filter' element={<Filter /> } />
   <Route path='/contact/' element={<Contact />}>
      <Route path='company' element={<Company />} />
      <Route path='channel' element={<Channel />} />
   </Route>
   <Route path='/login' element={<Login />} />
   </Routes>
   </BrowserRouter>
   </div>
   </>
  
}

export default App;