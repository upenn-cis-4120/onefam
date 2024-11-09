// src/components/FacebookClone.jsx
import { useState } from 'react'
import {
    Home,
    Users,
    Bell,
    User,
    Store,
    ThumbsUp,
    MessageCircle,
    Share2,
    Search,
    UserCircle,
    Gamepad2,
    Images,
    Video,
    SendHorizonal,
} from 'lucide-react'
import { FaArrowLeft, FaEllipsisH, FaSmile } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import './ChatApp.css';



const FacebookClone = () => {

    return (
        <div className="min-h-screen bg-fb-gray">

            <main className="max-w-lg mx-auto px-4 pt-16 grid grid-cols-1 gap-4">
                <div className="col-span-1">
                <div className="chat-app">
      <header className="header">
        <FaArrowLeft className="icon" />
        <h1>Liu fam!!</h1>
        <FaEllipsisH className="icon" />
      </header>

      <div className="content">
        <div className="image-container">
          <img
            src="./pancakeImg.png"
            alt="Pancakes"
            className="food-image"
          />
          <div className="reactions">
            <span>😎</span>
            <span>🥰</span>
            <span>+1</span>
          </div>
        </div>

        <div className="chat-section">
          <div className="postaccount">
            <img src="./mom.png" alt="Mom" className="avatar" />
            <div>
              <p className="username">Mom</p>
            </div>
          </div>

          <div className="message">
            <p>Yeon</p>
            <p>While we are stuck in college :(</p>
          </div>

          <div className="message">
            <p>Sophia</p>
            <p>Mom’s eating all the good things...</p>
          </div>
        </div>

        <div className="emoji-buttons">
            <button className="emoji-button">😎</button>
            <button className="emoji-button">🥰</button>
            <button className="emoji-button">🤯</button>
        </div>

        <div className="input-section">
          <FaSmile className="emoji-icon" />
          <input type="text" placeholder="Mommmmmm stoppppp" />
          <button className="send-button"><IoSend className="emoji-icon" /></button>
        </div>
      </div>
    </div>
                </div>
            </main>
        </div>
    )
}

export default FacebookClone