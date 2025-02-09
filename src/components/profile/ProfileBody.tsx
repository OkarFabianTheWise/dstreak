import { demoProfilePics } from "@/assets/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaGithub, FaRegEdit } from "react-icons/fa";
import SkillsItem from "./SkillsItem";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import POWItemm from "./POWItem";
import { useUserStore } from "../../utils/api/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShareMenu from "@/components/profile/share-menu";

const ProfileBody: React.FC = () => {
  const { userProfile, loading, error, fetchUserProfile } = useUserStore();
  const navigate = useNavigate();

  //get user profile
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  // Handle navigation on error - modify this part
  useEffect(() => {
    if (error === "No access token found") {
      console.log("No auth token, redirecting to login");
      navigate("/login");
    } else if (error) {
      console.log("Error fetching profile:", error);
      // Only navigate to login for authentication errors
      if (error.includes("unauthorized") || error.includes("token")) {
        navigate("/login");
      }
    }
  }, [error, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative text-accent min-h-screen">
      {/* Header background */}
      <div className="bg-[url('./src/assets/image/green_bg_header.svg')] pt-4 sm:pt-8 h-28 sm:h-36">
        <div className="flex items-center ml-4 sm:ml-8 gap-2">
          <IoIosArrowBack className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          <span className="text-sm sm:text-base">Back</span>
        </div>
      </div>

      {/* Main profile container */}
      <div className="relative -mt-20 mx-auto w-[95%] sm:w-11/12 md:w-3/4 lg:w-1/2 bg-[#151515] rounded-2xl shadow-xl p-4 sm:p-6 min-h-screen">
        {/* Profile header section */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0 mt-4 sm:mt-7">
          <div>
            <img
              src={demoProfilePics}
              alt="Profile"
              className="w-20 sm:w-auto"
            />
            <div className="mt-4 sm:mt-6 text-base sm:text-lg">
              {userProfile?.full_name}
            </div>
            <div className="text-xs my-2 sm:my-3 text-[#5F6A63]">
              @{userProfile?.username}
            </div>
          </div>
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-4">
            <button
              onClick={() => navigate("/settings/profile")}
              className="flex hover:opacity-50 justify-center items-center bg-primary p-2 sm:p-3 rounded-lg gap-2 sm:gap-3 text-xs"
            >
              <FaRegEdit className="w-4 h-4 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Edit Profile</span>
            </button>
            <ShareMenu
              title={`Check out ${userProfile?.full_name}'s profile on DevStreak!`}
            />
          </div>
        </div>

        <hr className="my-4 sm:my-6" />

        {/* Tech stack section */}
        <div className="text-secondary mt-4 sm:mt-5 text-sm sm:text-base">
          Tech stack
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-8">
          {userProfile?.skills && userProfile.skills.length > 0 ? (
            userProfile.skills.map((skill, index) => (
              <SkillsItem key={index} text={skill} />
            ))
          ) : (
            <p className="text-[#5F6A63] text-xs sm:text-sm">
              No skills added yet
            </p>
          )}
        </div>

        <hr className="mt-10 sm:mt-14 mb-4 sm:mb-6" />

        {/* Social and stats section */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          <div className="flex gap-3 text-lg sm:text-xl justify-center sm:justify-start">
            <FaXTwitter className="hover:opacity-50 cursor-pointer" />
            <FaGithub className="hover:opacity-50 cursor-pointer" />
            <FaTelegram className="hover:opacity-50 cursor-pointer" />
          </div>
          <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 text-xs sm:text-sm">
            <div className="text-center sm:text-left">
              <p>0 XP</p>
              <p className="text-[#5F6A63]">Earned</p>
            </div>
            <div className="text-center sm:text-left">
              <p>0</p>
              <p className="text-[#5F6A63]">Task completed</p>
            </div>
          </div>
        </div>

        {/* Proof of work section */}
        <div className="mt-8 sm:mt-12 mb-2 text-sm sm:text-base">
          Proof of work
        </div>
        <hr className="mb-4 sm:mb-6" />
        <POWItemm />
        <POWItemm />
      </div>
    </div>
  );

  // ...existing code...
};

export default ProfileBody;
