import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = ({ data }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'new_user':
        return '👤';
      case 'new_post':
        return '📝';
      case 'like':
        return '❤️';
      case 'comment':
        return '💬';
      case 'share':
        return '🔄';
      default:
        return '📊';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'new_user':
        return 'blue';
      case 'new_post':
        return 'green';
      case 'like':
        return 'red';
      case 'comment':
        return 'purple';
      case 'share':
        return 'orange';
      default:
        return 'gray';
    }
  };

  return (
    <div className="activity-feed">
      <div className="activity-list">
        {data.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className={`activity-icon ${getActivityColor(activity.type)}`}>
              <span>{getActivityIcon(activity.type)}</span>
            </div>
            <div className="activity-content">
              <div className="activity-header">
                <span className="user-avatar">{activity.avatar}</span>
                <div className="activity-text">
                  <span className="username">@{activity.user}</span>
                  <span className="action">{activity.action}</span>
                </div>
              </div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="activity-footer">
        <button className="view-all-btn">
          View All Activities
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;