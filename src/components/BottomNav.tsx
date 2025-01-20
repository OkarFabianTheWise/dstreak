import { FaDiscord, FaTelegram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { logoDark, nigeria, superteam } from '@/assets/image';

const BottomNav = () => {
    return (
        <nav className="px-4  flex justify-between items-center z-50 bottom-0 px-20 py-10">
            <div className="flex items-center gap-2">
                <img src={superteam} alt="" />
                <div className="flex flex-col  text-[20px]">
                    <span className='flex items-center gap-1'>Superteam <img src={nigeria} alt="" /></span> <span>Nigeria</span>
                </div>
            </div>
            <div><img src={logoDark} alt="" /></div>
            <div className='flex flex-col gap-2'>
                <div className="text-primary flex items-center gap-4 text-[25px] justify-end">
                    <FaDiscord className="hover:text-[#aaa] transition-colors" />
                    <FaXTwitter className="hover:text-[#aaa] transition-colors" />
                    <FaTelegramPlane className="hover:text-[#aaa] transition-colors" />
                </div>
                <span className='italic font-[20px]'>Your Dev community awaits - Join Us!</span>
            </div>
        </nav>
    );
};

export default BottomNav;
