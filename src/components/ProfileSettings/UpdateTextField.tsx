
interface UpdateTextFieldProps {
    label: string,

}

const UpdateTextField = ({label} : UpdateTextFieldProps)=>{
    return (
        <div className="flex flex-col gap-4">
            <div>{label}</div>
            <input type="text" className="w-full bg-[#151515] border border-primary rounded-3xl p-2 text-white" />
            <div className="flex justify-end">
                <button className="border border-primary p-3 rounded-3xl hover:text-white hover:bg-primary">Update</button>
            </div>
        </div>
    )
}

export default UpdateTextField