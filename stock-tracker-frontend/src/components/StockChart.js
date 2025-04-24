import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const StockChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date), // Assuming data has a date field
    datasets: [
      {
        label: 'Stock Price',
        data: data.map((item) => item.close), // Assuming data has a close field
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default StockChart;
