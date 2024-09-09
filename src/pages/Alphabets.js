import React from 'react';
import '../styles/Alphabets.css';
import { Line } from 'react-chartjs-2';

function Alphabets() {
  const alphabetProgress = 70; 

  const alphabetData = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    datasets: [
      {
        label: 'Alphabets Learning Progress',
        data: [10, 20, 30, 40, 55, 65, 70],
        fill: true,
        borderColor: '#4b0082',
        backgroundColor: 'rgba(75, 0, 130, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const progressOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Alphabet Learning Progress',
      },
    },
  };

  return (
    <div className="alphabets">
      <h2>Learn Gujarati Alphabets</h2>
      <p>Explore the Gujarati alphabet, practice writing, and engage with interactive sign language tutorials to bridge communication gaps.</p>

     
      <div className="gamified-learning">
        <h3>Gamified Learning Experience</h3>
        <p>Unlock achievements as you master Gujarati alphabets.</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${alphabetProgress}%` }}>{alphabetProgress}%</div>
        </div>
      </div>

      
      <div className="sign-language-translation">
        <h3>Real-Time Sign Language Translation</h3>
        <p>Translate between Gujarati text, speech, and sign language instantly.</p>
        <div className="sign-language-box">
          <p>Gesture recognition active...</p>
          <button className="translate-button">Start Translation</button>
        </div>
      </div>

      {/* Alphabet Learning Progress with Chart */}
      <div className="progress-graph">
        <h3>Alphabet Learning Progress</h3>
        <Line data={alphabetData} options={progressOptions} />
      </div>

      {/* Interactive Writing Practice Section */}
      <div className="writing-practice">
        <h3>Interactive Writing Practice</h3>
        <p>Practice writing Gujarati alphabets with real-time feedback.</p>
        <div className="writing-box">
          <button className="writing-button">Start Writing Practice</button>
        </div>
      </div>

      {/* Two-Way Communication Support */}
      <div className="communication-section">
        <h3>Two-Way Communication</h3>
        <p>Enable seamless communication between students, parents, and teachers with advanced gesture recognition and text-to-speech functionality.</p>
        <button className="communication-button">Enable Communication</button>
      </div>
    </div>
  );
}

export default Alphabets;
