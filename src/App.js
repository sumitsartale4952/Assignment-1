import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route,Link } from "react-router-dom";
import Login from './componets/Login';
import Home from './componets/Home';
import Dashboard from'./componets/Dashboard';
import './App.css';
const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    // update current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

     // cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);



  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
       
     </ul>
     <div className="current-time"> {currentTime}</div>
    </nav>
    <div className="container">
     <Routes>
       
       < Route path="/" element={<Home/>}/>
      < Route path="/login" element={<Login/>}/>
      < Route path="/dashboard" element={<Dashboard/>}/>
      
     </Routes>
    </div>
    </div>
   
  );
}

export default App;
