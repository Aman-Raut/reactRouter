import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
    
    const login=()=>{
        localStorage.setItem('login', true)
        navigate('/home')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if (!login){
            navigate('/home')
        }
    });
    return<>
    <h1>Login Page</h1>
    <input type="text" placeholder='username' />
    <br />
    <input type="password" placeholder='password' />
    <br /><br />
    <button onClick={login} >Submit</button> &nbsp; 
    <button>Register</button>
    </>
}
export default Login;