import React from 'react';
import '../styles/Mathematics.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Mathematics() {
  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Progress (%)',
        data: [20, 40, 55, 70, 90],
        fill: false,
        borderColor: '#4b0082',
        tension: 0.1,
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
        text: 'Learning Progress Over Time',
      },
    },
  };

  return (
    <div className="mathematics">
      <h2>Learn Mathematics</h2>
      <p>Practice basic math operations in Gujarati.</p>

      {/* <div className="platform-features">
        <h3>Comprehensive Learning Platform</h3>
        <p>
          Our platform is designed for deaf and mute students, featuring Gujarati alphabets, numbers, words, and sentences with sign language interpretations.
           It offers interactive writing exercises, math and science tutorials, and assessments tailored for students with special needs.        
           With real-time conversion between Gujarati text/speech and sign language, it facilitates seamless communication for students, parents, and teachers.
           Progress tracking and analytics ensure personalized learning experiences, accessible from any device, bridging communication gaps and fostering inclusivity.
           Empower students to learn at their own pace, both at school and home, with our easy-to-use platform.
        </p>
      </div> */}

      {/* Progress Bar Section */}
      <div className="progress-section">
        <h3>Your Learning Progress</h3>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '70%' }}>70%</div>
        </div>
      </div>

      {/* Curved Progress Graph */}
      <div className="progress-graph">
        <h3>Progress Over Time</h3>
        <Line data={progressData} options={progressOptions} />
      </div>

      {/* Quizzes Section */}
      <div className="quizzes-section">
        <h3>Quizzes</h3>
        <p>Test your knowledge with interactive quizzes covering various mathematical topics.</p>
        <button className="quiz-button">Start Quiz</button>
      </div>

      {/* Exercise Box Section */}
      <div className="exercise-section">
        <h3>Exercise Box</h3>
        <div className="exercise-box">
          <p>Practice problems and interactive exercises for you to solve. Challenge yourself!</p>
          <button className="exercise-button">Start Exercise</button>
        </div>
      </div>
    </div>
  );
}

export default Mathematics;
