'use client';
import { Dashboard } from "@/components/Dashboard";
import { Sidebar } from "@/components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="relative flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
          className="relative z-30"
        />
        <div 
          className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'} lg:ml-64`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
