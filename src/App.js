import './App.css';
import React, { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>

        <Route exact path="/" element= { <Feed/> } />

      </Routes>

    </Router>
  );
}

export default App;
