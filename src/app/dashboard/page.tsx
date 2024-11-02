// src/app/dashboard/page.tsx

"use client"; // Ensure this is a client component

import React, { useState, ChangeEvent } from "react"; // Importing ChangeEvent for event typing
import Image from "next/image";
import Link from "next/link";

const DashboardPage: React.FC = () => {
  // Using React.FC for the component
  const [searchTerm, setSearchTerm] = useState<string>(""); // Explicitly typing state as string
  const currentDate: string = new Date().toLocaleDateString(); // Explicitly typing currentDate

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // Typing the event
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-black">
      {/* Top Navbar */}
      <nav className="bg-gray-800 p-4 flex items-center">
        <div className="flex items-center space-x-6">
          <span className="text-white font-bold text-xl">Yeti Express</span>
          <div className="flex space-x-4 items-center">
            <Link href="/dashboard">
              <button className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
                Dashboard
              </button>
            </Link>
            <Link href="/resources">
              <button className="text-white bg-purple-600 bg-opacity-50 px-3 py-1 rounded-md hover:bg-purple-700">
                Resources
              </button>
            </Link>
            <Link href="/integrations">
              <button className="text-white hover:text-gray-300">
                Integrations
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded border"
            value={searchTerm}
            onChange={handleSearchChange} // Updated to use the typed handler
          />
          <Image
            src="/setting.png"
            alt="Settings"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <Image
            src="/bell.png"
            alt="Notifications"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <Image
            src="/leanne.png"
            alt="Profile"
            width={24}
            height={24}
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>

      {/* Date Row */}
      <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Today</h2>
        <div className="flex items-center space-x-2 text-gray-700">
          <Image src="/calendarr.png" alt="Calendar" width={24} height={24} />
          <span className="text-lg font-medium">{currentDate}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="tableau-link">
        <h2>View Full Dashboard</h2>
        <a href="YOUR_TABLEAU_LINK" target="_blank" rel="noopener noreferrer">
          <button className="view-dashboard-button">
            Open Tableau Dashboard
          </button>
        </a>
      </div>

      {/* Additional Content for Dashboard can go here */}
    </div>
  );
};

export default DashboardPage;
