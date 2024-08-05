import React from 'react';
import { Routes, Route,} from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import HomePage from './Pages/Home-Page';

const App: React.FC = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/s" element={<Navbar/>} />
    </Routes >
  );
};

export default App;
