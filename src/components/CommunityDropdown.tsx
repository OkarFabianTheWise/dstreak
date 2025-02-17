import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";

export default function CommunityDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden" onClick={() => setOpen(!open)}>
            <li className="text-primary flex items-center gap-2 cursor-pointer">
                Community
                <FaChevronDown className={`transition-transform duration-200 ${open && "rotate-180"}`} />
            </li>
            {open && (
                <div className="ml-4 flex flex-col gap-3 mt-2">
                    <div className="flex gap-2 items-center text-heading font-semibold text-sm">
                        <AiOutlineDiscord />
                        <a
                            href="https://discord.gg/C6EgkeEAed"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discord
                        </a>
                    </div>
                    <div className="flex gap-2 items-center text-heading font-semibold text-sm">
                        <BsTwitterX />
                        <a
                            href="https://x.com/SuperteamNG"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            X
                        </a>
                    </div>
                    <div className="flex gap-2 items-center text-heading font-semibold text-sm">
                        <RiTelegram2Fill />
                        <a
                            href="https://t.me/+9nrEI-PFxKg0MjY0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Telegram
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}