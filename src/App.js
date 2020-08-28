import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js'
import SidebarOption from './SidebarOption';


function App() {
  return (
    // Using BEM convetion
    <div className="app">
      <h1>Aprenda</h1>
      {/* Sidebar */}
      <Sidebar />

      {/* <SidebarOption />
      <SidebarOption />
      <SidebarOption /> */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
