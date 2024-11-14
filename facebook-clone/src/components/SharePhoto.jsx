import React, { useState } from 'react';
import { FaArrowLeft, FaEllipsisH, FaSmile } from 'react-icons/fa';
import './PostVideo.css';
import { useNavigate } from 'react-router-dom';

const PostVideo = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();

  const handlePost = () => {
    console.log(selectedGroup);
    if (selectedGroup === 'liuFam') {
        navigate(`/group/Liu Family/${true}`);
    } else if (selectedGroup === 'siblingsOnly') {
        navigate(`/group/Cousins Only >:)/${true}`);
    }
    
  }
  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const goBack = () => {
    navigate('/photo');
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
                        <button className="post-button" onClick={handlePost}>Post</button>
                    </div>
        </main>
    </div>
  );
};

export default PostVideo;