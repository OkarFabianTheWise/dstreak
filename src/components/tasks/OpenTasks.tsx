import { Task } from "@/utils/api/tasks"
import TasksItem from "./TasksItem"

interface OpenTasksProps{
    tasks: Task[],
}

const OpenTasks: React.FC<OpenTasksProps> = ({tasks})=>{
    
    return (
        <div>
            {
                tasks.map((task)=>(
                    <div>
                        <TasksItem 
                            key={task.id} 
                            task={task} />
                    </div>
                ))
            }
            {
                !tasks.length && <div>No tasks available</div>
            }
        </div>
    )
}

export default OpenTasks