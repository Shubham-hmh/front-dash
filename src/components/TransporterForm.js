import React, { useState } from 'react';
import axios from 'axios';
import './transporter.css';
import {Link} from 'react-router-dom'

const TransporterForm = ({ userType }) => {
    const [orderId, setOrderId] = useState('');
    const [price, setPrice] = useState("");
    const [messages, setMessages] = useState([]);
 


    // fetch messages for showing list 
    const fetchMessages = async () => {
        try {
            const response = await axios.get('https://back-dash.onrender.com/api/manuMessage/messages');
            setMessages(response.data);
        } catch (error) {
            console.log(error);
        }
    };



    // Set the initial value of the Order ID field
    useState(() => {
        fetchMessages();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const messageData = {
            orderId,
            price
        };

        try {
            // Make a POST request based on the user type
            let url = '';
            if (userType === 'transporter') {
                url = 'http://localhost:5000/api/transMessage/transporter';
            }

            const response = await axios.post(url, messageData);
            console.log(response.data);

            // Clear form fields after successful submission
            setOrderId('');
            setPrice("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <div className='container'>

                <form onSubmit={handleSubmit} className='form-group'>
                    <div>
                        <label htmlFor="orderId">OrderID:</label>
                        <select
                            id="orderId"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        >
                            <option value="">Select OrderID</option>
                            {messages.map((message) => (
                                <option key={message._id} value={message.orderId}>
                                    {message.orderId}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='label'>
                            Price:
                            <input className='input' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </label>
                    </div>
                    <button className='button' type="submit">Create</button>
                </form>
            </div>

              <div className='dashboard'>
              <Link to="/transportDashboard" >
                <p className='btn'> view Dashboard <br /> </p>
              </Link>
              </div>
              
     


        </>

    );
};

export default TransporterForm;
