import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

function NavBar(){
    return<>
    <Link to='/about' >About</Link>
     &nbsp;&nbsp;&nbsp;
    <Link to='/home' >Home</Link>
    </>
}
export default NavBar;