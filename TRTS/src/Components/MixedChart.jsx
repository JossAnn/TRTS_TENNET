import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MixedChart() {
  const [luxometerValues, setLuxometerValues] = useState([]);
  const [luxometerValue, setLuxometerValue] = useState(0);

  useEffect(() => {
    setLuxometerValues(prevValues => [...prevValues, luxometerValue]);
  }, [luxometerValue]);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/sensors');
        const data = await response.json();
        setLuxometerValue(data.map(item => item.temperature));
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, []);

  const lastLuxometerValue = luxometerValues.slice(-1)[0] || 0;

  const data = {
    labels: ['Luxometer'],
    datasets: [
      {
        label: 'Luxometer',
        data: [lastLuxometerValue],
        backgroundColor: 'rgba(75,192,192)',
        borderColor: 'rgba(75,192,192)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100, 
      },
    },
  };

  return (
    <div className="w-full h-full bg-[#A49C9F] custom-shadow rounded-bl-2xl rounded-br-2xl col-span-10 flex flex-col items-center justify-center">
      <Bar data={data} options={options} />
    </div>
  );
}

export default MixedChart;