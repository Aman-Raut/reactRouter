import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
        
        <h1>Home Page</h1>
        <p>This application is so awesome. that i can't stop myself
            from not learning more. so easy to use and very my fast.
            everything works fine till now. gonna jump on backend i.e on 
            node.js sooner and then on mongo DB. hope for the best. 
            </p>
            <Link to='/about'>Go to about Page</Link>
        </>
    )
}
export default Home;