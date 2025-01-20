import { useAuthStore } from '../store/authStore';
import { useLocation, useNavigate } from 'react-router-dom';
import { bolt, logo } from '../assets/image';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { FaXTwitter, FaChevronDown } from 'react-icons/fa6';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="px-4 flex justify-between items-center w-full sticky z-50 top-0 px-10 py-4 bg-secondary"> 
            <img src={logo} alt="devstreak"  className="h-8 bg-transparent"/>
            <ul className='menu font-semibold text-primary flex gap-4'>
                <li className='hover:text-primary/80 transition-colors cursor-pointer'>Home</li>
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
            <button 
                onClick={() => navigate('/login')}
                className="rounded-md px-4 py-2 bg-primary uppercase text-secondary font-bold hover:bg-secondary hover:border hover:text-primary transition-all duration-300"
            >
                join
            </button>    
        </nav>
    );
};

export default Navbar;