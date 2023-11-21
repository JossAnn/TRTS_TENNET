import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CumulativeHistogram() {
  // Datos de ejemplo
  const dataPoints = [12, 19, 3, 5, 2, 3];

  const cumulativeData = dataPoints.reduce((acc, value) => {
    if (acc.length > 0) {
      acc.push(acc[acc.length - 1] + value);
    } else {
      acc.push(value);
    }
    return acc;
  }, []);

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Carbon dioxide',
        data: cumulativeData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
