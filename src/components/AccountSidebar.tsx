import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { cn } from '@/lib/utils';

const AccountSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-[#151515] rounded-3xl h-screen w-full max-w-sm p-5">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#A49393] hover:text-foreground/80 transition-colors mb-6"
      >
        <IoIosArrowBack /> Back
      </button>
      
      <h1 className="text-secondary text-2xl font-semibold mb-8">
        Settings
      </h1>

      <div>
        <h2 className="text-[#A49393] text-sm mb-4">
            My account
        </h2>
        <div
        className={cn(
            "w-full mb-6 cursor-pointer px-4 py-2 rounded-full justify-start text-base font-normal",
            currentPath === '/settings/profile' && "bg-[#5F6A63] text-primary-foreground"
        )}
        onClick={() => navigate('/settings/profile')}
        >
            Edit Profile
        </div>
        <div
        className={cn(
            "w-full mb-6 cursor-pointer px-4 py-2 rounded-full justify-start text-base font-normal",
            currentPath === '/settings/linked-accounts' && "bg-[#5F6A63] text-primary-foreground"
        )}
        onClick={() => navigate('/settings/linked-accounts')}
        >
            Linked Accounts
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;