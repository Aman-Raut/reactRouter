import {Link} from 'react-router-dom';
function About(){
    return(
       <>
        <h1>About</h1>
        <p>This is a about page where i will write compething is it looks
            little good. just for right this is it:)
            
        </p>
        <Link to='/home' >Go to Home Page</Link>
       </>
    )
}
export default About;