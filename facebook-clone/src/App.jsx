// src/App.jsx
import FacebookClone from './components/FacebookClone'
import Post from './components/Post'
import SharePhoto from './components/SharePhoto'
import TakePhoto from './components/TakePhoto'

function App() {
    return (
        <div className="min-h-screen bg-fb-gray">
            <FacebookClone />
            <Post />
            <SharePhoto />
            <TakePhoto />
        </div>
    )
}

export default App
