import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MixedChart() {
  const [luxometerValues, setLuxometerValues] = useState([0, 100]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:6000/sensor');
        const data = await response.json();
        const lastluxometer = data[data.length - 1]?.luxometer || 0;
        setLuxometerValues([lastluxometer, 0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ['Luxometer'],
    datasets: [
      {
        label: 'Luxometer',
        data: [luxometerValues],   
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
        max: 500, 
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