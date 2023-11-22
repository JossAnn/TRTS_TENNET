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
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.5, 
      },
    ],
  });

  useEffect(() => {
    // Leer datos de localStorage al montar el componente
    const savedData = localStorage.getItem('chartData');
    if (savedData) {
      setChartData(JSON.parse(savedData));
    } else {
      const initialData = {
        labels: Array(6).fill(''),
        datasets: [{
          label: 'Temperature',
          data: Array(6).fill(0).map(() => 23 + Math.random() * 2),
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.5, 
        }]
      };
      localStorage.setItem('chartData', JSON.stringify(initialData));
      setChartData(initialData);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const now = new Date();
        const newLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        const newDataPoint = 23 + Math.random() * 2;

        const newData = {
          ...prevData,
          labels: [...prevData.labels.slice(-6), newLabel],
          datasets: [{
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data.slice(-6), newDataPoint]
          }]
        };

        localStorage.setItem('chartData', JSON.stringify(newData));
        return newData;
      });
    }, 600000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#A49C9F] custom-shadow rounded-bl-2xl rounded-br-2xl col-span-10 flex flex-col items-center justify-center">
      <Line data={chartData} />
    </div>
  );
}

export default MountainChart;



