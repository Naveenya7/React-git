import {useState} from 'react';
import {toast,Toaster} from 'react-hot-toast';

export const State= () => {
    const [form,setForm]=useState({
        name:'P. Naveenya',
        email:'naveenyapalaniappan@gmail.com',
        phone:'6380884268',
        username:'n_a_v_e_e_n_y_a',
        password:'123'

    })
    const handlechange=(e)=>{
        setForm({...form,[e.target.id]:e.target.value});
        console.log("event triggered");
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        toast.success('Registration Successful!');
    }
    return (
    <>
    {/* <div className="myform"> */}
    <form className="f1" onSubmit={handlesubmit}>
    <input type="text" name="name" id="name" placeholder="Name" className="fx1" onChange={handlechange} value={form.name}/>
    <input type="email" name="email" id="email" placeholder="Email"
    className="fx1"  onChange={handlechange} value={form.email}/>
    <input type="text" name="phone" id="phone" placeholder="Phone"
    className="fx1"  onChange={handlechange} value={form.phone}/>
    <input type="text" name="" id="username" placeholder="Username"
    className="fx1"  onChange={handlechange} value={form.username}/>
    <input type="password" name="" id="password" placeholder="Password"
    className="fx1"  onChange={handlechange} value={form.password}/>
    <button style={{backgroundColor:'violet'}} className='but' >Register</button>
    </form>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    {/* </div> */}
    </>
    )
    }
    export default State;