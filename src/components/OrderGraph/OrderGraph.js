import React, { useState } from 'react';
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

const ChartGallery = ({ orders }) => {
  const [i, setI] = useState(0);

  const increaseI = () => {
    if (i < orders.length - 1) {
      setI(prevI => prevI + 1)
    }
  };

  const decreaseI = () => {
    if (i > 0) {
      setI(prevI => prevI - 1)
    }
  };

  return (
    <>
      <div className='flex flex-row justify-between px-1-4'>
        <button
          onClick={increaseI}
          disabled={i === orders.length - 1}
          className={`${i === orders.length - 1 ? 'text-neutral-600' : 'text-white'} font-black text-xl`}
        >
          &lt;
        </button>
        <h1 className={`${i === 0 ? 'font-bold' : ''} text-white text-center px-6 pt-0.5 m-0`} >{orders[i].month}</h1>
        <button
          onClick={decreaseI}
          disabled={i === 0}
          className={`${i === 0 ? 'text-neutral-600' : 'text-white'} font-black text-xl`}
        >
          &gt;
        </button>
      </div>
      <div className='flex-grow'>
        <BarChart labels={orders[i].labels} values={orders[i].data} />
      </div>
    </>
  );
};

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
        ticks: {
          stepSize: 1,
          min: 1
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (context) => {
            return ` $${context.formattedValue}`;
          },
        },
      },
    }
  };

  return <Bar data={data} options={options} />
};

const OrderGraph = ({ orders }) => {
  return (
      <div className="flex flex-col gap-3 w-full lg:w-2/3">
        <span className="text-white text-2xl font-thin">Your Sales</span>
        <div className="flex flex-col gap-5 p-6 bg-neutral-800 w-full h-full">
          {orders.length === 0 ? (
              <h1 className="text-white m-auto pb-6">No order data</h1>
          ) : (
              <ChartGallery orders={orders} />
          )}
        </div>
      </div>
  );
}

export default OrderGraph;
