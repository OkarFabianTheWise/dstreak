import Highlights from "./highlights";
import BoardNavbar from "./navbar";

const LeaderboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="">
      <BoardNavbar />
      <Highlights />
      {children}
    </div>
  );
};

export default LeaderboardLayout;
