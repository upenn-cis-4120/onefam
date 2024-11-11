import React from 'react';
import './Camera.css';
import { FaArrowLeft, FaEllipsisH, FaSmile, FaTimes, FaSyncAlt, FaImage, FaClock } from 'react-icons/fa';

const CameraApp = () => {
  return (
    <div className="min-h-screen bg-fb-gray">
      <main className="max-w-lg mx-auto px-4 pt-16 grid grid-cols-1 gap-4">
        <div className="col-span-1">
          <div className="post-video">
            <header className="header">
              <FaArrowLeft className="icon" />
              <h1>Liu fam!!</h1>
              <FaEllipsisH className="icon" />
            </header>

            <div className="camera-app">
              <div className="camera-header">
                <FaTimes className="icon close-icon" />
              </div>

              <div className="camera-preview">
                <img src="/photo.png" alt="Camera Preview" className="preview-image" />
              </div>

              <div className="camera-icons">
                <FaSyncAlt className="icon rotate-icon" />
                <FaImage className="icon gallery-icon" />
                <FaClock className="icon timer-icon" />
              </div>

              <div className="camera-footer">
                <div className="capture-button" />
                <div className="rectangle-button" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CameraApp;
