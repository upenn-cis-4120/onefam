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

const Navigation = () => (
    <nav className="fixed top-0 w-full bg-white shadow-sm px-4 py-2 flex items-center justify-between z-50">
        <div className="text-4xl font-bold text-fb-blue">f</div>
        <div className="flex items-center px-4 flex-grow max-w-xl">
            <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-fb-gray rounded-full py-2 pl-10 pr-4 focus:outline-none"
                />
            </div>
        </div>
        <div className="flex gap-4">
            <Home className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />
            <Users className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />
            <UserCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-fb-blue" />
        </div>
    </nav>
)

const Sidebar = ({ children }) => (
    <div className="hidden md:block bg-white rounded-lg p-4 h-[calc(100vh-100px)] sticky top-20 overflow-y-auto">
        {children}
    </div>
)

const SidebarItem = ({ icon: Icon, children }) => (
    <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-fb-gray rounded-lg">
        <Icon className="w-6 h-6 text-gray-600" />
        <span>{children}</span>
    </div>
)

const Post = ({ author, time, content, imageUrl, isActivity }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
            <UserCircle className="w-10 h-10 text-gray-400" />
            <div>
                <div className="font-semibold">{author}</div>
                <div className="text-gray-500 text-sm">{time}</div>
            </div>
        </div>

        
        <div className="mb-4">
            <p className="mb-3">{content}</p>

            {!isActivity && imageUrl && (
                <img
                    src={imageUrl}
                    alt="Post content"
                    className="w-full rounded-lg"
                />
            )}
        </div>

        <div className="flex gap-6 pt-3 border-t border-gray-100 text-gray-600">
            <button className="flex items-center gap-2 hover:text-fb-blue">
                <ThumbsUp className="w-5 h-5" />
                Like
            </button>
            <button className="flex items-center gap-2 hover:text-fb-blue">
                <MessageCircle className="w-5 h-5" />
                Comment
            </button>
            <button className="flex items-center gap-2 hover:text-fb-blue">
                <Share2 className="w-5 h-5" />
                Share
            </button>
        </div>
    </div>
)

const CreatePost = () => (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="flex gap-3">
            <UserCircle className="w-10 h-10 text-gray-400" />
            <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-grow bg-fb-gray rounded-full px-4 focus:outline-none"
            />
        </div>

        <div className="flex justify-end gap-6 pt-3">
            <button className="flex items-center gap-2 hover:text-fb-blue">
                <Images className="w-5 h-5" />
                Upload Photo
            </button>
            <button className="flex items-center gap-2 hover:text-fb-blue">
                <Gamepad2 className="w-5 h-5" />
                Games
            </button>
            <button className="flex items-center gap-2 hover:text-fb-blue">
                <Video className="w-5 h-5" />
                Start Call
            </button>
            <div className="bg-primary rounded-lg p-4 pb-2 pt-2 shadow-sm hover:bg-fb-blue">
                <button className="flex items-center text-white gap-2 hover:text-fb-blue">
                    <SendHorizonal className="w- h-5" />
                    Send
                </button>
            </div>
        </div>

        <div className="flex justify-center gap-6 pt-3">
            
        </div>

        
    </div>
    
)

const Group = ({ name, hasNotif }) => (
    <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-fb-gray rounded-lg">
        <div className="relative">
            <UserCircle className="w-8 h-8 text-gray-600" />
            <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${hasNotif ? 'bg-red-500' : 'bg-gray-400'
                }`} />
        </div>
        <span>{name}</span>
    </div>
)

const ProfileBanner = ({ groupName, members }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <div className="relative">
            <img
                src="/api/placeholder/400/300"
                alt="Profile banner"
                className="w-full h-40 rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 flex items-center gap-4">
                <UserCircle className="w-16 h-16 text-gray-600 bg-white rounded-full p-1" />
                <div>
                    <h1 className="text-2xl font-semibold">{groupName}</h1>
                    <p className="text-gray-500">{members}</p>
                </div>
            </div>
            {/* <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm">
                <Camera className="w-5 h-5 text-gray-600" />
            </button> */}
        </div>
    </div>
)




const FacebookClone = () => {
    const [posts] = useState([
        {
            id: 1,
            author: 'Didi is playing: Chess',
        },
        {
            id: 2,
            author: 'Mom Liu',
            time: '2 minutes ago',
            content: "Brunch is so yummy! 🌟",
            imageUrl: "/api/placeholder/400/300"
        },
        {
            id: 3,
            author: 'Dad Liu',
            time: '5 minutes ago',
            content: "Beautiful sunset today! 🌅",
            imageUrl: "/api/placeholder/400/300"
        }
    ])

    return (
        <div className="min-h-screen bg-fb-gray">
            <Navigation />

            <main className="max-w-6xl mx-auto px-4 pt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/*<Sidebar>*/}
                {/*    <SidebarItem icon={User}>Your Profile</SidebarItem>*/}
                {/*    <SidebarItem icon={Users}>Friends</SidebarItem>*/}
                {/*    <SidebarItem icon={Users}>Groups</SidebarItem>*/}
                {/*    <SidebarItem icon={Store}>Marketplace</SidebarItem>*/}
                {/*</Sidebar>*/}

                <Sidebar>
                    <h3 className="font-semibold mb-4">Your Groups</h3>
                    <Group name="Liu Family" hasNotif={true} />
                    <Group name="Siblings Only >:)" hasNotif={true} />
                    <Group name="Entire Family" hasNotif={false} />
                </Sidebar>

                <div className="md:col-span-2">
                    <ProfileBanner
                        groupName="Liu Family"
                        members="You, Mom, Dad, Didi"
                    />  
                        <CreatePost />
                    <div className="space-y-4">
                        {posts.map(post => (
                            <Post key={post.id} {...post} />
                        ))}
                    </div>
                </div>

              
                {/*<Sidebar>*/}
                {/*    <h3 className="font-semibold mb-4">Contacts</h3>*/}
                {/*    <Contact name="John Doe" isOnline={true} />*/}
                {/*    <Contact name="Jane Smith" isOnline={true} />*/}
                {/*    <Contact name="Mike Johnson" isOnline={false} />*/}
                {/*</Sidebar>*/}
            </main>
        </div>
    )
}

export default FacebookClone