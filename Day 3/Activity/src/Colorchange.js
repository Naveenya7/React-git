import {useState} from 'react';
const Colorchange =()=>{
    const [data,setData]=useState(false);
    const handlecolor=()=>{
        setData(!data);
    }
    return(
           <>
           <div className='change'>
           <textarea className={data ? 'green' : 'red'}  rows="20" cols="40"></textarea>
           <button onClick={handlecolor} className='clickbut'>Change color</button>
           </div>
           </>
    )
}
export default Colorchange;