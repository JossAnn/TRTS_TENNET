import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CumulativeChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'co2',
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
          const response = await fetch('http://44.196.3.52:3006/sensor');
          const data = await response.json();
          const updatedChartData = {
            labels: data.map((_, index) => `${index * 1} min`),
            datasets: [{
              label: 'co2',
              data: data.map(item => item.co2),
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

export default CumulativeChart;