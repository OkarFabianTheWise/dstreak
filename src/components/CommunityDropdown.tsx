import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";

export default function CommunityDropdown(){
    const [open, setOpen] = useState(false)

    return (
        <div className ='md:hidden ' onClick={()=>setOpen(!open)}>
            <li className='text-primary flex items-center gap-2'>
                Community
                <FaChevronDown className={`transition-transform duration-200 ${open && 'rotate-180'}`} />
            </li>
            <div className="ml-4 flex flex-col gap-3 mt-2">
                <div className="flex gap-2 items-center text-heading font-semibold text-sm"><AiOutlineDiscord />Discord</div>
                <div className="flex gap-2 items-center text-heading font-semibold text-sm"><BsTwitterX />(Formerly twitter)</div>
                <div className="flex gap-2 items-center text-heading font-semibold text-sm"><RiTelegram2Fill />Telegram</div>
            </div>
        </div >
    )
}