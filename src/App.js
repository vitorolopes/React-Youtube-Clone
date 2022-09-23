import './App.css';
import React, { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>

        <Route exact path="/" element= { <Feed/> } />

        <Route exact path="/video-details/:id" element= { <VideoDetails/> } />

      </Routes>

    </Router>
  );
}

export default App;
