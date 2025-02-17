import { demoProfilePics } from "@/assets/image"
import { useTasksStore } from "@/store/tasksStore"
import { Task, TaskUser } from "@/utils/api/tasks"
import { FC, useEffect, useState } from "react"
import { FaCircleNotch } from "react-icons/fa"
import { Link } from "react-router-dom"

interface TasksItemProps{
    task: Task,
}

const TasksItem: FC<TasksItemProps> = ({task}: TasksItemProps)=>{
    const [user, setUser] = useState<TaskUser | null>(null)
    const {fetchUser} = useTasksStore();

    const loadUser = async () => {
        const user = await fetchUser(task.author_id);

        if (user) {
            setUser(user);
        }else{
            setUser(null)
        }
    };

    const calculateDaysLeft = () => {
        if (!task.expired_at) return 0;
        const deadline = new Date(task.expired_at);
        const today = new Date();
        const diff = deadline.getTime() - today.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    useEffect(()=>{
        loadUser();
    },[])

    return (
        <Link to={"/tasks-details/" + task.id}>
            <div>
                {
                    user && (
                        <div className="w-full hover:opacity-50 flex justify-between bg-[#151515] items-center p-4 my-4">
                            <div className="flex gap-5">
                                <img src={demoProfilePics} className="w-20 h-20" />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div>{user?.full_name}</div>
                                        <div className="text-greytext text-sm">{user?.username}</div>
                                    </div>
                                    <div className="text-xs font-sans text-greytext">Due in {calculateDaysLeft()}d</div>
                                </div>
                            </div>
                            <div className="text-sm">
                                {task.points} XP
                            </div>
                        </div>
                    )
                }
                {
                    user == null && (
                        <div>
                            <FaCircleNotch className="animate-spin text-xl mx-auto"/>
                        </div>
                    )
                }
            </div>
        </Link>
    )
}

export default TasksItem