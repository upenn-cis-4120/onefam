// src/App.jsx
import FacebookClone from './components/FacebookClone'
import Post from './components/Post'
import PostVideo from './components/Camera'

function App() {
    return (
        <div className="min-h-screen bg-fb-gray">
            <FacebookClone />
            <Post />
            <PostVideo />
        </div>
    )
}

export default App
