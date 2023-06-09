import React from 'react';
import ManufacturerForm from '../components/ManufacturerForm';
import Navbar from '../components/Navbar';

const ManufacturerPage = () => {
  return (
    <div>
    <Navbar/>
      <ManufacturerForm userType="manufacturer" />
    </div>
  );
};

export default ManufacturerPage;
