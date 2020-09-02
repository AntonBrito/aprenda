import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js';
import Widgets from "./Widgets.js"


function App() {
  return (
    // Using BEM convetion
    <div className="app">
      <h1>Aprenda</h1>
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
