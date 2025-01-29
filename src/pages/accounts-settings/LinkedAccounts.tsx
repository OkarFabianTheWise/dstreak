import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AccountSidebar from '@/components/AccountSidebar';
import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const LinkedAccounts = () => {
  return (
    <div className="flex min-h-screen m-4 mt-8 gap-5 relative">
      <AccountSidebar />
      
      <div className="flex-1">
        <div className="h-screen bg-[#151515] py-10 px-20 rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-500/40 scrollbar-track-[#202020] hover:scrollbar-thumb-gray-500/60 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full">
          <h1 className="text-primary text-2xl font-medium mb-2">Linked account</h1>
          <p className="text-muted-foreground mb-8">Manage your Dev-streak profile</p>

          <div className="space-y-6 mt-10 pt-5 border-t border-[gray]">
            <div className="flex items-center justify-between p-4 rounded-full border border-primary">
              <div className="flex items-center gap-3 ">
                <span className="text-xl">📧</span>
                <Input 
                  type="email"
                  value="johndoe@gmail.com"
                  className="border-none bg-transparent focus-visible:ring-0 p-0"
                  readOnly
                />
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaDiscord className="text-xl" />
                  <Input 
                    type="text"
                    placeholder="Enter your Discord username"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button variant="outline" className="rounded-full">
                  Connect
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaXTwitter className="text-xl" />
                  <Input 
                    type="text"
                    placeholder="Enter your X profile URL"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button variant="outline" className="rounded-full">
                  Connect
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaTelegram className="text-xl" />
                  <Input 
                    type="text"
                    placeholder="Enter your Telegram username"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button variant="outline" className="rounded-full">
                  Connect
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <FaGithub className="text-xl" />
                  <Input 
                    type="text"
                    placeholder="Enter your GitHub username"
                    className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                <Button variant="outline" className="rounded-full">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedAccounts;
