import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(Tooltip, Legend, ArcElement);

function BarChart() {
  const [humidityData, setHumidityData] = useState([0, 100]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:6000/sensor');
        const data = await response.json();
        const lastHumidity = data[data.length - 1]?.humidity || 0;
        setHumidityData([lastHumidity, 100 - lastHumidity]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ['Humedad Actual', 'Restante'],
    datasets: [
      {
        label: 'Humidity',
        data: humidityData,
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(211, 211, 211)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(211, 211, 211)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            let label = data.labels[tooltipItem.dataIndex] || '';
            if (label) {
              label += ': ';
            }
            label += tooltipItem.parsed + '%';
            return label;
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-full bg-[#A49C9F] custom-shadow rounded-bl-2xl rounded-br-2xl col-span-10 flex flex-col items-center justify-center">
      <div style={{ width: '50%', height: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;

