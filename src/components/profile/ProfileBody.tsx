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
    <div className="relative text-accent">
      <div className="bg-[url('./src/assets/image/green_bg_header.svg')] pt-8 h-36">
        <div className="flex items-center ml-8 gap-2">
          <IoIosArrowBack size={24} className="" />
          Back
        </div>
      </div>
      <div className="relative -mt-24 mx-auto w-11/12 md:w-3/4 lg:w-1/2 bg-[#151515] rounded-2xl shadow-xl p-6  min-h-screen">
        <div className="flex mt-7 justify-between">
          <div>
            <img src={demoProfilePics} />
            <div className="mt-6">{userProfile?.full_name}</div>
            <div className="text-xs my-3 text-[#5F6A63]">
              @{userProfile?.username}
            </div>
          </div>
          <div className="text-lg">
            <div className="flex flex-col text-xs gap-4">
              <button
                onClick={() => navigate("/settings/profile")}
                className="flex hover:opacity-50 justify-center items-center bg-primary p-3 rounded-lg gap-3"
              >
                <FaRegEdit size={24} /> Edit Profile
              </button>
              <ShareMenu
                title={`Check out ${userProfile?.full_name}'s profile on DevStreak!`}
              />
            </div>
          </div>
        </div>
        <hr className="my-6" />

        {/* Tech stack */}
        <div className="text-secondary mt-5">Tech stack</div>
        <div className="flex flex-wrap gap-3 mt-8">
          {userProfile?.skills && userProfile.skills.length > 0 ? (
            userProfile.skills.map((skill, index) => (
              <SkillsItem key={index} text={skill} />
            ))
          ) : (
            <p className="text-[#5F6A63] text-sm">No skills added yet</p>
          )}
        </div>

        <hr className="mt-14 mb-6" />

        <div className="flex justify-between">
          <div className="flex gap-3 text-xl">
            <FaXTwitter className="hover:opacity-50" />
            <FaGithub className="hover:opacity-50" />
            <FaTelegram className="hover:opacity-50" />
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <p>0 XP</p>
              <p className="text-[#5F6A63]">Earned</p>
            </div>
            <div>
              <p>0</p>
              <p className="text-[#5F6A63]">Task completed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-2">Proof of work</div>
        <hr className="mb-6" />
        <POWItemm />
        <POWItemm />
      </div>
    </div>
  );
};

export default ProfileBody;
