import TasksBody from "@/components/tasks/TasksBody";
import BoardNavbar from "./leaderboard/navbar";

const TasksPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <BoardNavbar />
            <TasksBody />
        </div>
    );
};

export default TasksPage;
