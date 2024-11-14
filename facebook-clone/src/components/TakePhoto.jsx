import React from 'react';
import './Camera.css';
import { FaArrowLeft, FaEllipsisH, FaSmile, FaTimes, FaSyncAlt, FaImage, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CameraApp = () => {
  const navigate = useNavigate();

  const handleCapture = () => {
    navigate('/photoshare');
  }

  const goBack = () => {
    navigate(`/group/Liu Family`);
}

  return (
    <div className="bg-fb-gray min-h-screen flex justify-center items-center">
      <main
          className="bg-white rounded-lg overflow-hidden w-full max-w-sm mx-auto h-[90vh] flex flex-col"
      >
          <header className="flex items-center justify-between px-4 py-3 bg-blue-500 text-white">
              <FaArrowLeft className="w-5 h-5 cursor-pointer" onClick={goBack}/>
              <h1 className="text-lg font-semibold">Liu fam!!</h1>
              <FaEllipsisH className="w-5 h-5 cursor-pointer" />
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
                <div className="capture-button" onClick={handleCapture}/>
                <div className="rectangle-button" />
              </div>
            </div>
      </main>
    </div>
  );
};

export default CameraApp;
