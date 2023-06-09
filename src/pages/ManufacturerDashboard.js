import React ,{useState,useEffect} from 'react'
import '../components/transporter.css';
import '../components/manufacturer.css';
import "../components/Navbar.js";
import axios from 'axios';
import Navbar from '../components/Navbar.js';

const ManufacturerDashboard = () => {

  const [messages, setMessages] = useState([]);
  const [searchOrderId, setSearchOrderId] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://back-dash.onrender.com/api/transMessage/messages');
      setMessages(response.data);
    } catch (error) {
      // Handle error
    }
  };


  const filteredMessages = messages.filter((message) => {
    // Check if the message matches the search criteria
    const matchesOrderId = message.orderId.orderId.includes(searchOrderId);

    // Return true if the search criteria match
    return matchesOrderId;
  });
  return (
    <>
 <Navbar/>
    <div>

        <h2>Manufacturer Dashboard</h2>
        <h5 style={{marginTop:"20px"}}>Click OrderID for populating information.....</h5>
        <div>
          <label htmlFor="searchOrderId">Search by Order ID:</label>
          <input
            id="searchOrderId"
            type="text"
            value={searchOrderId}
            onChange={(e) => setSearchOrderId(e.target.value)}
          />

        </div>
        <h3 className='populate'>Received Messages from Transporter</h3>
        <table className='message-table'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Price</th>

            </tr>
          </thead>
    

          <tbody>
            {filteredMessages.map((message) => (
              <tr key={message._id} onClick={() => setSelectedMessage(message)} className={selectedMessage === message ? "selected-row" : ""}  >
                <td>{message.orderId.orderId}</td>
                <td>{message.price}</td>
              </tr>
            ))}

          
          </tbody>

        </table>

        {selectedMessage && (

          <div>
          <div className='populate'>
          <h2>Selected Message Details:</h2>

          </div>
            <p><strong className='head'>From:</strong> {selectedMessage.orderId.from}</p>
            <p><strong className='head'>To:</strong> {selectedMessage.orderId.to}</p>
            <p><strong className='head'>Address:</strong> {selectedMessage.orderId.address}</p>
            <p><strong className='head'>Quantity:</strong> {selectedMessage.orderId.quantity}</p>


          </div>
        )}
      </div>

                
              </>
  )
}

export default ManufacturerDashboard