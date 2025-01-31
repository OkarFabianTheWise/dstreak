import { demoProfilePics } from "@/assets/image"
import { IoIosArrowBack, IoMdShareAlt } from "react-icons/io"
import { FaGithub, FaRegEdit } from "react-icons/fa"
import SkillsItem from "./SkillsItem"
import { FaTelegram, FaXTwitter } from "react-icons/fa6"
import POWItemm from "./POWItem"

const ProfileBody: React.FC = ()=>{
    return (
        <div className="relative text-accent">
            <div className="bg-[url('./src/assets/image/green_bg_header.svg')] pt-8 h-36">
                <div className="flex items-center ml-8 gap-2">
                    <IoIosArrowBack size={24} className=""/>
                    Back
                </div>
            </div>
            <div className="relative -mt-24 mx-auto w-11/12 md:w-3/4 lg:w-1/2 bg-[#151515] rounded-2xl shadow-xl p-6  min-h-screen">
                <div className="flex mt-7 justify-between">
                    <div>
                        <img src={demoProfilePics} />
                        <div className="mt-6">
                            Daniel David
                        </div>
                        <div className="text-xs my-3 text-[#5F6A63]">
                            @DanTheMan
                        </div>
                    </div>
                    <div className="text-lg">
                        <div className="flex flex-col text-xs gap-4">
                            <button className="flex hover:opacity-50 justify-center items-center bg-primary p-3 rounded-lg gap-3">
                                <FaRegEdit size={24}/> Edit Profile
                            </button>
                            <button className="flex hover:opacity-50 justify-center items-center gap-2 p-3 bg-transparent border-2 border-secondary rounded-lg">
                                <IoMdShareAlt size={24}/> Share
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6"/>

                {/* Tech stack */}
                <div className="text-secondary mt-5">Tech stack</div>
                <div className="flex gap-3 mt-8">
                    <SkillsItem 
                        text="Javascript"/>
                    <SkillsItem 
                        text="Python"/>
                    <SkillsItem 
                        text="Dart"/>
                </div>

                <hr className="mt-14 mb-6" />

                <div className="flex justify-between">
                    <div className="flex gap-3 text-xl">
                        <FaXTwitter className="hover:opacity-50" />
                        <FaGithub className="hover:opacity-50" />
                        <FaTelegram className="hover:opacity-50" />
                    </div>
                    <div className="flex gap-8 text-sm">
                        <div>
                            <p>1k XP</p>
                            <p className="text-[#5F6A63]">Earned</p>
                        </div>
                        <div>
                            <p>10</p>
                            <p className="text-[#5F6A63]">Task completed</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 mb-2">Proof of work</div>
                <hr className="mb-6" />
                <POWItemm />
                <POWItemm />
            </div>
        </div>
    )
}

export default ProfileBody