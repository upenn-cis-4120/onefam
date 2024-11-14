import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import { FaArrowLeft, FaEllipsisH, FaSmile } from 'react-icons/fa';
import './main.css'; // Ensure this includes updated styling for new design
import { useNavigate } from 'react-router-dom';
// Group data structure

// Group data structure
const INITIAL_GROUPS = {
    'Liu Family': {
        id: 'liu-family',
        name: 'Liu Family',
        members: 'You, Mom, Dad, Didi',
        coverImage: './familyphoto.png',
        posts: [
            {
                id: 1,
                author: 'Didi wants to play: Chess',
                isActivity: true,
                profileImageUrl: "./didipfp.png"
            },
            {
                id: 2,
                author: 'Mom Liu',
                time: '2 minutes ago',
                content: "Brunch is so yummy! 🌟",
                imageUrl: "./pancakeImg.png",
                profileImageUrl: "./mom.png",
                comments: [
                    {
                        author: 'Didi', 
                        time: 'Just now',
                        content: "...while we are stuck in college",
                        profileImageUrl: './didipfp.png'
                    },
                    {
                        author: 'You',
                        time: '1 min ago',
                        content: "bruhhh mom having all the best food",
                        profileImageUrl: './you.jpg'
                    },
                ]
            },
            {
                id: 3,
                author: 'Dad Liu',
                time: '5 minutes ago',
                content: "Beautiful sunset today! 🌅",
                imageUrl: "./dad sunset.jpg",
                profileImageUrl: "./dad.jpg"
            }
        ]
    },
    'Cousins Only >:)': {
        id: 'cousins',
        name: 'Cousins Only >:)',
        members: 'You, the best brother ever, elaine, charles',
        coverImage: './sadladCat.png',
        posts: [
            {
                id: 1,
                author: 'the best brother ever',
                time: '1 hour ago',
                content: "you arent ready for me to kart 🏎️",
                imageUrl: "./mario.jpg",
                profileImageUrl: "./didipfp.png"
            },
            {
                id: 2,
                author: 'You',
                time: '2 hours ago',
                content: "this just came out does anyone else wanna watch?",
                imageUrl: "./pall blart.jpg",
                profileImageUrl: "./you.jpg"
            }
        ]
    },
    'Entire Family': {
        id: 'entire-family',
        name: 'Entire Family',
        members: 'You, Mom, Dad, Didi, Aunts, Uncles, Cousins',
        coverImage: './bigfamily.png',
        posts: [
            {
                id: 1,
                author: 'Aunt May',
                time: '1 day ago',
                content: "Eiffel Tower!",
                imageUrl: "./eiffel.jpg",
                profileImageUrl: "./may.png"
            },
            {
                id: 2,
                author: 'Cousin Jack',
                time: '2 days ago',
                content: "Little Amy is graduating already!! 🎓",
                imageUrl: "./gradphoto.jpg",
                profileImageUrl: "./jack.jpg"
            }
        ]
    }
}
const Group = ({ name, hasNotif, isActive, onClick }) => (
    <div
        className={`flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-sm
            ${isActive ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        onClick={onClick}
    >
        <div className="flex items-center gap-3">
            <div className="relative">
                <UserCircle className={`w-8 h-8 ${isActive ? 'text-white' : 'text-blue-500'}`} />
                <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full
                        ${hasNotif ? (isActive ? 'bg-white' : 'bg-red-500') : 'bg-gray-400'}`}
                />
            </div>
            <span className="text-lg font-semibold">{name}</span>
        </div>
    </div>
);


const ChatGroups = () => {
    const [activeGroup, setActiveGroup] = useState('Liu Family');
    const [groups] = useState(INITIAL_GROUPS);
    const navigate = useNavigate();

    const handleGroupClick = (groupName) => {
        setActiveGroup(groupName);
        navigate(`/group/${groupName}/${false}`);
    };

    return (
        <div className="bg-fb-gray min-h-screen flex justify-center items-center">
    <main
        className="bg-white rounded-lg overflow-hidden w-full max-w-sm mx-auto h-[90vh] flex flex-col"
    >
        <header className="flex items-center justify-between px-4 py-3 bg-blue-500 text-white">
            <FaArrowLeft className="w-5 h-5 cursor-pointer" />
            <h1 className="text-lg font-semibold">Liu fam!!</h1>
            <FaEllipsisH className="w-5 h-5 cursor-pointer" />
        </header>
            <div
                style={{ 
                    flex: 1, 
                    overflowY: 'auto', 
                    padding: '16px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px' 
                }}
            >
                {Object.entries(groups).map(([name]) => (
                    <Group
                        key={name}
                        name={name}
                        hasNotif={name !== 'Entire Family'}
                        isActive={activeGroup === name}
                        onClick={() => handleGroupClick(name)}
                    />
                ))}
            </div>
        </main>
    </div>    
    );
};

export default ChatGroups;
