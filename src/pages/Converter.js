import React, { useRef, useEffect, useState } from 'react';
import '../styles/Converter.css';

function Converter() {
  const videoRef = useRef(null);
  const [detectedSign, setDetectedSign] = useState('Sign Here');
  const [subtitle, setSubtitle] = useState('Translation Here');

  useEffect(() => {
    
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("Error accessing webcam: ", err);
      });

   
    const mockDetection = () => {
      setDetectedSign('A'); 
      setSubtitle('This is the letter A'); 
    };
    const intervalId = setInterval(mockDetection, 2000); 

    return () => clearInterval(intervalId); 
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
