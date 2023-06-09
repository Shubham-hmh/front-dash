
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TransporterPage from "./pages/TransporterPage";
import ManufacturerPage from './pages/ManufacturerPage';
import Home from './pages/Home';
import TransportDashboard from './pages/TransportDashboard';
import ManufacturerDashboard from './pages/ManufacturerDashboard';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home/>} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<RegistrationPage />} />
                    <Route path="transporter" element={<TransporterPage />} />
                    <Route path='manufacturer' element ={<ManufacturerPage/>} />
                    <Route path="transportDashboard" element={<TransportDashboard/>} />
                    <Route path="manufacturerDashboard" element={<ManufacturerDashboard/>} />

                </Routes>
            </BrowserRouter>

           
        </>
    )

}

export default App;