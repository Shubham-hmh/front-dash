import React from 'react';
import TransporterForm from '../components/TransporterForm';
import Navbar from '../components/Navbar';

const TransporterPage = () => {
  return (
    <div>
    <Navbar/>
      <TransporterForm userType="transporter" />
    </div>
  );
};

export default TransporterPage;
