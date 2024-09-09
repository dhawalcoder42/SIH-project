import React from 'react';
import '../styles/Science.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Science() {
  const quizScore = 80; 
  const practicalCompletion = 50; 

  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Science Knowledge Progress (%)',
        data: [30, 50, 65, 85, 90],
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
        text: 'Learning Progress Over Time',
      },
    },
  };

  return (
    <div className="science">
      <h2>Learn Science</h2>
      <p>Understand basic science principles with sign language tutorials, interactive exercises, and real-time progress tracking.</p>

      <div className="quizzes-section">
        <h3>Quizzes</h3>
        <p>Take quizzes to test your understanding of scientific concepts.</p>
        <div className="quiz-score">
          <span>Quiz Score: {quizScore}%</span>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-bar-fill" style={{ width: `${quizScore}%` }}>{quizScore}%</div>
          </div>
        </div>
        <button className="quiz-button">Start New Quiz</button>
      </div>

     
      <div className="practicals-section">
        <h3>Practical Exercises</h3>
        <p>Complete practicals and experiments to enhance your learning.</p>
        <div className="practical-progress">
          <span>Practical Completion: {practicalCompletion}%</span>
          <div className="practical-progress-bar">
            <div className="practical-progress-bar-fill" style={{ width: `${practicalCompletion}%` }}>{practicalCompletion}%</div>
          </div>
        </div>
        <button className="practical-button">Start Practical Exercise</button>
      </div>

      
      <div className="progress-graph">
        <h3>Learning Progress Over Time</h3>
        <Line data={progressData} options={progressOptions} />
      </div>

    
      <div className="exercise-section">
        <h3>Interactive Exercises</h3>
        <div className="exercise-box">
          <p>Engage in interactive exercises to practice what you've learned.</p>
          <div className="exercise-animation">✨ Interactive Animations ✨</div>
          <button className="exercise-button">Start Exercise</button>
        </div>
      </div>
    </div>
  );
}

export default Science;
