import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function MountainChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperature',
        data: [], 
        fill: true,
        backgroundColor: 'rgba(75,192,192)',
        borderColor: 'rgba(75,192,192)',
        tension: 0.5, 
      },
    ],
  });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:3000/sensor');
          const data = await response.json();
          console.log(data)
          const updatedChartData = {
            labels: data.map((_, index) => `${index * 1} min`),
            datasets: [{
              label: 'Temperature',
              data: data.map(item => item.temperature),
              fill: true,
              backgroundColor: 'rgba(75,192,192)',
              borderColor: 'rgba(75,192,192)',
              tension: 0.5, 
            }]
          };
          
          setChartData(updatedChartData);
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

export default MountainChart;
