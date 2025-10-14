import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeModule, onModuleChange, isOpen, onClose }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '📊',
    },
    {
      id: 'users',
      label: 'User Management',
      icon: '👥',
    },
    {
      id: 'posts',
      label: 'Post Management',
      icon: '📝',
    },
    {
      id: 'followers',
      label: 'Follower Activity',
      icon: '👥',
    },
  ];

  const handleItemClick = (moduleId) => {
    onModuleChange(moduleId);
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeModule === item.id ? 'active' : ''}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;