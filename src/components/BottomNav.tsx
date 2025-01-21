import { FaDiscord, FaTelegram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { logoDark, nigeria, superteam } from '@/assets/image';

const BottomNav = () => {
    return (
        <nav className="px-4 md:px-20 py-6 md:py-10 flex flex-col md:flex-row justify-between items-center z-50 bottom-0 gap-6 md:gap-0">
            <div className="flex items-center gap-2">
                <img src={superteam} alt="" className="w-[40px] md:w-auto" />
                <div className="flex flex-col text-[16px] md:text-[20px]">
                    <span className='flex items-center gap-1'>Superteam <img src={nigeria} alt="" className="w-[20px] md:w-auto" /></span>
                    <span>Nigeria</span>
                </div>
            </div>
            <div><img src={logoDark} alt="" className="w-[120px] md:w-auto" /></div>
            <div className='flex flex-col gap-2 items-center md:items-end'>
                <div className="text-primary flex items-center gap-4 text-[20px] md:text-[25px] justify-center md:justify-end">
                    <FaDiscord className="hover:text-[#aaa] transition-colors cursor-pointer" />
                    <FaXTwitter className="hover:text-[#aaa] transition-colors cursor-pointer" />
                    <FaTelegramPlane className="hover:text-[#aaa] transition-colors cursor-pointer" />
                </div>
                <span className='italic text-[14px] md:text-[20px] text-center md:text-right'>Your Dev community awaits - Join Us!</span>
            </div>
        </nav>
    );
};

export default BottomNav;
