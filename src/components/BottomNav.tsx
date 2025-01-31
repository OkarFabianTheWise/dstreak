import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { logo, superteam } from '@/assets/image';

const BottomNav = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center z-50 bottom-0 md:px-10 md:py-10">
            <div className='flex justify-between items-center gap-6  md:w-2/4 mb-4 md:mb-0'>
                <img src={superteam} className='h-24' />
                <img src={logo} className='h-8 opacity-50' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className="text-primary flex items-center gap-4 text-[25px] justify-center md:justify-end">
                    <FaDiscord className="hover:text-[#aaa] transition-colors" />
                    <FaXTwitter className="hover:text-[#aaa] transition-colors" />
                    <FaTelegramPlane className="hover:text-[#aaa] transition-colors" />
                </div>
                <span className='italic text-[10px]'> &copy; 2025 SuperteamNG. All rights reserved.</span>
            </div>
        </nav>
    );
};

export default BottomNav;