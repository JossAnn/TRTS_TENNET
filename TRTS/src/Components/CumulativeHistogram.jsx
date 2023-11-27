import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CumulativeHistogram() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Carbon dioxide (ppm)',
        data: [],
        borderColor: 'rgba(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192)',
        fill: false,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/sensors');
        const data = await response.json();

        const lastTenData = data.slice(-10);

        const co2Data = lastTenData.map(item => item.co2);

        const cumulativeData = co2Data.reduce((acc, value) => {
          if (acc.length > 0) {
            acc.push(acc[acc.length - 1] + value);
          } else {
            acc.push(value);
          }
          return acc;
        }, []);

        setChartData(prevData => ({
          ...prevData,
          labels: data.map((_, index) => `${index * 1} min`),
          datasets: [{
            ...prevData.datasets[0],
            data: cumulativeData
          }]
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full bg-[#A49C9F] custom-shadow rounded-bl-2xl rounded-br-2xl col-span-10 flex flex-col items-center justify-center">
      <Line data={chartData} />
    </div>
  );
}

export default CumulativeHistogram;