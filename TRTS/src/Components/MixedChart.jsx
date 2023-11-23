import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MixedChart() {
  const luxometerValue = 0.83;

  const data = {
    labels: ['Luxometer'],
    datasets: [
      {
        label: 'Luxometer',
        data: [luxometerValue],
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
        max: 20, 
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


