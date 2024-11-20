import React from "react";
import Header from "../Components/Home/Header";
import Slidebar from "../Components/Home/Slidebar";
import InfoCards from "../Components/Home/InfoCards";
import Statistics from "../Components/Home/Statistics";
import LatestTransactions from "../Components/Home/LatestTransactions";
import MedicationCalendar from "../Components/Home/MedicationCalendar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Slidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Header />
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">14:02 AM Today May, 2023</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Profile Growth Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Statistics (Gráfico principal) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <Statistics />
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <InfoCards />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          {/* Medication Calendar */}
          <div className="bg-white p-4 rounded-lg shadow lg:col-span-1">
            <MedicationCalendar />
          </div>

          {/* Latest Transactions */}
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow">
            <LatestTransactions />
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Dashboard;
