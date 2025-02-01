import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { logo } from "@/assets/image";
import stng from '@/assets/image/stng.png'

const BottomNav = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between gap-4 items-center z-50 bottom-0 md:px-10 md:py-10">
        <div className="flex flex-col gap-2 items-start">
          <img src={stng} className="h-12" />
          <span className="italic text-[10px]">
          © 2025 SuperteamNG. All rights reserved.
          </span>
        </div>
        <img src={logo} className="h-10 opacity-50" />
      <div className="flex flex-col gap-2">
        <div className="text-primary flex items-center gap-4 text-[25px] justify-center md:justify-end">
          <FaDiscord className="hover:text-[#aaa] transition-colors" />
          <FaXTwitter className="hover:text-[#aaa] transition-colors" />
          <FaTelegramPlane className="hover:text-[#aaa] transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
