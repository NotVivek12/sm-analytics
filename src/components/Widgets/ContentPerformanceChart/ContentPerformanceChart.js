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
import './ContentPerformanceChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ContentPerformanceChart = ({ data }) => {
  const labels = data.map(post => 
    post.title.length > 15 ? `${post.title.substring(0, 15)}...` : post.title
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Likes',
        data: data.map(post => post.likes),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: '#3b82f6',
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
            return data[dataIndex].title;
          },
          label: function(context) {
            return `Likes: ${context.parsed.y.toLocaleString()}`;
          },
          afterLabel: function(context) {
            const dataIndex = context.dataIndex;
            const post = data[dataIndex];
            return [
              `Comments: ${post.comments.toLocaleString()}`,
              `Shares: ${post.shares.toLocaleString()}`,
              `Author: ${post.author}`,
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
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
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
    <div className="content-performance-chart">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ContentPerformanceChart;