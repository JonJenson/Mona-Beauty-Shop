import React from 'react';
import { Routes, Route,} from "react-router-dom";
import Sidebar from './Components/Sidebar/sidebar';
import Navbar from './Components/Navbar/navbar';

const App: React.FC = () => {
  return (
    <Routes>
       <Route path="/" element={<Sidebar/>} />
       <Route path="/s" element={<Navbar/>} />
    </Routes >
  );
};

export default App;
