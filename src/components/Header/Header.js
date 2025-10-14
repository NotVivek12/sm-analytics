import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onToggleSidebar} aria-label="Toggle menu">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <h1 className="header-title">Social Media Analytics</h1>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <div className="user-avatar">
            <span>👤</span>
          </div>
          <span className="user-name">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;