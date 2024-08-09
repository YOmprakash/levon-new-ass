import  { useState, useEffect } from "react";
import axios from "axios";
import { FaDollarSign, FaUsers, FaShoppingCart, FaBox } from "react-icons/fa";

const Overview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/a54c27fb-47f8-4fe4-be07-6d2c8c3f652b"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const iconMap = {
    FaDollarSign: <FaDollarSign size={24} />,
    FaUsers: <FaUsers size={24} />,
    FaShoppingCart: <FaShoppingCart size={24} />,
    FaBox: <FaBox size={24} />,
  };

  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(data.overview).map((key, index) => {
          const item = data.overview[key];
          return (
            <div
              key={key}
              className={`flex items-center p-4 border rounded-md shadow-md text-white ${
                colors[index % colors.length]
              }`}
            >
              {iconMap[item.icon]}
              <div className="ml-4">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
