import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { mockData } from '../../mockData';
import KeyMetricsCards from '../Widgets/KeyMetricsCards/KeyMetricsCards';
import EngagementChart from '../Widgets/EngagementChart/EngagementChart';
import ContentPerformanceChart from '../Widgets/ContentPerformanceChart/ContentPerformanceChart';
import UserGrowthChart from '../Widgets/UserGrowthChart/UserGrowthChart';
import ActivityFeed from '../Widgets/ActivityFeed/ActivityFeed';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from API
    const loadData = () => {
      setTimeout(() => {
        setData(mockData);
        setLoading(false);
      }, 500);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading analytics data...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Analytics Dashboard</h2>
        <p>Overview of your social media performance</p>
      </div>

      <div className="dashboard-grid">
        {/* Key Metrics Cards */}
        <div className="grid-item full-width">
          <KeyMetricsCards data={data.keyMetrics} weeklyData={data.weeklyEngagement} />
        </div>

        {/* Daily/Weekly Engagement Chart */}
        <div className="grid-item large">
          <div className="widget">
            <div className="widget-header">
              <h3>Daily Engagement Trends</h3>
              <p>Likes, Comments, and Shares over the last 30 days</p>
            </div>
            <EngagementChart data={data.dailyEngagement} />
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="grid-item medium">
          <div className="widget">
            <div className="widget-header">
              <h3>User Growth</h3>
              <p>New users joining over time</p>
            </div>
            <UserGrowthChart data={data.userGrowth} />
          </div>
        </div>

        {/* Content Performance Chart */}
        <div className="grid-item medium">
          <div className="widget">
            <div className="widget-header">
              <h3>Top Performing Posts</h3>
              <p>Posts with highest engagement</p>
            </div>
            <ContentPerformanceChart data={data.topPosts} />
          </div>
        </div>

        {/* Activity Feed */}
        <div className="grid-item medium">
          <div className="widget">
            <div className="widget-header">
              <h3>Recent Activity</h3>
              <p>Latest user interactions</p>
            </div>
            <ActivityFeed data={data.recentActivities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;