
interface TaskDetailsTextfieldProps {
    label: string;
}
const TaskDetailsTextfield = ({ label }: TaskDetailsTextfieldProps)=>{
    return (
        <div className="mt-5">
            <label className="text-primary font-press-start text-sm ">{label}</label>

            <div className="mt-4 flex items-center border border-accent-300 rounded-lg focus-within:ring-1">
                <span className="pl-4 pr-2 py-2 bg-gray-300 text-black ">https://</span>
                <input
                    type="text"
                    placeholder="Add a link"
                    className="flex-1 px-2 py-2 bg-inherit border-0  " />
            </div>
        </div>
    )
}

export default TaskDetailsTextfield;