import React from 'react';
const Studentdetails =({name,rollno,email,phonenum,blood}) => {
    return(
        <table border={10} className='t'>
         <tr>
            <th>Student Name</th>
            <td>{name}</td></tr>  
            <tr>
                <th>Roll Number</th>
                <td>{rollno}</td>
            </tr> 
            <tr>
                <th>Email ID</th>
                <td>{email}</td>
            </tr> 
            <tr>
                <th>Mobile number</th>
                <td>{phonenum}</td>
            </tr> 
            <tr>
                <th>Blood group</th>
                <td>{blood}</td>
            </tr> 
        </table>
    )
}
export default Studentdetails;