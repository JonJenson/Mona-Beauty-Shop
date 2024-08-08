import React from "react";
import Services from "../Components/Services/services";
import Navbar from "../Components/Navbar/navbar";
import { useState } from "react";
import Sidebar from "../Components/Sidebar/sidebar";

const ServicesPage : React.FC = ()=>{
    const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
    return (
        <>
         <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
         {isSidebarOpen && <Sidebar  isOpen = {isSidebarOpen}  toggleSidebar={toggleSidebar} />}
        <Services/>
        </>
    )
}
export default ServicesPage;