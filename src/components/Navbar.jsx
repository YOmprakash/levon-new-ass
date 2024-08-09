import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaQrcode,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="bg-white w-full text-blue-500 flex items-center p-4 justify-between">
      <div className="flex items-center">
        <button className="text-black mr-4 lg:hidden" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>

        <div className="relative flex items-center  w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 text-black pl-10 pr-4 py-2 rounded-md focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <FaEnvelope size={20} />
          <FaBell size={20} />
          <FaQrcode size={20} />
        </div>

        <div className="relative">
          <FaUserCircle
            size={24}
            onClick={togglePopup}
            className="cursor-pointer lg:hidden"
          />

          {isPopupOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 lg:hidden z-20">
              <div className="flex flex-col items-start">
                <span className="font-semibold">Omprakash</span>
                <span className="text-sm text-gray-400">
                  omprakash@example.com
                </span>
              </div>
            </div>
          )}

          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            <FaUserCircle size={24} className="cursor-pointer" />
            <div className="flex flex-col">
              <span className="font-semibold">Omprakash</span>
              <span className="text-sm text-gray-400">
                omprakash@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
