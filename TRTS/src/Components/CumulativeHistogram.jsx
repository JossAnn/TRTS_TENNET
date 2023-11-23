import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CumulativeHistogram() {
  const dataPoints = [845, 312, 698, 429, 560, 193];

  const cumulativeData = dataPoints.reduce((acc, value) => {
    if (acc.length > 0) {
      acc.push(acc[acc.length - 1] + value);
    } else {
      acc.push(value);
    }
    return acc;
  }, []);

  const labels = ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Carbon dioxide (ppm)',
        data: cumulativeData,
        borderColor: 'rgba(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="w-full h-full bg-[#A49C9F] custom-shadow rounded-bl-2xl rounded-br-2xl col-span-10 flex flex-col items-center justify-center">
      <Line data={data} options={options} />
    </div>
  );
}

export default CumulativeHistogram;

