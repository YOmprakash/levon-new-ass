import {
  FaUniversity,
  FaBook,
  FaBuilding,
  FaTicketAlt,
  FaEnvelope,
  FaUser,
  FaGavel,
  FaChevronRight,
} from "react-icons/fa";
import Logo from "../assets/Logo.webp";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`h-screen bg-[#136ad5] p-4 text-white flex flex-col transition-transform duration-300 transform lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static fixed inset-y-0 left-0 w-64 z-20`}
    >
  <button
        onClick={toggleSidebar}
        className="md:hidden text-white p-4 absolute top-0 right-0"
      >
        <FaTimes size={24} />
      </button>
      <div className="p-4 flex items-center justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-full mt-4 object-contain"
        />
      </div>

      <nav className="flex flex-col mt-4 space-y-2">
        <a
          href="/government-overview"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaGavel className="mr-3" size={20} />
          <span className="flex-grow">Government Overview</span>
          <FaChevronRight size={14} />
        </a>
        <a
          href="/institute-registry"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaUniversity className="mr-3" size={20} />
          <span className="flex-grow">Institute Registry</span>
          <FaChevronRight size={14} />
        </a>
        <a
          href="/academics"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaBook className="mr-3" size={20} />
          <span className="flex-grow">Academics</span>
          <FaChevronRight size={14} />
        </a>
        <a
          href="/institute-inception"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaBuilding className="mr-3" size={20} />
          <span className="flex-grow">Institute Inception</span>
          <FaChevronRight size={14} />
        </a>
        <a
          href="/raise-ticket"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaTicketAlt className="mr-3" size={20} />
          <span className="flex-grow">Raise a Ticket</span>
          <FaChevronRight size={14} />
        </a>
        <a
          href="/communication"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaEnvelope className="mr-3" size={20} />
          <span className="flex-grow">Communication</span>
          <FaChevronRight size={14} />
        </a>
        <a
          href="/profile"
          className="flex items-center p-3 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
        >
          <FaUser className="mr-3" size={20} />
          <span className="flex-grow">Profile</span>
          <FaChevronRight size={14} />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
