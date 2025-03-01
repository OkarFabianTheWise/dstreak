import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { cn } from "@/lib/utils";

const AccountSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-[#151515] rounded-xl md:rounded-3xl min-h-[200px] md:h-screen w-full md:max-w-[280px] lg:max-w-sm p-4 md:p-5">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#A49393] hover:text-foreground/80 transition-colors mb-4 md:mb-6 text-sm md:text-base"
      >
        <IoIosArrowBack className="text-lg md:text-xl" /> Back
      </button>

      <h1 className="text-secondary text-xl md:text-2xl font-semibold mb-6 md:mb-8">
        Settings
      </h1>

      <div>
        <h2 className="text-[#A49393] text-xs md:text-sm mb-3 md:mb-4">
          My account
        </h2>
        <div className="flex flex-col gap-2 md:gap-4">
          <div
            className={cn(
              "w-full cursor-pointer px-3 md:px-4 py-2 rounded-full justify-start text-sm md:text-base font-normal transition-colors",
              currentPath === "/settings/profile"
                ? "bg-[#5F6A63] text-primary-foreground"
                : "hover:bg-[#5F6A63]/10"
            )}
            onClick={() => navigate("/settings/profile")}
          >
            Edit Profile
          </div>
          <div
            className={cn(
              "w-full cursor-pointer px-3 md:px-4 py-2 rounded-full justify-start text-sm md:text-base font-normal transition-colors",
              currentPath === "/settings/linked-accounts"
                ? "bg-[#5F6A63] text-primary-foreground"
                : "hover:bg-[#5F6A63]/10"
            )}
            onClick={() => navigate("/settings/linked-accounts")}
          >
            Linked Accounts
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
