import React, { useState } from 'react'
import './RegistrationForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
    const [userType, setUserType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username,setUsername] =useState("");
    const [address,setAddress] =useState("");
    const navigate=useNavigate();

 

    const handleSubmit = async(event) => {
        event.preventDefault();

        const userData = {
            userType, email, password ,username,address
        }
        try {
            // Make a POST request to the backend API for user registration
            const response = await axios.post('https://back-dash.onrender.com/api/auth/register', userData);
            console.log(response.data); // Handle the response data accordingly
            if(response.data ){
                localStorage.setItem('userType', userType);
                navigate('/login');
            }
            // Redirect or show a success message to the user
          } catch (error) {
            console.error(error); // Handle the error appropriately
          }
    }

    return (
        <>
            <div className="registration-form-container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">UserType:
                            <select name="" id="" onChange={(e)=>setUserType(e.target.value)}>
                                <option value="">Select User Type</option>
                                <option value="manufacturer">Manufacturer</option>
                                <option value="transporter">Transporter</option>
                            </select>
                        </label>
                    </div>
                 

                    <div>
                        <label htmlFor="">Email:
                            <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Username:
                            <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="">Password:
                            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="">Address:
                            <input type="text" name='address' onChange={(e)=>setAddress(e.target.value)} />
                        </label>
                    </div>

                    <button type='submit'>Register</button>





                </form>
            </div>
        </>
    )
}

export default RegistrationForm;