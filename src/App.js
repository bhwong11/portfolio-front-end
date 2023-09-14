import './App.css';
import React from "react";
import Routes from './config/routes'
import Navbar from './nav/navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
