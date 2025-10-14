import React from 'react';
import './KeyMetricsCards.css';

const KeyMetricsCards = ({ data, weeklyData }) => {
  const calculatePercentageChange = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const metrics = [
    {
      title: 'Total Users',
      value: data.totalUsers.toLocaleString(),
      icon: '👥',
      change: calculatePercentageChange(
        data.totalUsers,
        data.totalUsers - 150 // Simulating previous period
      ),
      color: 'blue',
    },
    {
      title: 'Total Posts',
      value: data.totalPosts.toLocaleString(),
      icon: '📝',
      change: calculatePercentageChange(
        data.totalPosts,
        data.totalPosts - 45 // Simulating previous period
      ),
      color: 'green',
    },
    {
      title: 'Total Likes',
      value: data.totalLikes.toLocaleString(),
      icon: '❤️',
      change: calculatePercentageChange(
        weeklyData.thisWeek.likes,
        weeklyData.lastWeek.likes
      ),
      color: 'purple',
    },
    {
      title: 'Engagement Rate',
      value: `${data.engagementRate}%`,
      icon: '📊',
      change: calculatePercentageChange(6.8, 6.2),
      color: 'orange',
    },
  ];

  return (
    <div className="key-metrics-cards">
      {metrics.map((metric, index) => (
        <div key={index} className={`metric-card ${metric.color}`}>
          <div className="metric-icon">
            <span>{metric.icon}</span>
          </div>
          <div className="metric-content">
            <div className="metric-header">
              <h3>{metric.title}</h3>
              <div className={`metric-change ${parseFloat(metric.change) >= 0 ? 'positive' : 'negative'}`}>
                <span className="change-icon">
                  {parseFloat(metric.change) >= 0 ? '↗️' : '↘️'}
                </span>
                <span>{Math.abs(metric.change)}%</span>
              </div>
            </div>
            <div className="metric-value">{metric.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyMetricsCards;