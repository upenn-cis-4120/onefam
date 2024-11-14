import { useState, useEffect,useRef } from 'react'
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
    CameraIcon,
    Gamepad2,
    Images,
    Video,
    SendHorizonal,
    Heart,
    Menu,
    X
} from 'lucide-react'
import { FaArrowLeft, FaEllipsisH, FaSmile } from 'react-icons/fa';
import './main.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Group data structure
const INITIAL_GROUPS = {
    'Liu Family': {
        id: 'liu-family',
        name: 'Liu Family',
        members: 'You, Mom, Dad, Didi',
        coverImage: '/familyphoto.png',
        posts: [
            {
                id: 1,
                author: 'Didi wants to play: Chess',
                isActivity: true,
                profileImageUrl: "/didipfp.png"
            },
            {
                id: 2,
                author: 'Mom Liu',
                time: '2 minutes ago',
                content: "Brunch is so yummy! 🌟",
                imageUrl: "/pancakeImg.png",
                profileImageUrl: "/mom.png",
                comments: [
                    {
                        author: 'Didi', 
                        time: 'Just now',
                        content: "...while we are stuck in college",
                        profileImageUrl: '/didipfp.png'
                    },
                    {
                        author: 'You',
                        time: '1 min ago',
                        content: "bruhhh mom having all the best food",
                        profileImageUrl: '/you.jpg'
                    },
                ]
            },
            {
                id: 3,
                author: 'Dad Liu',
                time: '5 minutes ago',
                content: "Beautiful sunset today! 🌅",
                imageUrl: "/dad sunset.jpg",
                profileImageUrl: "/dad.jpg"
            }
        ]
    },
    'Cousins Only >:)': {
        id: 'cousins',
        name: 'Cousins Only >:)',
        members: 'You, the best brother ever, elaine, charles',
        coverImage: '/sadladCat.png',
        posts: [
            {
                id: 1,
                author: 'the best brother ever',
                time: '1 hour ago',
                content: "you arent ready for me to kart 🏎️",
                imageUrl: "./mario.jpg",
                profileImageUrl: "/didipfp.png"
            },
            {
                id: 2,
                author: 'You',
                time: '2 hours ago',
                content: "this just came out does anyone else wanna watch?",
                imageUrl: "/pall blart.jpg",
                profileImageUrl: "/you.jpg"
            }
        ]
    },
    'Entire Family': {
        id: 'entire-family',
        name: 'Entire Family',
        members: 'You, Mom, Dad, Didi, Aunts, Uncles, Cousins',
        coverImage: '/bigfamily.png',
        posts: [
            {
                id: 1,
                author: 'Aunt May',
                time: '1 day ago',
                content: "Eiffel Tower!",
                imageUrl: "/eiffel.jpg",
                profileImageUrl: "/may.png"
            },
            {
                id: 2,
                author: 'Cousin Jack',
                time: '2 days ago',
                content: "Little Amy is graduating already!! 🎓",
                imageUrl: "/gradphoto.jpg",
                profileImageUrl: "/jack.jpg"
            }
        ]
    }
}

const handleAddComment = (postId, comment) => {
    setGroups((prevGroups) => {
        const updatedGroup = { ...prevGroups[activeGroup] };
        updatedGroup.posts = updatedGroup.posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...(post.comments || []), comment],
                };
            }
            return post;
        });
        return {
            ...prevGroups,
            [activeGroup]: updatedGroup,
        };
    });
};

const Comment = ({ author, time, content, profileImageUrl }) => (
    <div className="flex items-start gap-2 sm:gap-3 mt-2 px-1 py-1">
        <img
            src={profileImageUrl}
            alt={`${author}'s profile`}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
        />
        <div className="bg-fb-gray rounded-lg p-2 sm:p-3 flex flex-col">
            <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="font-semibold text-sm sm:text-base">{author}</div>
                <div className="text-gray-500 text-xs sm:text-sm">{time}</div>
            </div>
            <div className="text-sm sm:text-base mt-1 flex-shrink min-w-0 break-words whitespace-normal">
                {content}
            </div>
        </div>
    </div>
);

const Navigation = ({ toggleSidebar }) => (
    <nav className="fixed top-0 w-full bg-white shadow-sm px-2 sm:px-4 py-2 flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
            <Menu
                className="w-6 h-6 text-gray-600 cursor-pointer md:hidden"
                onClick={toggleSidebar}
            />
            <img
                src="./logo.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
        </div>
    </nav>
)

const Sidebar = ({ children, isOpen, onClose }) => (
    <>
        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                onClick={onClose}
            />
        )}
        <div className={`
            fixed md:static top-0 left-0 h-full w-64 
            bg-white z-40 transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            md:transform-none md:block md:w-auto
            p-4 md:p-4 
            md:h-[calc(100vh-100px)] md:sticky md:top-20 
            overflow-y-auto
        `}>
            <button
                className="md:hidden absolute top-4 right-4"
                onClick={onClose}
            >
                <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="mt-14 md:mt-0">
                {children}
            </div>
        </div>
    </>
)

