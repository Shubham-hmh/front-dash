import React, { useState } from 'react';
import './LoginForm.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState("");
  const [userType,setUserType] =useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const navigate = useNavigate();

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send login data to the backend for authentication
    const loginData = {
      username,
      password, 
    };




    axios
      .post('https://back-dash.onrender.com/api/auth/login', loginData)
      .then((response) => {
        // Assuming the API response contains the user type
        const { userType ,accessToken,address } = response.data;
        localStorage.setItem("token",accessToken);
        localStorage.setItem("address",address);

        if (userType === 'transporter') {
          navigate('/transporter');
        } else if (userType === 'manufacturer') {
          navigate('/manufacturer');
        }
        // Set the user type and login status
        setUserType(userType);
        setIsLoggedIn(true);

      
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <>
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
     

          <div>
            <label htmlFor="">Username:
              <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
          </div>
          <button type="submit">Login</button>
        </form>

      </div>


    </>

  );
};

export default LoginForm;
