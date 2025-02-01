import ProfileBody from "@/components/profile/ProfileBody";
import BoardNavbar from "./leaderboard/navbar";

const ProfilePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <BoardNavbar />
            <ProfileBody />
        </div>
    );
};

export default ProfilePage;
