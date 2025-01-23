import { useAuthStore } from '../store/authStore';
import { useLocation, useNavigate } from 'react-router-dom';
import { bolt, logo } from '../assets/image';
import { FaDiscord, FaTelegram, FaUser } from 'react-icons/fa';
import { FaXTwitter, FaChevronDown, FaBars, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hideAuthButtons = location.pathname === '/login' || location.pathname === '/signup';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCommunityOpen, setIsMobileCommunityOpen] = useState(false);

    return (
        <>
            <nav className="px-4 flex justify-between items-center w-full sticky z-50 top-0 px-10 py-4 bg-secondary"> 
                <img src={logo} alt="devstreak" onClick={() => navigate('/')} className="h-8 bg-transparent cursor-pointer"/>
                
                {/* Desktop Menu */}
                <ul className='menu font-semibold text-primary hidden md:flex gap-4'>
                    <li onClick={() => navigate('/')} className='hover:text-primary/80 transition-colors cursor-pointer'>Home</li>
                    <li className='relative group'>
                        <div className='flex items-center gap-1 hover:text-primary/80 transition-colors cursor-pointer'>
                            Community
                            <FaChevronDown className='transition-transform duration-200 group-hover:rotate-180' />
                        </div>
                        <div className='absolute invisible group-hover:visible font-normal text-[#aaa] opacity-0 group-hover:opacity-100 top-full mt-2 bg-background rounded-md shadow-lg py-2 min-w-[200px] transition-all duration-200'>
                            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" 
                               className='flex items-center gap-2 px-4 py-2 hover:bg-primary/10 hover:scale-105 hover:text-primary transition-all duration-200'>
                                <FaDiscord className="text-[#aaa] group-hover:text-primary transition-colors" />
                                Discord
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                               className='flex items-center gap-2 px-4 py-2 hover:bg-primary/10 hover:scale-105 hover:text-primary transition-all duration-200'>
                                <FaXTwitter className="text-[#aaa] group-hover:text-primary transition-colors" />
                                X (Twitter)
                            </a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"
                               className='flex items-center gap-2 px-4 py-2 hover:bg-primary/10 hover:scale-105 hover:text-primary transition-all duration-200'>
                                <FaTelegram className="text-[#aaa] group-hover:text-primary transition-colors" />
                                Telegram
                            </a>
                        </div>
                    </li>
                </ul>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-primary text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <FaBars />
                </button>

                <div className={`flex items-center gap-4 ${hideAuthButtons && 'w-24'} hidden md:flex`}>
                    {!hideAuthButtons && (
                        <>
                        <div className="relative group">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors"
                                    onClick={() => navigate('/login')}>
                                <FaUser className="text-gray-300" />
                            </div>
                            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 -bottom-8 left-1/2 -translate-x-1/2 bg-background text-primary px-2 py-1 rounded text-sm whitespace-nowrap transition-all duration-200">
                                Not signed in
                            </div>
                        </div>
                        <button onClick={() => navigate('/login')} 
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors">
                            Join
                        </button>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                 onClick={() => setIsMobileMenuOpen(false)}>
            </div>
            <div className={`fixed top-0 right-0 h-full w-[85vw] bg-background z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4">
                    <div className="flex justify-end items-center mb-8">
                        <button 
                            className="text-primary text-2xl hover:text-primary/80 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaXmark />
                        </button>
                    </div>
                    <ul className='flex flex-col gap-4 text-primary'>
                        <li onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className='hover:text-primary/80 transition-colors cursor-pointer'>Home</li>
                        <li className='text-primary'>
                            <div 
                                className='flex items-center gap-1 cursor-pointer'
                                onClick={() => setIsMobileCommunityOpen(!isMobileCommunityOpen)}
                            >
                                Community
                                <FaChevronDown className={`transition-transform duration-200 ${isMobileCommunityOpen ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`pl-4 mt-2 flex flex-col gap-2 ${isMobileCommunityOpen ? 'block' : 'hidden'}`}>
                                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" 
                                   className='flex items-center gap-2 text-[#aaa] hover:text-primary transition-colors'>
                                    <FaDiscord />
                                    Discord
                                </a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                                   className='flex items-center gap-2 text-[#aaa] hover:text-primary transition-colors'>
                                    <FaXTwitter />
                                    X (Twitter)
                                </a>
                                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"
                                   className='flex items-center gap-2 text-[#aaa] hover:text-primary transition-colors'>
                                    <FaTelegram />
                                    Telegram
                                </a>
                            </div>
                        </li>
                    </ul>
                    {!hideAuthButtons && (
                        <div className="mt-8 flex flex-col gap-4">
                            <button onClick={() => { navigate('/login'); setIsMobileMenuOpen(false); }} 
                                className="w-full text-center py-2 text-primary hover:text-primary/80 transition-colors">
                                Sign In
                            </button>
                            <button onClick={() => { navigate('/signup'); setIsMobileMenuOpen(false); }} 
                                className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors">
                                Join
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;