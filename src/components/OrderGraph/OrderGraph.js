import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [{
      data: values,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      bar: {
        backgroundColor: '#7400DC',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += '$' + context.formattedValue;
            return label;
          },
        },
      },
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full lg:w-2/3">
      <span className="text-white text-2xl font-thin">Your Sales</span>
      <div className="p-8 bg-neutral-800 w-full h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
