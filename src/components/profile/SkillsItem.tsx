
interface SkillsItemProps {
    text: string                                                                                                      
}

const SkillsItem = ({text}: SkillsItemProps)=>{
    return (
        <div className="flex bg-[#5F6A63] p-2 text-sm rounded-xl">
            {text}
        </div>
    )
}

export default SkillsItem