const Group = ({ name, hasNotif, isActive, onClick }) => (
    <div
        className={`flex items-center gap-2 sm:gap-3 p-2 cursor-pointer hover:bg-fb-gray rounded-lg
            ${isActive ? 'bg-fb-gray' : ''}`}
        onClick={onClick}
    >
        <div className="relative">
            <UserCircle className="w-7 sm:w-8 h-7 sm:h-8 text-gray-600" />
            <div className={`absolute bottom-0 right-0 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${hasNotif ? 'bg-red-500' : 'bg-gray-400'}`} />
        </div>
        <span className="text-sm sm:text-base">{name}</span>
    </div>
)

const Post = ({ id, author, time, content, imageUrl, profileImageUrl, isActivity, comments = [], onAddComment, onLikePost, likes = 0 }) => {
    const [commentText, setCommentText] = useState('');
    const [isLiked, setIsLiked] = useState(false);

    const handleCommentSubmit = () => {
        if (commentText.trim()) {
            const newComment = {
                author: 'You', // or dynamically based on logged-in user
                time: 'Just now',
                content: commentText,
                profileImageUrl: './you.jpg'
            };
            onAddComment(id, newComment);
            setCommentText(''); // Clear input after submitting
        }
    };


    const handleLikePost = () => {
        setIsLiked(!isLiked);
        onLikePost(id, !isLiked);
    };

    return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <img
                src={profileImageUrl}
                alt={`${author}'s profile`}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
            />
            <div>
                <div className="font-semibold text-sm sm:text-base">{author}</div>
                <div className="text-gray-500 text-xs sm:text-sm">{time}</div>
            </div>
        </div>
        {isActivity && (
            <div className="bg-primary rounded-lg p-2 sm:p-4 sm:pb-2 sm:pt-2 shadow-sm hover:bg-fb-blue justify-end">
                <button
                    type="button"
                    className="flex items-center text-white gap-1 sm:gap-2 text-sm sm:text-base"
                    onClick={() => {
                        const url = 'https://www.chess.com/play/computer';
                        if (url) {
                            window.open(url, '_blank', 'noopener,noreferrer');
                        }
                    }}
                >
                    <Gamepad2 className="w-5 sm:w-8 h-4 sm:h-5" />
                    Join Game
                </button>
                
            </div>
        )}
        <div className="mb-4">
            <p className="mb-3 text-sm sm:text-base">{content}</p>
            {!isActivity && imageUrl && (
                <img
                    src={imageUrl}
                    alt="Post content"
                    className="w-full rounded-lg"
                />
            )}
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-sm sm:text-base">
                {`${likes} ${likes === 1 ? 'Like' : 'Likes'}`}
            </div>
        <div className="flex gap-1 mt-2 px-1 justify-end">
            <input
                type="text"
                placeholder="Write a comment..."
                className="flex-grow bg-fb-gray rounded-full px-4 text-sm sm:text-base focus:outline-none"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') handleCommentSubmit();
                }}
                />
                <button
                    className={`text-[20px] sm:text-s p-0.5 sm:p-1 ${isLiked ? 'text-red-500' : 'hover:bg-fb-gray'} rounded`}
                    onClick={handleLikePost}
                >
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button className="text-[20px] sm:text-s p-0.5 sm:p-1 hover:bg-fb-gray rounded">
                    😎
                </button>
                <button className="text-[20px] sm:text-s p-0.5 sm:p-1 hover:bg-fb-gray rounded">
                    🥰
                </button>
                <button className="text-[20px] sm:text-s p-0.5 sm:p-1 hover:bg-fb-gray rounded">
                    🤯
                </button>
            </div>
            <div>
                {comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}
            </div>
    </div>
    );
};


