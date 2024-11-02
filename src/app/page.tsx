// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ParcelDashboardClient = () => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  // Helper function to color-code predicted demand values
  const getPredictedDemandColor = (demand: number) => {
    if (demand >= 5000) return "text-red-500"; // High demand
    if (demand >= 3000) return "text-yellow-500"; // Moderate demand
    return "text-green-500"; // Low demand
  };

  return (
    <div className="bg-gray-100 min-h-screen text-black">
      {/* Top Navbar */}
      <nav className="bg-gray-800 p-4 flex items-center">
        <div className="flex items-center space-x-6">
          <span className="text-white font-bold text-xl">Yeti Express</span>
          <div className="flex space-x-4 items-center">
            <Link href="/dashboard">
              <button className="text-white rounded-md hover:bg-purple-700">
                Dashboard
              </button>
            </Link>
            <Link href="/resources">
              <button className="text-white rounded-md hover:bg-purple-700">
                Resources
              </button>
            </Link>
            <Link href="/integrations">
              <button className="text-white rounded-md hover:bg-purple-700">
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Image
            src="/setting.png" // Ensure the correct path if your image is in the public folder
            alt="Settings"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <Image
            src="/bell.png" // Ensure the correct path if your image is in the public folder
            alt="Notifications"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <Image
            src="/leanne.png" // Ensure the correct path if your image is in the public folder
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
          <Image
            src="/calendarr.png" // Ensure this path is correct for your calendar icon
            alt="Calendar"
            width={24} // Slightly larger icon for better alignment
            height={24}
          />
          <span className="text-lg font-medium">{currentDate}</span>
        </div>
      </div>

      {/* Summary Tiles */}
      <div className="grid grid-cols-4 gap-4 mb-6 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <p>Total Parcel to be Delivered</p>
          <h2 className="text-3xl font-semibold">3458</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>Total Parcel Delivered</p>
          <h2 className="text-3xl font-semibold">1286</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>Total Fleet</p>
          <h2 className="text-3xl font-semibold">280</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>Total Manpower</p>
          <h2 className="text-3xl font-semibold">264</h2>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <input type="date" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option value="">State</option>
            {/* Add state options here */}
          </select>
          <select className="border p-2 rounded">
            <option value="">Postal Code</option>
            {/* Add postal code options here */}
          </select>
          <select className="border p-2 rounded">
            <option value="">Predicted Demand Status</option>
            {/* Add demand status options here */}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-purple-500 text-white py-2 px-4 rounded">
            + Add Parcel Hub
          </button>
        </div>
      </div>

      {/* Parcel Hubs Table */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Parcel Hubs</h2>
        <table className="min-w-full bg-white mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 text-center">Parcel Hub</th>
              <th className="py-2 px-4 text-center">Address</th>
              <th className="py-2 px-4 text-center">Contact No</th>
              <th className="py-2 px-4 text-center">Postal Code</th>
              <th className="py-2 px-4 text-center">Fleet</th>
              <th className="py-2 px-4 text-center">Manpower</th>
              <th className="py-2 px-4 text-center">Predicted Demand</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, index) => {
              const address = `Building ${
                index + 1
              }, Street ${String.fromCharCode(
                65 + index
              )}, City Center, Level ${10 + index}`;
              const contactNumber = `(+601) ${Math.floor(
                1000 + Math.random() * 9000
              )} ${Math.floor(1000 + Math.random() * 9000)}`;
              const predictedDemand = 1500 + index * 800; // Example demand calculation

              return (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 text-center">
                    Parcel Hub {index + 1}
                  </td>
                  <td className="py-2 px-4 text-center">{address}</td>
                  <td className="py-2 px-4 text-center">{contactNumber}</td>
                  <td className="py-2 px-4 text-center">
                    40{150 + index * 100}
                  </td>
                  <td className="py-2 px-4 text-center">10</td>
                  <td className="py-2 px-4 text-center">7</td>
                  <td
                    className={`py-2 px-4 text-center ${getPredictedDemandColor(
                      predictedDemand
                    )}`}
                  >
                    {predictedDemand}
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button className="bg-purple-500 text-white py-1 px-3 rounded">
                      Manage
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button className="text-purple-500">Previous</button>
          <div className="space-x-2">
            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button key={pageNum} className="text-purple-500">
                {pageNum}
              </button>
            ))}
          </div>
          <button className="text-purple-500">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ParcelDashboardClient;
