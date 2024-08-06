import React from 'react';
import { Routes, Route,} from "react-router-dom";
import HomePage from './Pages/Home-Page';
import ServicesPage from './Pages/Services-Page';

const App: React.FC = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/services" element={<ServicesPage/>} />
    </Routes >
  );
};

export default App;
