import React, { useRef, useEffect, useState } from 'react';
import '../styles/Converter.css';

function Converter() {
  const videoRef = useRef(null);
  const [detectedSign, setDetectedSign] = useState('Sign Here');
  const [subtitle, setSubtitle] = useState('Translation Here');

  useEffect(() => {
    // Accessing the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("Error accessing webcam: ", err);
      });

    // Mockup detection logic (replace with real hand detection & sign language interpretation logic)
    const mockDetection = () => {
      setDetectedSign('A'); // Mocked detected sign
      setSubtitle('This is the letter A'); // Mocked subtitle
    };
    const intervalId = setInterval(mockDetection, 2000); // Mock detection every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="converter">
      <div className="camera-section">
        <h2>Camera Feed</h2>
        <video ref={videoRef} autoPlay className="camera-feed"></video>
      </div>
      <div className="detection-section">
        <h2>Hand Detection</h2>
        <div className="detection-output">
          <p>Detected Sign: <span className="detected-sign">{detectedSign}</span></p>
          <p className="subtitle">Subtitle: <span className="detected-subtitle">{subtitle}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Converter;
