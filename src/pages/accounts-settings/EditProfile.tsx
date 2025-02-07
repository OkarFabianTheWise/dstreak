import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccountSidebar from "@/components/AccountSidebar";
import { IoIosArrowForward } from "react-icons/io";
import { handleProfileUpdate, handleDeleteAccount } from "../../utils/api/auth";
import AlertModal from "@/components/ui/api-error-alert";
import ApiCallConfirm from "@/components/ui/api-call-confirmation";
import ApiSuccessAlert from "@/components/ui/api-success-alert";

const EditProfile = () => {
  const [avatar] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  // const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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

  return (
    <div className="flex min-h-screen m-4 mt-8 gap-5 relative">
      <AccountSidebar />

      <div className="flex-1">
        <div className="h-screen bg-[#151515] py-10 px-20 rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-500/40 scrollbar-track-[#202020] hover:scrollbar-thumb-gray-500/60 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full">
          <h1 className="text-primary text-2xl font-medium mb-2">
            Edit profile
          </h1>
          <p className="text-muted-foreground mb-8">
            Manage your Dev-streak profile
          </p>

          <div className="space-y-8 mt-10 pt-5 border-t border-[gray]">
            <div>
              <h2 className="text-foreground mb-4">Avatar</h2>
              <div className="flex flex-col items-start gap-4">
                <div className="w-[100px] h-[100px] rounded-xl border border-primary flex items-center justify-center">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-muted-foreground">No image</span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Recommended size is 256×256px
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 flex flex-col">
              <div>
                <label className="text-foreground block mb-2">Full name</label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="max-w-md border-primary rounded-full"
                />
                <div className="max-w-md">
                  <button
                    onClick={() => handleUpdate("full_name", fullName)}
                    className="bg-primary float-right p-2 px-4 rounded-full mt-4"
                  >
                    update
                  </button>
                </div>
              </div>

              <div>
                <label className="text-foreground block mb-2">Username</label>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your username"
                  className="max-w-md border-primary rounded-full"
                />
              </div>
              <div className="max-w-md">
                <button
                  onClick={() => handleUpdate("username", username)}
                  className="bg-primary float-right p-2 px-4 rounded-full mt-4"
                >
                  update
                </button>
              </div>
            </div>

            <div className="relative">
              <Button
                variant="destructive"
                className="p-2 px-4 text-white bg-red-600 hover:bg-red-700"
                onClick={() => setIsConfirmOpen(true)}
              >
                Delete my account
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Permanently delete your account and remove all info.
              </p>
              <IoIosArrowForward
                size={20}
                className="text-[gray] absolute top-4 right-4"
              />
            </div>
          </div>
        </div>
      </div>
      <AlertModal
        message={errorMessage}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />
      <ApiCallConfirm
        message="are you sure you want to go on with this action?"
        isOpen={isConfirmOpen}
        onClose={() => {
          setIsConfirmOpen(false);
        }}
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
