import React, { useRef, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import * as Docx from 'docx';
import { FaPlay, FaPause, FaSave, FaDownload } from 'react-icons/fa'; // Import icons
import '../styles/Converter.css';

function Converter() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [detectedSign, setDetectedSign] = useState('Sign Here');
  const [subtitle, setSubtitle] = useState('Translation Here');
  const [sentence, setSentence] = useState('');
  const [progress, setProgress] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [language, setLanguage] = useState('en');
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (e) => {
          setChunks((prev) => [...prev, e.data]);
        };
      })
      .catch(err => {
        console.error("Error accessing webcam: ", err);
      });

    const mockDetection = () => {
      const newSign = 'A';
      setDetectedSign(newSign);
      if (language === 'en') {
        setSubtitle('This is the letter A');
        setSentence(prev => prev + newSign + ' ');
      } else {
        setSubtitle('આ અક્ષર એ છે'); 
        setSentence(prev => prev + 'અ ');
      }
      setProgress(prev => Math.min(prev + 10, 100));
    };
    const intervalId = setInterval(mockDetection, 2000);

    return () => clearInterval(intervalId);
  }, [language]);

  const handleRecording = () => {
    if (!isRecording) {
      mediaRecorderRef.current.start();
      setSentence('');
      setProgress(0);
    } else {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(!isRecording);
    setIsPaused(false);
  };

  const handlePauseRecording = () => {
    if (!isPaused) {
      mediaRecorderRef.current.pause();
    } else {
      mediaRecorderRef.current.resume();
    }
    setIsPaused(!isPaused);
  };

  const saveVideo = () => {
    mediaRecorderRef.current.stop();
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = videoUrl;
      a.download = 'recorded-video.mp4';
      a.click();
      setChunks([]); // Reset chunks after saving
    };
  };

  const downloadTranslationAsDoc = () => {
    const doc = new Docx.Document({
      sections: [{
        properties: {},
        children: [new Docx.Paragraph(sentence)],
      }],
    });

    Docx.Packer.toBlob(doc).then(blob => {
      saveAs(blob, "translated_sentence.docx");
    });
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="converter-container">
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
            <p className="sentence-box">Current Sentence: <span>{sentence}</span></p>

            <div className="language-toggle">
              <select onChange={(e) => toggleLanguage(e.target.value)} className="language-dropdown">
                <option value="en">English</option>
                <option value="gu">Gujarati</option>
              </select>
            </div>
          </div>

          <div className="progress-section">
            <h2>Learning Progress</h2>
            <progress value={progress} max="100"></progress>
          </div>

          <div className="button-group">
            <button className="icon-button" onClick={handleRecording}>
              <FaPlay /> {isRecording ? 'Stop' : 'Start'}
            </button>
            <button className="icon-button" onClick={handlePauseRecording}>
              <FaPause /> {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button className="icon-button" onClick={saveVideo}>
              <FaSave /> Save Video
            </button>
            <button className="icon-button" onClick={downloadTranslationAsDoc}>
              <FaDownload /> Download Translation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;
