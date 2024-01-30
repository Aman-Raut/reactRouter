import {BrowserRouter,Routes,Route,NavLink, Outlet} from 'react-router-dom'

function Contact(){

    return<>
    <h1>Contact Us</h1>
    <p>feel friendly to contact us whenever you wish. we are available for you 
        24x7. Happy Reactinggg.
    </p>
    <p>Contact out devloper</p>
    <NavLink className='nav-bar-link' to='channel' >Channel</NavLink>&nbsp;
    <NavLink className='nav-bar-link' to='company'>Company</NavLink> &nbsp;
    <NavLink className='nav-bar-link' to='other' >Other</NavLink>
    <Outlet />
    </>
}
export default Contact; 