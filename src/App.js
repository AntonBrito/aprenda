import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js';
import Widgets from "./Widgets.js";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


function App() {
  return (
    // Using BEM convention
    <div className="app">
      <h1>Aprenda</h1> 
      <WbIncandescentIcon className="sidebar__lampIcon"/>
      
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
