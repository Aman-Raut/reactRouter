import {BrowserRouter,Route,Routes,Link, NavLink} from 'react-router-dom';

function NavBar(){
    return<>
    <ul className='navbar'>
        <li><NavLink className='nav-bar-link' style={{color:'red'}} to='/about' >About</NavLink></li>
        <li><NavLink className='nav-bar-link' to='/home' >Home</NavLink></li>
        <li> <NavLink className='nav-bar-link' to='/user/aman' >Aman</NavLink></li>
        <li><NavLink className='nav-bar-link' to='/user/manu' >Manu</NavLink></li>
    </ul>
    </>
}
export default NavBar;