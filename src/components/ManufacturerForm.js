import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './transporter.css';
const MessageForm = ({ userType }) => {
  console.log(userType);
  const [orderId, setOrderId] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [transporter, setTransporter] = useState('');


  // Function to generate the alphanumeric Order ID
  const generateOrderId = () => {
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
    }
    return result;
  };

  // Set the initial value of the Order ID field
  useState(() => {
    setOrderId(generateOrderId());
    const userAddress = localStorage.getItem('address');
    if (userAddress) {
      setAddress(userAddress);
    }
  }, []);




  const handleSubmit = async (event) => {
    event.preventDefault();

    const messageData = {
      orderId,
      to,
      from,
      quantity,
      address,
      transporter
    };

    try {
      // Make a POST request based on the user type
      let url = '';
      if (userType === 'manufacturer') {
        url = 'https://back-dash.onrender.com/api/manuMessage/manufacturer';
      }

      const response = await axios.post(url, messageData);

      // Clear form fields after successful submission
      setOrderId('');
      setTo('');
      setFrom('');
      setQuantity('');
      setAddress('');
      setTransporter('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <h2 style={{textAlign:"center"}}>Welcome to Manufacturer Form</h2>
      <div className='container'>
        <form onSubmit={handleSubmit} className='form-group'>
          <div>
            <label className='label'>
              Order ID:
              <input className='input' type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            </label>
          </div>
          <div>
            <label className='label'>
              To:
              <input className='input' type="text" value={to} onChange={(e) => setTo(e.target.value)} />
            </label>
          </div>
          <div>
            <label className='label'>
              From:
              <input className='input' type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
            </label>
          </div>
          <div>
            <label className='label'>
              Quantity:
              <select value={quantity} className='select' onChange={(e) => setQuantity(e.target.value)}>
                <option value="">Select Quantity</option>
                <option value="1">1 ton</option>
                <option value="2">2 tons</option>
                <option value="3">3 tons</option>
              </select>
            </label>
          </div>
          <div>
            <label className='label' htmlFor="transporter">Transporter:</label>
            <select className='select'
              id="transporter"
              value={transporter}
              onChange={(e) => setTransporter(e.target.value)}
            >
              <option value="">Choose transporter</option>
              <option value="Transporter A">Transporter A</option>
              <option value="Transporter B">Transporter B</option>
              <option value="Transporter C">Transporter C</option>
            </select>
          </div>
          <div>
            <label className='label'>
              Address:
              <input className="input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
          </div>
          <button className='button' type="submit">Create</button>
        </form>

      </div>
      <div className='dashboard'>
              <Link to="/manufacturerDashboard" >
                <p className='btn'> view Dashboard <br /> </p>
              </Link>
              </div>

    
    </>

  );
};

export default MessageForm;
