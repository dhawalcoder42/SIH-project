import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Alphabets from './pages/Alphabets';
import Mathematics from './pages/Mathematics';
import Science from './pages/Science';
import Converter from './pages/Converter';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alphabets" element={<Alphabets />} />
            <Route path="/mathematics" element={<Mathematics />} />
            <Route path="/science" element={<Science />} />
            <Route path="/converter" element={<Converter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
