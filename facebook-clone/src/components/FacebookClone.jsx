import { useState } from 'react';
import {
    Home,
    Users,
    Bell,
    UserCircle,
    ThumbsUp,
    MessageCircle,
    Share2,
    Search,
    Images,
    Video,
    SendHorizonal,
} from 'lucide-react';
import './main.css';
import { FaArrowLeft, FaEllipsisH, FaSmile, FaTimes, FaSyncAlt, FaImage, FaClock } from 'react-icons/fa';

// const Navigation = () => (
//     <nav className="fixed top-0 w-full bg-white shadow-sm px-4 py-2 flex items-center justify-between z-50">
//         <div className="text-4xl font-bold text-fb-blue">f</div>
//         <div className="flex items-center px-4 flex-grow max-w-xl">
//             <div className="relative w-full">
//                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-full bg-fb-gray rounded-full py-2 pl-10 pr-4 focus:outline-none"
//                 />
//             </div>
//         </div>
//         <div className="flex gap-2">
//             <Home className="w-5 h-5 text-gray-600 cursor-pointer hover:text-fb-blue" />
//             <Users className="w-5 h-5 text-gray-600 cursor-pointer hover:text-fb-blue" />
//             <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-fb-blue" />
//             <UserCircle className="w-5 h-5 text-gray-600 cursor-pointer hover:text-fb-blue" />
//         </div>
//     </nav>
// );

const Post = ({ author, time, content, imageUrl }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-3">
            <UserCircle className="w-8 h-8 text-gray-400" />
            <div>
                <div className="font-semibold text-sm">{author}</div>
                <div className="text-gray-500 text-xs">{time}</div>
            </div>
        </div>
        <p className="mb-3 text-sm">{content}</p>
        {imageUrl && (
            <img src={imageUrl} alt="Post content" className="w-full rounded-lg" />
        )}
        <div className="flex gap-4 pt-3 border-t border-gray-100 text-gray-600 text-sm">
            <button className="flex items-center gap-1 hover:text-fb-blue">
                <ThumbsUp className="w-4 h-4" />
                Like
            </button>
            <button className="flex items-center gap-1 hover:text-fb-blue">
                <MessageCircle className="w-4 h-4" />
                Comment
            </button>
            <button className="flex items-center gap-1 hover:text-fb-blue">
                <Share2 className="w-4 h-4" />
                Share
            </button>
        </div>
    </div>
);

const CreatePost = () => (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="flex gap-2">
            <UserCircle className="w-8 h-8 text-gray-400" />
            <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-grow bg-fb-gray rounded-full px-4 text-sm focus:outline-none"
            />
        </div>
        <div className="flex justify-end gap-4 pt-3 text-sm">
            <button className="flex items-center gap-1 hover:text-fb-blue">
                <Images className="w-4 h-4" />
                Photo
            </button>
            <button className="flex items-center gap-1 hover:text-fb-blue">
                <Video className="w-4 h-4" />
                Video
            </button>
            <button className="flex items-center gap-1 hover:text-fb-blue">
                <SendHorizonal className="w-4 h-4" />
                Post
            </button>
        </div>
    </div>
);

const ProfileBanner = ({ groupName, members }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="relative">
            <img
                src="/api/placeholder/400/300"
                alt="Profile banner"
                className="w-full h-32 rounded-lg object-cover"
            />
            <div className="absolute bottom-2 left-4 flex items-center gap-3">
                <UserCircle className="w-10 h-10 text-gray-600 bg-white rounded-full p-1" />
                <div>
                    <h1 className="text-lg font-semibold">{groupName}</h1>
                    <p className="text-gray-500 text-sm">{members}</p>
                </div>
            </div>
        </div>
    </div>
);

const FacebookClone = () => {
    const [posts] = useState([
        {
            id: 1,
            author: 'Didi is playing: Chess',
            time: '1 hour ago',
            content: "Enjoying some game time!",
        },
        {
            id: 2,
            author: 'Mom Liu',
            time: '2 minutes ago',
            content: "Brunch is so yummy! 🌟",
            imageUrl: "/api/placeholder/400/300",
        },
        {
            id: 3,
            author: 'Dad Liu',
            time: '5 minutes ago',
            content: "Beautiful sunset today! 🌅",
            imageUrl: "/api/placeholder/400/300",
        },
    ]);

    return (
        <div className="min-h-screen bg-fb-gray">
           <main className="max-w-lg mx-auto px-4 pt-16 grid grid-cols-1 gap-4">
           <div className="col-span-1">
            <div className="main-groups">
                <header className="header">
                    <FaArrowLeft className="icon" />
                    <h1>Liu fam!!</h1>
                    <FaEllipsisH className="icon" />
                    </header>
                <CreatePost />
                <div className="space-y-4">
                    {posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </div>
                </div>
                </div>
            </main>
        </div>
    );
};

export default FacebookClone;
