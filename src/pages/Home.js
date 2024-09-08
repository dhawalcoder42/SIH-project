import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';

function Home() {
  return (
    // Megh(09-09-24): I don't know how to manipulate the text here, someone else please help and make the text seem right.
    <div className="home-container">
      <div className="platform-features">
        <h3>Comprehensive Learning Platform</h3>
        <p>
          Our platform is designed for deaf and mute students, featuring Gujarati alphabets, numbers, words, and sentences with sign language interpretations.
        </p>
        <p>
          It offers interactive writing exercises, math and science tutorials, and assessments tailored for students with special needs.        
        </p>
        <p>  
          With real-time conversion between Gujarati text/speech and sign language, it facilitates seamless communication for students, parents, and teachers.
        </p>
        <p>  
          Progress tracking and analytics ensure personalized learning experiences, accessible from any device, bridging communication gaps and fostering inclusivity.
        </p>
        <p>  
          Empower students to learn at their own pace, both at school and home, with our easy-to-use platform.
        </p>
      </div> 
      {/* Image Carousel */}
      <div className="carousel-container">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          interval={3000} 
          transitionTime={1000}
          showStatus={false}
        >
          <div>
            <img src="https://via.placeholder.com/800x400?text=Learning+App+1" alt="Slide 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400?text=Learning+App+2" alt="Slide 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400?text=Learning+App+3" alt="Slide 3" />
          </div>
        </Carousel>
      </div>

      {/* Welcome Message */}
      <div className="welcome-section">
        <h2>Welcome to the Learning App</h2>
        <p>An inclusive learning platform for deaf and mute students in Gujarat.</p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-box fade-in">
          <h3>Sign Language Support</h3>
          <p>We provide real-time translation from text to sign language to make learning more accessible.</p>
        </div>
        <div className="feature-box fade-in">
          <h3>Interactive Lessons</h3>
          <p>Interactive lessons are crafted for students with special needs to foster better understanding.</p>
        </div>
        <div className="feature-box fade-in">
          <h3>Personalized Learning</h3>
          <p>Personalized lessons and progress tracking tailored to each student’s pace and skill level.</p>
        </div>
      </div>
    
    </div>
    
  );
}

export default Home;
