import {Link,useNavigate} from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    return(
        <>
        
        <h1>Home Page</h1>
        <p>This application is so awesome. that i can't stop myself
            from not learning more. so easy to use and quite fast.
            everything works fine till now. gonna jump on backend i.e on 
            node.js sooner and then on mongo DB. hope for the best. 
            </p>
            <Link to='/about'>Go to about Page</Link>
            <br />
            <button onClick={()=> navigate('/about')} >GO to about page</button> &nbsp;
            
            <button onClick={()=>navigate('/filter')} >Go to Filter page</button>
        </>
    )
}
export default Home;