const CreatePost = ({ onCreatePost }) => {
    const [postContent, setPostContent] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const navigate = useNavigate();

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            try {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Set preview in a controlled way
                    if (reader.result) {
                        setImagePreview(reader.result);
                    }
                };
                reader.onerror = () => {
                    console.error('Error reading file');
                    setImagePreview('');
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error('Error handling image:', error);
                setImagePreview('');
            }
        }
    };

    const removeImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setImagePreview('');
        // Reset the file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleSubmit = () => {
        if (!postContent.trim() && !imagePreview) return;

        setIsPosting(true);
        try {
            const newPost = {
                id: Date.now(),
                author: 'You',
                time: 'Just now',
                content: postContent,
                imageUrl: imagePreview,
                profileImageUrl: '/you.jpg',
                comments: []
            };

            onCreatePost(newPost);

            // Reset form
            setPostContent('');
            setImagePreview('');
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.value = '';
            }
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsPosting(false);
        }
    };

    const handleTakePhoto = () => {
        navigate('/photo');
    }

    return (
        <div className="bg-white rounded-lg p-3 sm:p-2 mb-2 shadow-sm relative z-10">
            <div className="flex gap-2 sm:gap-3">
                <UserCircle className="w-8 sm:w-10 h-8 sm:h-10 text-gray-400" />
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="flex-grow bg-fb-gray rounded-full px-4 text-sm sm:text-base focus:outline-none"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                />
            </div>

            {imagePreview && (
                <div className="relative mt-4">
                    <div className="relative group">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-h-64 rounded-lg object-contain mx-auto"
                        />
                        <button
                            onClick={removeImage}
                            className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-opacity"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            )}

            <div className="flex justify-between sm:justify-center gap-2 sm:gap-6 pt-3">
                <label className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageSelect}
                        onClick={(e) => {
                            // Reset file input value before new selection
                            e.target.value = '';
                        }}
                    />
                    <Images className="w-4 sm:w-5 h-4 sm:h-5" />
                </label>
                <button className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base">
                    <Gamepad2 className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base">
                    <Video className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base"
                onClick={handleTakePhoto}>
                    <CameraIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <div className={`rounded-lg p-2 sm:p-4 sm:pb-2 sm:pt-2 shadow-sm ${(!postContent.trim() && !imagePreview) ? 'bg-gray-400' : 'bg-primary hover:bg-fb-blue'}`}>
                    <button
                        className="flex items-center text-white gap-1 sm:gap-2 text-sm sm:text-base"
                        onClick={handleSubmit}
                        disabled={isPosting || (!postContent.trim() && !imagePreview)}
                    >
                        <SendHorizonal className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProfileBanner = ({ groupName, members, coverImage }) => (
    <div className="bg-white rounded-lg p-2 sm:p-4 shadow-sm mt-2 mb-3">
        <div className="relative">
            <img
                src={coverImage}
                alt="Profile banner"
                className="w-full h-32 sm:h-40 rounded-lg object-cover"
            />
        </div>
        <div className="left-0 p-2 sm:p-4 flex items-center gap-2 sm:gap-4">
            <div>
                <h1 className="text-xl sm:text-2xl font-semibold">{groupName}</h1>
                <p className="text-sm sm:text-base text-gray-500">{members}</p>
            </div>
        </div>
    </div>
)

const FacebookClone = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeGroup, setActiveGroup] = useState('Liu Family');
    const [groups, setGroups] = useState(INITIAL_GROUPS);
    const { groupName, newPost } = useParams();
    const currentGroup = groups[groupName];
    
    // Ref to track if the new post has been added already
    const hasPostBeenAdded = useRef(false);

    useEffect(() => {
        if (newPost === 'true' && !hasPostBeenAdded.current) {
            // Add the new post to the group
            setGroups((prevGroups) => ({
                ...prevGroups,
                [groupName]: {
                    ...prevGroups[groupName],
                    posts: [
                        ...prevGroups[groupName].posts,
                        {
                            id: prevGroups[groupName].posts.length + 1, // Generate a new ID
                            author: 'You',
                            time: 'Now',
                            content: "Working with friends! 🌅",
                            imageUrl: "/photo.png",
                            profileImageUrl: "/you.jpg",
                        },
                    ],
                },
            }));
            
            // Mark that the post has been added
            hasPostBeenAdded.current = true;
        }
    }, [newPost, groupName]); 

    const navigate = useNavigate();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const handleGroupClick = (groupName) => {
        setActiveGroup(groupName);
        closeSidebar();
    };

    const handleCreatePost = (newPost) => {
        setGroups(prevGroups => ({
            ...prevGroups,
            [activeGroup]: {
                ...prevGroups[activeGroup],
                posts: [newPost, ...prevGroups[activeGroup].posts]
            }
        }));
    };

    const handleAddComment = (postId, comment) => {
        setGroups((prevGroups) => {
            const updatedGroup = { ...prevGroups[activeGroup] };
            updatedGroup.posts = updatedGroup.posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [...(post.comments || []), comment],
                    };
                }
                return post;
            });
            return {
                ...prevGroups,
                [activeGroup]: updatedGroup,
            };
        });
    };

    const handleLikePost = (postId, isLiked) => {
        setGroups(prevGroups => ({
            ...prevGroups,
            [activeGroup]: {
                ...prevGroups[activeGroup],
                posts: prevGroups[activeGroup].posts.map(post =>
                    post.id === postId
                         ? { ...post, likes: isLiked ? post.likes + 1 : post.likes - 1 }
                        : post
                )
            }
        }));
    };

    const goBack = () => {
        navigate('/');
    }

    return (
        <div className="bg-fb-gray min-h-screen flex justify-center items-center">
    <main
        className="bg-white rounded-lg overflow-hidden w-full max-w-sm mx-auto h-[90vh] flex flex-col"
    >
        <header className="flex items-center justify-between px-2 py-2 bg-blue-500 text-white">
            <FaArrowLeft className="w-5 h-5 cursor-pointer" onClick={goBack}/>
            <h1 className="text-lg font-semibold">{currentGroup.name}</h1>
            <FaEllipsisH className="w-5 h-5 cursor-pointer" />
        </header>
                <div className="flex-grow overflow-y-auto">
                    <ProfileBanner
                        groupName={currentGroup.name}
                        members={currentGroup.members}
                        coverImage={currentGroup.coverImage}
                    />
                    <CreatePost onCreatePost={handleCreatePost} />
                    <div className="space-y-2 px-2">
                        {currentGroup.posts.map((post) => (
                            <Post key={post.id} {...post} onAddComment={handleAddComment} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );    
}

export default FacebookClone