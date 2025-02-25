import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccountSidebar from "@/components/AccountSidebar";
import { IoIosArrowForward } from "react-icons/io";
import { handleProfileUpdate, handleDeleteAccount, useUserStore } from "../../utils/api/auth";
import AlertModal from "@/components/ui/api-error-alert";
import ApiCallConfirm from "@/components/ui/api-call-confirmation";
import ApiSuccessAlert from "@/components/ui/api-success-alert";
import { demoProfilePics } from "@/assets/image";

const EditProfile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [_, setUploadedAvatar] = useState<File | null>(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { userProfile, fetchUserProfile } = useUserStore();

  const fileInputRef = useRef(null);

  const handleUpdate = (label: string, value: string) => {
    if (value.trim() !== "") {
      handleProfileUpdate(
        label,
        value,
        setErrorMessage,
        setIsAlertOpen,
        setIsSuccess
      );
    } else {
      setErrorMessage("Please enter a value before updating.");
      setIsAlertOpen(true);
    }
  };

  const handleDelete = async () => {
    await handleDeleteAccount(setErrorMessage, setIsAlertOpen, setIsSuccess);
  };

  //get user profile
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  // update values
  useEffect(() => {
    setFullName(userProfile?.full_name || "");
    setUsername(userProfile?.username || "");

  }, [userProfile]);

  const handleUpload = () => {
    (fileInputRef.current! as any).click(); // Triggers the file input
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setErrorMessage("Please select an image file (JPG, PNG, GIF)");
      setIsAlertOpen(true);
      return;
    }

    // Validate size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("Image must be smaller than 2MB");
      setIsAlertOpen(true);
      return;
    }

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setAvatar(previewUrl);
    setUploadedAvatar(file);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen m-2 sm:m-4 mt-4 sm:mt-8 gap-3 sm:gap-5 relative">
      <AccountSidebar />

      <div className="flex-1">
        <div className="h-screen bg-[#151515] py-4 sm:py-10 px-4 sm:px-8 md:px-20 rounded-xl sm:rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-500/40 scrollbar-track-[#202020] hover:scrollbar-thumb-gray-500/60 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full">
          <h1 className="text-primary text-xl sm:text-2xl font-medium mb-2">
            Edit profile
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
            Manage your Dev-streak profile
          </p>

          <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-10 pt-4 sm:pt-5 border-t border-[gray]">
            {/* Avatar Section */}
            <div>
              <h2 className="text-foreground mb-3 sm:mb-4">Avatar</h2>
              <div className="flex flex-col items-start gap-3 sm:gap-2">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-xl flex items-center justify-center">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={demoProfilePics}
                      alt="Avatar"
                      className="w-full h-full p-2 object-cover"
                    />
                  )}
                </div>


                <div>
                  {/* hi */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="max-w-md">
                    <button
                      onClick={() => handleUpload()}
                      className="bg-primary mb-2 p-1.5 sm:p-2 px-3 hover:opacity-55 sm:px-4 rounded-full mt-3 sm:mt-4 text-xs sm:text-sm"
                    >
                      update
                    </button>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Recommended size is 256×256px
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 flex flex-col">
              <div>
                <label className="text-foreground block mb-2 text-sm sm:text-base">
                  Full name
                </label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="max-w-md border-primary rounded-full text-sm sm:text-base"
                />
                <div className="max-w-md">
                  <button
                    onClick={() => handleUpdate("full_name", fullName)}
                    className="bg-primary float-right p-1.5 sm:p-2 px-3 sm:px-4 hover:opacity-55 rounded-full mt-3 sm:mt-4 text-xs sm:text-sm"
                  >
                    update
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-foreground block mb-2 text-sm sm:text-base">
                  Username
                </label>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  readOnly
                  placeholder="Enter your username"
                  className="max-w-md border-primary rounded-full text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Delete Account Section */}
            <div className="relative mt-8">
              <Button
                variant="destructive"
                className="p-1.5 sm:p-2 px-3 sm:px-4 text-white bg-red-600 hover:bg-red-700 text-xs sm:text-sm"
                onClick={() => setIsConfirmOpen(true)}
              >
                Delete my account
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Permanently delete your account and remove all info.
              </p>
              <IoIosArrowForward className="text-[gray] absolute top-2 sm:top-4 right-2 sm:right-4 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AlertModal
        message={errorMessage}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />
      <ApiCallConfirm
        message="are you sure you want to go on with this action?"
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        isDestructive={true}
      />
      <ApiSuccessAlert
        message="Your action was completed successfully!"
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
      />
    </div>
  );
};

export default EditProfile;