import { IoDiamondOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { IoMdStopwatch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import TaskDetailsTextfield from "@/components/tasks/TaskDetailsTextfield";
import BoardNavbar from "./leaderboard/navbar";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/utils/api/auth";
import { useState } from "react";

const TasksDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmitClick = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/tasks-details" } });
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="w-4/5 mx-auto text-sm text-accent">
      <BoardNavbar />
      <div>
        <div className="flex gap-4 items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/814a/832f/d9a74116f1026acaac092b23d8de1f50?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cozsOzVr5hFrbblXoOCnaNyzny0sA6GrI8pUd02WVNqGmtGPQhCfagrGqt7PeR3HVH~fmQw1GTdrrm3zAZHPHciewaTtU6LhEJrxj853wC5tcZEgcTwutOvkFbGRWclOgRTWvl-HZeT30QLzk2I7tm4CgyOEe-vwBntRpWbPJ-ffcZ7zCrbwe74Rl9tgfmZXQaXIxq2cFOdTadWRLNZRcLhSpch4FPQhQeiUd7cGYpwIOI~rIvDNpI~NUDvzi1~zSqSwijo5PrKME4UJjCXy5rzsVPruAd-elu5sXi2i4MaSgGVjaQOrRxdkYvz6TtJwP8PKNuLvd2knfrJImnYz3g__"
            className="w-20 h-20"
          />
          <div className="flex flex-col gap-4 text-xs">
            <div>Create a functional ui for querying a wallet address</div>
            <div>by Alex </div>
          </div>
=======
    import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useTasksStore } from "@/store/tasksStore";
import { demoProfilePics } from "@/assets/image";
import { TaskUser } from "@/utils/api/tasks";

const calculateTimeLeft = (expiredAt: string) => {
    const now = new Date();
    const deadline = new Date(expiredAt);
    const diff = deadline.getTime() - now.getTime();
    
    if (diff <= 0) {
        return 'Expired';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    // const  seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d : ${hours}h : ${minutes}m`;// : ${seconds}s`;
};

const TasksDetailsPage: React.FC = ()=>{
    const { id } = useParams<{ id: string }>();
    const { getTaskById, currentTask, fetchUser } = useTasksStore();
    const [user, setUser] = useState<TaskUser | null>(null);

    useEffect(() => {
        console.log("The ID passed is "+ id);
        getTaskById(id || "");

        getUser();
    },[])

    const getUser = async ()=>{
        const usr = await fetchUser(currentTask?.author_id || "");
        if (usr) {
            console.log("User is " + usr);
            setUser(usr);
        }
    }
    
    return (
        <div className="w-4/5 mx-auto text-sm text-accent">
            <BoardNavbar />
            <div>
                <div className="flex gap-4 items-center">
                    <img
                        src={demoProfilePics}
                        className="w-20 h-20" />
                    <div className="flex flex-col gap-4 text-xs">
                        <div>{currentTask?.title}</div>
                        <div>by {user?.username} </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-8">
                <div className="w-2/5">
                    <div className="text-greytext text-xs my-2">
                        XP to earn
                    </div>
                    <div className="border-b border-t border-r border-accent min-h-[60vh]">
                        {/* Left Panel Here */}
                        <div className="py-5 pr-5 text-xs">
                            <div className="flex gap-4 items-center mb-10">
                                <IoDiamondOutline size={24} />
                                <div>{currentTask?.points} Total XP</div>
                            </div>
                            <div className="flex justify-between ">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <BiTask size={24}/> 
                                        <div>20</div>
                                    </div>
                                    <div className="text-greytext font-sans">Submissions</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <IoMdStopwatch size={24} />
                                        <div>{currentTask && calculateTimeLeft(currentTask.expired_at)}</div>
                                    </div>
                                    <div className="text-greytext font-sans">Remaining</div>
                                </div>
                            </div>
                            
                            <Dialog>
                                <DialogTrigger className="w-full">
                                    <Button className="w-full mt-6">
                                        submit
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className=" right-8 bg-secondary text-black">
                                    <DialogHeader>
                                        <DialogTitle className="text-primary">Task submission</DialogTitle>
                                        <DialogDescription>
                                            <span>submit now earn xp</span>

                                            <hr className="my-8" />

                                            <TaskDetailsTextfield
                                                label="Tweet Link" />

                                            <TaskDetailsTextfield
                                                label="Github Link" />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
                <div className="w-3/5">
                    <div className="text-greytext text-xs ml-2 my-2">
                        Description
                    </div>
                    <div className="border-b border-t border-accent min-h-[60vh]">
                        {/* Right Panel Here */}
                        <div className="py-4 px-4">
                            <div className="text-xs">{currentTask?.title}</div>
                            <div className="text-[10px] text-greytext py-8 gap-4">
                                <p>{currentTask?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
>>>>>>> 90500595df8c3ddd02d0c8d842ba236d4bc85a09
        </div>
      </div>

      <div className="flex mt-8">
        <div className="w-2/5">
          <div className="text-greytext text-xs my-2">XP to earn</div>
          <div className="border-b border-t border-r border-accent min-h-[60vh]">
            {/* Left Panel Here */}
            <div className="py-5 pr-5 text-xs">
              <div className="flex gap-4 items-center mb-10">
                <IoDiamondOutline size={24} />
                <div>25 Total XP</div>
              </div>
              <div className="flex justify-between ">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <BiTask size={24} />
                    <div>20</div>
                  </div>
                  <div className="text-greytext font-sans">Submissions</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <IoMdStopwatch size={24} />
                    <div>2d: 10h: 20s</div>
                  </div>
                  <div className="text-greytext font-sans">Remaining</div>
                </div>
              </div>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger className="w-full" asChild>
                  <Button className="w-full mt-6" onClick={handleSubmitClick}>
                    submit
                  </Button>
                </DialogTrigger>
                <DialogContent className="right-8 bg-secondary text-black">
                  <DialogHeader>
                    <DialogTitle className="text-primary">
                      Task submission
                    </DialogTitle>
                    <DialogDescription>
                      <span>submit now earn xp</span>

                      <hr className="my-8" />

                      <TaskDetailsTextfield label="Tweet Link" />

                      <TaskDetailsTextfield label="Github Link" />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="text-greytext text-xs ml-2 my-2">Description</div>
          <div className="border-b border-t border-accent min-h-[60vh]">
            {/* Right Panel Here */}
            <div className="py-4 px-4">
              <div className="text-xs">
                Create A Functional UI For Quering A Wallet Address
              </div>
              <div className="text-[10px] text-greytext py-8 gap-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksDetailsPage;
