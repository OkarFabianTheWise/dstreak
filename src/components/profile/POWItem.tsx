import { demoProfilePics } from "@/assets/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const POWItemm: React.FC = () => {
  return (
    <div className="mb-3 sm:mb-4 md:mb-6">
      <div className="p-2 sm:p-3 md:p-4 text-sm sm:text-base">
        {/* User info section */}
        <div className="flex flex-wrap gap-2 items-center">
          <img
            src={demoProfilePics}
            className="w-10 h-10 sm:w-12 sm:h-12"
            alt="Profile"
          />
          <div className="text-accent text-sm sm:text-base">@DanTheMan</div>
          <div className="text-[#5F6A63] text-xs sm:text-sm">
            completed a task
          </div>
        </div>

        {/* Task content section */}
        <div className="flex items-center justify-center mt-2 sm:mt-3">
          <div className="w-full max-w-2xl">
            {/* Task preview image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/147c/8d1e/b3fc67bbc163039d971476ecf588e900?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TuWVhIFawQW9gQRUUu6W~fUMETGQJhLoYACw4hM9EBaSSKBtVeIlIm4OSsMK-Fdyp6aBJ2HtBxXv4ERW0aqnqWEQyC48Kt5UFbw9WgTezQgxzg90mt3WbQTKSjbEVTUUi8QV7vYIjA6ogLv3NSBvWlOmPpkehekJS4rzGvPP9MX7jWPKeuQ~Ba2DKlw5RSrHgsZOs7fvbhE6NU~KrCJoWS6rToc-GwvX4Z5pInJNmuN-ifMToIiTW6amY~Oc-W6VpEuTRP1zkib6RzWt6YtcUNp-YzZnCy9UaUtoYFG6CocyhRaxoBMMPfSrncCvmZ3f9D5wTFlpyujzdA676Haa0w__"
              className="w-full h-auto rounded-lg mb-2 sm:mb-3"
              alt="Task Preview"
            />

            {/* Task details box */}
            <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-4 border-2 rounded-lg">
              <img
                src={demoProfilePics}
                className="w-6 h-6 sm:w-8 sm:h-8"
                alt="Alex Profile"
              />
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-sm sm:text-base">
                <div className="font-medium">Alex:</div>
                <div className="text-xs sm:text-sm">
                  create a functional ui for querying a wallet address
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View button */}
      <div className="flex items-center text-xs sm:text-sm justify-end pr-2 sm:pr-4 hover:text-primary transition-colors cursor-pointer">
        <span>view</span>
        <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </div>
  );
};

export default POWItemm;
