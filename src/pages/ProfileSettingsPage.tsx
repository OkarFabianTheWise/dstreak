import EditProfile from "../pages/accounts-settings/EditProfile";
import LinkedAccount from "../pages/accounts-settings/LinkedAccounts";
import ProfileSettingsTab from "../pages/accounts-settings/ProfileSettingsTab";
// import LinkedAccount from "@/components/ProfileSettings/LinkedAccount";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const ProfileSettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-black text-accent flex gap-8 p-8 m-8">
      <div className="bg-[#151515] min-h-[30vh] rounded-xl w-3/12 py-10 px-8">
        <div className="flex items-center text-xs text-greytext gap-2 hover:text-accent">
          <IoIosArrowBack /> Back
        </div>
        <div className="mt-2">Settings</div>
        <div className="mt-10 text-xs text-greytext">My account</div>
        <ProfileSettingsTab onTabSelected={(index) => setActiveTab(index)} />
      </div>
      <div className="bg-[#151515] min-h-[30vh] rounded-xl w-9/12 py-16 px-20">
        {activeTab == 0 ? <EditProfile /> : <LinkedAccount />}
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
