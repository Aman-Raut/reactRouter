import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

function NavBar(){
    return<>
    <Link to='/about' >About</Link>
     &nbsp;&nbsp;&nbsp;
    <Link to='/home' >Home</Link>
    &nbsp;&nbsp;&nbsp;
    <Link to='/user/aman' >Aman</Link>
    &nbsp; 
    <Link to='/user/manu' >Manu</Link>
    </>
}
export default NavBar;