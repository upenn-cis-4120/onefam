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
    Heart,
    Menu,
    X
} from 'lucide-react'

// Group data structure
const GROUPS = {
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
                profileImageUrl: "./mom.png"
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

const Navigation = ({ toggleSidebar }) => (
    <nav className="fixed top-0 w-full bg-white shadow-sm px-2 sm:px-4 py-2 flex items-center justify-between z-50">
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
        {/*<div className="hidden sm:flex items-center px-4 flex-grow max-w-xl">*/}
        {/*    <div className="relative w-full">*/}
        {/*        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />*/}
        {/*        <input*/}
        {/*            type="text"*/}
        {/*            placeholder="Search..."*/}
        {/*            className="w-full bg-fb-gray rounded-full py-2 pl-10 pr-4 focus:outline-none"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className="flex gap-2 sm:gap-4">*/}
        {/*    <Search className="w-6 h-6 text-gray-600 cursor-pointer sm:hidden" />*/}
        {/*    <Home className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />*/}
        {/*    <Users className="hidden sm:block w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />*/}
        {/*    <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />*/}
        {/*    <UserCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />*/}
        {/*</div>*/}
    </nav>
)

const Sidebar = ({ children, isOpen, onClose }) => (
    <>
        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={onClose}
            />
        )}

        <div className={`
            fixed md:static top-0 left-0 h-full w-64 
            bg-white z-50 transform transition-transform duration-300 ease-in-out
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

const Post = ({ author, time, content, imageUrl, profileImageUrl, isActivity }) => (
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
                <button className="flex items-center text-white gap-1 sm:gap-2 text-sm sm:text-base">
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

        {!isActivity && (
            <div className="flex gap-1 mt-2 px-1 justify-end">
                <UserCircle className="w-8 sm:w-10 h-8 sm:h-10 text-gray-400" />
                <input
                    type="text"
                    placeholder="Comment"
                    className="flex-grow bg-fb-gray rounded-full px-4 text-sm sm:text-base focus:outline-none"
                />
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
        )}
    </div>
)

const CreatePost = () => (
    <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 shadow-sm">
        <div className="flex gap-2 sm:gap-3">
            <UserCircle className="w-8 sm:w-10 h-8 sm:h-10 text-gray-400" />
            <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-grow bg-fb-gray rounded-full px-4 text-sm sm:text-base focus:outline-none"
            />
        </div>

        <div className="flex justify-between sm:justify-end gap-2 sm:gap-6 pt-3">
            <button className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base">
                <Images className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Upload Photo</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base">
                <Gamepad2 className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Games</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 hover:text-fb-blue text-sm sm:text-base">
                <Video className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Start Call</span>
            </button>
            <div className="bg-primary rounded-lg p-2 sm:p-4 sm:pb-2 sm:pt-2 shadow-sm hover:bg-fb-blue">
                <button className="flex items-center text-white gap-1 sm:gap-2 text-sm sm:text-base">
                    <SendHorizonal className="w-4 sm:w-5 h-4 sm:h-5" />
                    Send
                </button>
            </div>
        </div>
    </div>
)

const ProfileBanner = ({ groupName, members, coverImage }) => (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm mt-4 mb-6">
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

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const handleGroupClick = (groupName) => {
        setActiveGroup(groupName);
        closeSidebar();
    };

    const currentGroup = GROUPS[activeGroup];

    return (
        <div className="min-h-screen bg-fb-gray">
            <Navigation toggleSidebar={toggleSidebar} />

            <main className="w-full max-w-full md:max-w-5xl mx-auto px-2 sm:px-4 pt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
                    <h3 className="font-semibold mb-4">Your Groups</h3>
                    {Object.entries(GROUPS).map(([name, group]) => (
                        <Group
                            key={group.id}
                            name={name}
                            hasNotif={name !== 'Entire Family'}
                            isActive={activeGroup === name}
                            onClick={() => handleGroupClick(name)}
                        />
                    ))}
                </Sidebar>

                <div className="md:col-span-3">
                    <ProfileBanner
                        groupName={currentGroup.name}
                        members={currentGroup.members}
                        coverImage={currentGroup.coverImage}
                    />
                    <CreatePost />
                    <div className="space-y-4">
                        {currentGroup.posts.map(post => (
                            <Post key={post.id} {...post} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FacebookClone