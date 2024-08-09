import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'School Data',
        data: [],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    axios.get('https://66b5b0c5b5ae2d11eb644fd7.mockapi.io/api/LineChart/schools')
      .then((response) => {
        const responseData = response.data;

        const labels = responseData.map(item => item.label);
        const values = responseData.map(item => item.value);

        setChartData({
          labels,
          datasets: [
            {
              label: 'School Data',
              data: values,
              borderColor: '#4A90E2',
              backgroundColor: 'rgba(74, 144, 226, 0.2)',
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md">
      <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
      <Line ref={chartRef} data={chartData} />
    </div>
  );
};

export default LineChart;
