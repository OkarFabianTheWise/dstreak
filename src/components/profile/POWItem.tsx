import { demoProfilePics } from "@/assets/image"
import React from "react"
import { IoIosArrowForward } from "react-icons/io"

const POWItemm: React.FC = ()=>{
    return (
        <div className="mb-3">
            <div className="p-2 text-sm">
                <div className="flex gap-2 items-center">
                    <img src={demoProfilePics} className="w-12 h-12" />
                    <div className="text-accent">@DanTheMan</div>
                    <div className="text-[#5F6A63]">completed a task</div>
                </div>
                <div>
                    <div className="ml-14 mt-2">
                        <img src="https://s3-alpha-sig.figma.com/img/147c/8d1e/b3fc67bbc163039d971476ecf588e900?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TuWVhIFawQW9gQRUUu6W~fUMETGQJhLoYACw4hM9EBaSSKBtVeIlIm4OSsMK-Fdyp6aBJ2HtBxXv4ERW0aqnqWEQyC48Kt5UFbw9WgTezQgxzg90mt3WbQTKSjbEVTUUi8QV7vYIjA6ogLv3NSBvWlOmPpkehekJS4rzGvPP9MX7jWPKeuQ~Ba2DKlw5RSrHgsZOs7fvbhE6NU~KrCJoWS6rToc-GwvX4Z5pInJNmuN-ifMToIiTW6amY~Oc-W6VpEuTRP1zkib6RzWt6YtcUNp-YzZnCy9UaUtoYFG6CocyhRaxoBMMPfSrncCvmZ3f9D5wTFlpyujzdA676Haa0w__"
                            className="" />
                        <div className="flex items-start gap-3 p-4 border-2">
                            <img src={demoProfilePics} className="w-8 h-8" />
                            <div className="flex">
                                <div>Alex:</div>
                                <div>
                                    create a functional ui for querying a wallet address
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-xs justify-end">
                view
                <IoIosArrowForward />
            </div>
        </div>
    )
}

export default POWItemm