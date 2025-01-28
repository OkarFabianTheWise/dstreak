import { ReactNode } from "react"

interface LinkedAccountItemProps {
    icon: ReactNode,
    title: string,
    onClick?: ()=>void,
}

const LinkedAccountItem = ({ icon, title, onClick }:LinkedAccountItemProps) => {
    return (
        <div className="mt-8">
            <hr className="border-white" />
            <div className="flex justify-between items-center border rounded-3xl p-2 mt-6">
                <div className="flex gap-3 items-center">
                    {icon}
                    <span className="text-xs">{title}</span>
                </div>

                <button className="border text-xs border-primary p-2 rounded-3xl hover:text-white hover:bg-primary">Update</button>

            </div>
        </div>
    )
}

export default LinkedAccountItem