// Dashboard.jsx

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import LineChart from "./LineChart";
import Overview from "./Overview";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const toggleStartDatePicker = () => {
    setShowStartDatePicker(!showStartDatePicker);
    setShowEndDatePicker(false);
  };

  const toggleEndDatePicker = () => {
    setShowEndDatePicker(!showEndDatePicker);
    setShowStartDatePicker(false);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-blue-500 mb-6">
        <h1 className="text-2xl font-semibold text-blue-500 mb-4 md:mb-0">Overview</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div
              onClick={toggleStartDatePicker}
              className="flex items-center bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              <FaCalendarAlt className="mr-2" />
              <span>{startDate.toDateString()}</span>
              <FaChevronDown className="ml-2 text-gray-400" />
            </div>
            {showStartDatePicker && (
              <div className="absolute top-12 z-10">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
            )}
          </div>

          <div className="relative">
            <div
              onClick={toggleEndDatePicker}
              className="flex items-center bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              <FaCalendarAlt className="mr-2" />
              <span>{endDate.toDateString()}</span>
              <FaChevronDown className="ml-2 text-gray-400" />
            </div>
            {showEndDatePicker && (
              <div className="absolute top-12 right-0 z-10">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  inline
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Overview />

      <div className="bg-white p-6  grid sm:grid-cols-2 gap-6 md:grid-cols-3 rounded-lg shadow-md mt-8">
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
