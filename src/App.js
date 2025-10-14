import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <div className="placeholder-content">User Management - Coming Soon</div>;
      case 'posts':
        return <div className="placeholder-content">Post Management - Coming Soon</div>;
      case 'followers':
        return <div className="placeholder-content">Follower Activity - Coming Soon</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="app-body">
        <Sidebar
          activeModule={activeModule}
          onModuleChange={setActiveModule}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;