import { PersonStanding } from "lucide-react";
import { IoNotifications } from "react-icons/io5";

const BoardNavbar = () => {
  return (
    <div className="w-full flex flex-row justify-end items-center p-4 text-white">
      <ul className="flex flex-row space-x-6 mr-[35%]">
        <li className="text-primary cursor-pointer hover:underline">Leaderboard</li>
        <li className="text-primary cursor-pointer hover:underline">Tasks</li>
      </ul>
      <ul className="flex flex-row space-x-4">
        <li>
          <PersonStanding size={24} />
        </li>
        <li>
          <IoNotifications size={24} />
        </li>
      </ul>
    </div>
  );
};

export default BoardNavbar;
