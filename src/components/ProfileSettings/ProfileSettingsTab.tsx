import React, { useEffect, useState } from "react"

interface ProfileSettingsTabProps{
    onTabSelected: (tabIndex: number) => void
}

const ProfileSettingsTab: React.FC<ProfileSettingsTabProps> = ({onTabSelected}:ProfileSettingsTabProps)=>{
    const [activeTab, setActiveTab] = useState(0)

    useEffect(()=>{
        onTabSelected(activeTab)
    })

    const selectedItemClass = "bg-greytext px-4 py-2 rounded-3xl hover:opacity-50";

    return (
        <div className="text-xs flex flex-col gap-4 py-5">
            <div onClick={()=>setActiveTab(0)} className={" "+(activeTab == 0 && selectedItemClass)}>
                Edit profile
            </div>
            <div onClick={() => setActiveTab(1)} className={" " + (activeTab == 1 && selectedItemClass)}>
                Linked Account
            </div>
        </div>
    )
}

export default ProfileSettingsTab