import { Task } from "@/utils/api/tasks"
import TasksItem from "./TasksItem"

interface CompletedTasksProps{
    tasks: Task[],
}

const CompletedTasks: React.FC<CompletedTasksProps> = ({tasks}) => {
    return (
        <div>
            {
                tasks.map((task)=>(
                    <div>
                        <TasksItem key={task.id} task={task} />
                    </div>
                ))
            }
            {
                !tasks.length && <div>No completed tasks available</div>
            }
        </div>
    )
}

export default CompletedTasks