import { IoIosArrowForward } from "react-icons/io"
import UpdateTextField from "./UpdateTextField"

const EditProfile = () => {
    return (
        <div>
            <div>Edit Profile</div>
            <div className="font-sans text-white text-sm">Manage your Dev-streak profile</div>

            <hr className="my-16"/>

            <div className="text-white text-sm mb-4">Avatar</div>
            <div className="border border-primary w-20 h-20 rounded-xl">

            </div>
            <div className="font-sans text-sm text-white my-4">Recommended size is 256x256px</div>

            <div className="w-4/5 flex flex-col gap-14">
                <UpdateTextField label="Full name" />
                <UpdateTextField label="Username" />
                <div className="flex justify-between text-white">
                    <div>
                        <div className="text-red-500">Delete my account</div>
                        <div className="font-sans">Permanently delete your account and remove all info</div>
                    </div>
                    <IoIosArrowForward size={30} />
                </div>
            </div>
        </div>
    )
}

export default EditProfile