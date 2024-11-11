import React, { useState } from 'react';
import { FaArrowLeft, FaEllipsisH, FaSmile } from 'react-icons/fa';
import './PostVideo.css';

const PostVideo = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

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

                    <div className="video-preview">
                        <img
                        src="./photo.png"// replace with the actual image path
                        alt="Preview"
                        className="video-image"
                        />
                    </div>

                    <div className="share-options">
                        <p className="share-title">Share</p>
                        <div className="share-group" onClick={() => handleSelectGroup("liuFam")}>
                        <img src="/familyphoto.png" alt="Liu fam" className="group-avatar" />
                        <div className="group-info">
                            <p className="group-name">Liu fam!!!</p>
                            <p className="group-members">9 people</p>
                        </div>
                        <input
                            type="radio"
                            checked={selectedGroup === "liuFam"}
                            onChange={() => handleSelectGroup("liuFam")}
                        />
                        </div>

                        <div className="share-group" onClick={() => handleSelectGroup("siblingsOnly")}>
                            <img src="/gradphoto.jpg" alt="Siblings only" className="group-avatar" />
                            <div className="group-info">
                                <p className="group-name">siblings only </p>
                                <p className="group-members">3 people</p>
                            </div>
                            <input
                                type="radio"
                                checked={selectedGroup === "siblingsOnly"}
                                onChange={() => handleSelectGroup("siblingsOnly")}
                            />
                        </div>
                        <button className="post-button">Post</button>
                    </div>
                </div>
        </div>
    </main>
    </div>
  );
};

export default PostVideo;