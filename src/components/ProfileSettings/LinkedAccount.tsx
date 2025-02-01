import { MdEmail } from "react-icons/md";
import LinkedAccountItem from "./LinkedAccountItem";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LinkedAccount = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div>Linked Account</div>
                <div className="font-sans text-white">Manage your Dev-streak profile</div>
            </div>
            <div className="mt-16">
                <LinkedAccountItem
                    icon={<MdEmail size={26} />}
                    title="jondon@gmail.com" />
                <LinkedAccountItem
                    icon={<FaDiscord size={26} />}
                    title="connect your discord" />
                <LinkedAccountItem
                    icon={<FaXTwitter size={26} />}
                    title="connect X (Formally twitter)" />
                <LinkedAccountItem
                    icon={<FaTelegram size={26} />}
                    title="Telegram" />
                <LinkedAccountItem
                    icon={<FaGithub size={26} />}
                    title="Github" />
            </div>
        </div>
    )
}

export default LinkedAccount