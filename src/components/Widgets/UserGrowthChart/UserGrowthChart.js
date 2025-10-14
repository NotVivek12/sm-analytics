import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './UserGrowthChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const UserGrowthChart = ({ data }) => {
  const labels = data.map(item => {
    const date = new Date(item.date);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Users',
        data: data.map(item => item.totalUsers),
        fill: true,
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        borderColor: '#8b5cf6',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          title: function(context) {
            const dataIndex = context[0].dataIndex;
            const date = new Date(data[dataIndex].date);
            return date.toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric' 
            });
          },
          label: function(context) {
            const dataIndex = context.dataIndex;
            return [
              `Total Users: ${context.parsed.y.toLocaleString()}`,
              `New Users: ${data[dataIndex].newUsers.toLocaleString()}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#6b7280',
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: '#f3f4f6',
          borderDash: [2, 2],
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#6b7280',
          callback: function(value) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="user-growth-chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default UserGrowthChart;