import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

function BarChart() {
  const data = {
    labels: ['Humedad Actual', 'Restante'],
    datasets: [
      {
        label: 'Humidity',
        data: [83, 17],
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(211, 211, 211, 0.5)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(211, 211, 211, 1)'],
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

