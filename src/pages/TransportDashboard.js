import React, { useState } from 'react'
import axios from 'axios';
import '../components/transporter.css';
import Navbar from '../components/Navbar';
const TransportDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [searchOrderId, setSearchOrderId] = useState("");
    const [searchTo, setSearchTo] = useState("");
    const [searchFrom, setSearchFrom] = useState("");


    // fetch messages for showing list 
    const fetchMessages = async () => {
        try {
            const response = await axios.get('https://back-dash.onrender.com/api/manuMessage/messages');
            setMessages(response.data);
        } catch (error) {
            // Handle error
        }
    };

    useState(() => {
        fetchMessages();
    }, [])

    // search functionality
    const filteredMessages = messages.filter((message) => {
        // Check if the message matches the search criteria for each field
        const matchesOrderId = searchOrderId === "" || message.orderId.includes(searchOrderId);
        const matchesTo = searchTo === "" || message.to.includes(searchTo);
        const matchesFrom = searchFrom === "" || message.from.includes(searchFrom);

        // Return true if all the search criteria match
        return matchesOrderId && matchesTo && matchesFrom;
    });



    return (
        <><Navbar/>
            <h2 >Transporter Dashboard</h2>
            <h5>Search functionality</h5>
            <div className='searchbox'>
                <label className='label1' htmlFor="searchOrderId">Search by Order ID:</label>
                <input className='input1'
                    id="searchOrderId"
                    type="text"
                    value={searchOrderId}
                    onChange={(e) => setSearchOrderId(e.target.value)}
                />
                <label className='label1' htmlFor="searchTo">Search by To:</label>
                <input className='input1'
                    id="searchTo"
                    type="text"
                    value={searchTo}
                    onChange={(e) => setSearchTo(e.target.value)}
                />
                <label className='label1' htmlFor="searchFrom">Search by From:</label>
                <input className='input1'
                    id="searchFrom"
                    type="text"
                    value={searchFrom}
                    onChange={(e) => setSearchFrom(e.target.value)}
                />
                </div>
            <div>
                <h3 >Received Messages from Manufacturer</h3>
                <table className='message-table'>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>To</th>
                            <th>From</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Transporter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMessages.map((message) => (
                            <tr key={message._id}>
                                <td>{message.orderId}</td>
                                <td>{message.to}</td>
                                <td>{message.from}</td>
                                <td>{message.quantity}</td>
                                <td>{message.address}</td>
                                <td>{message.transporter}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TransportDashboard