import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AccountSidebar from "@/components/AccountSidebar";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { handleProfileUpdate, useUserStore } from "@/utils/api/auth";
import { IoMdMail } from "react-icons/io";
import AlertModal from "@/components/ui/api-error-alert";
import ApiSuccessAlert from "@/components/ui/api-success-alert";

const LinkedAccounts = () => {
  const { userProfile, fetchUserProfile } = useUserStore();
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [github, setGithub] = useState("");

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleDiscordChange = (e: any) => setDiscord(e.target.value);
  const handleTwitterChange = (e: any) => setTwitter(e.target.value);
  const handleTelegramChange = (e: any) => setTelegram(e.target.value);
  const handleGithubChange = (e: any) => setGithub(e.target.value);

  //get user profile
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  useEffect(() => {
    setEmail(userProfile?.email || "");
    setDiscord(userProfile?.discord || "");
    setTwitter(userProfile?.twitter || "");
    setTelegram(userProfile?.telegram || "");
    setGithub(userProfile?.github || "");
  }, [userProfile]);

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

  return (
    <div className="flex min-h-screen m-4 mt-8 gap-5 relative">
      <AccountSidebar />

      <div className="flex-1">
        <div className="h-screen bg-[#151515] py-10 px-20 rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-500/40 scrollbar-track-[#202020] hover:scrollbar-thumb-gray-500/60 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full">
          <h1 className="text-primary text-2xl font-medium mb-2">
            Linked account
          </h1>
          <p className="text-muted-foreground mb-8">
            Manage your Dev-streak profile
          </p>

          <div className="space-y-6 mt-10 pt-5 border-t border-[gray]">
            <div className="flex items-center justify-between p-4 rounded-full border border-primary">
              <div className="flex items-center gap-3 ">
                <IoMdMail className="text-xl" />
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email address"
                  className="border-none bg-transparent focus-visible:ring-0 p-0"
                />
              </div>
              <Button variant="outline" className="rounded-full">
                Update
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaDiscord className="text-xl" />
                  <Input
                    type="text"
                    value={discord}
                    onChange={handleDiscordChange}
                    placeholder="Discord username"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleUpdate("discord", discord)}
                  className="rounded-full"
                >
                  Update
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaXTwitter className="text-xl" />
                  <Input
                    type="text"
                    value={twitter}
                    onChange={handleTwitterChange}
                    placeholder="X profile URL"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleUpdate("twitter", twitter)}
                  className="rounded-full"
                >
                  Update
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaTelegram className="text-xl" />
                  <Input
                    type="text"
                    value={telegram}
                    onChange={handleTelegramChange}
                    placeholder="Telegram username"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleUpdate("telegram", telegram)}
                  className="rounded-full"
                >
                  Update
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaGithub className="text-xl" />
                  <Input
                    value={github}
                    onChange={handleGithubChange}
                    placeholder="GitHub username"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button
                  onClick={() => handleUpdate("github", github)}
                  variant="outline"
                  className="rounded-full"
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertModal
        message={errorMessage}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />

      <ApiSuccessAlert
        message="Your action was completed successfully!"
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
      />
    </div>
  );
};

export default LinkedAccounts;
