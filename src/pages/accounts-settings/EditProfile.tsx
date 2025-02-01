import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AccountSidebar from '@/components/AccountSidebar';
import { IoIosArrowForward } from 'react-icons/io';

const EditProfile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen m-4 mt-8 gap-5 relative">
      <AccountSidebar />
      
      <div className="flex-1">
        <div className="h-screen bg-[#151515] py-10 px-20 rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-500/40 scrollbar-track-[#202020] hover:scrollbar-thumb-gray-500/60 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full">
          <h1 className="text-primary text-2xl font-medium mb-2">Edit profile</h1>
          <p className="text-muted-foreground mb-8">Manage your Dev-streak profile</p>

          <div className="space-y-8 mt-10 pt-5 border-t border-[gray]">
            <div>
              <h2 className="text-foreground mb-4">Avatar</h2>
              <div className="flex flex-col items-start gap-4">
                <div className="w-[100px] h-[100px] rounded-xl border border-primary flex items-center justify-center">
                  {avatar ? (
                    <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
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
                  placeholder="Enter your full name"
                  className="max-w-md border-primary rounded-full"
                />
                <div className='max-w-md'>
                    <button className='bg-primary float-right p-2 px-4 rounded-full mt-4'>
                        update
                    </button>
                </div>
              </div>

              <div>
                <label className="text-foreground block mb-2">Username</label>
                <Input 
                  type="text"
                  placeholder="Enter your username"
                  className="max-w-md border-primary rounded-full"
                />
              </div>
              <div className='max-w-md'>
                    <button className='bg-primary float-right p-2 px-4 rounded-full mt-4'>
                        update
                    </button>
                </div>
            </div>  
      
            <div className='relative'>
              <Button variant="destructive" className="p-0 text-[red]">
                Delete my account
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Permanently delete your account and remove all info.
              </p>
              <IoIosArrowForward size={20} className='text-[gray] absolute top-4 right-4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;