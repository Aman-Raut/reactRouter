import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParams,setSearchParams] = useSearchParams();
    console.warn(searchParams.get('age'));
    console.warn(searchParams.get('city'));
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    return<>
    <h1>Hello Filter</h1>
    <h3>my age is {age} </h3>
    <h3>my city is {city} </h3>
    <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} />
    <button onClick={()=>setSearchParams({age:20, city:"Moscow"})} >Click to Confirm</button>
    </>
}
export default Filter;