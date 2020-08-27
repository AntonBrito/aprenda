import React from 'react';
import './App.css';
import sidebar from 'sidebar.js'

function App() {
  return (
    // Using BEM convetion
    <div className="app">
      <h1>Aprenda</h1>
      {/* Sidebar */}
      <sidebar/>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
