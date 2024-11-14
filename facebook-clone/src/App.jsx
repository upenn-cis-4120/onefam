
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FacebookClone from './components/FacebookClone'
import PostPhoto from './components/Post'
import SharePhoto from './components/SharePhoto'
import TakePhoto from './components/TakePhoto'
import ChatGroups from './components/ChatGroups'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatGroups />} />
                <Route path="/group/:groupName/:newPost" element={<FacebookClone />} />
                <Route path="/photo" element={<TakePhoto />} />
                <Route path="/photoshare" element={<SharePhoto />} />
                <Route path="/post" element={<PostPhoto />} />
            </Routes>
        </Router>
    );
};

export default App;
