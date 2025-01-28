import { demoProfilePics } from "@/assets/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TasksItem from "./TasksItem";

const TasksBody: React.FC = ()=>{
    return (
        <div className="p-8 text-accent">
            <div className="bg-[url('./src/assets/image/green_bg_header.svg')] flex p-10 items-center rounded-lg">
                <img src={demoProfilePics} className="h-12"/>
                <div className="ml-4">
                    <div>Ready, set, earn XPs</div>
                    <div className="text-[#5F6A63]">complete tasks</div>
                </div>
            </div>
            <div>
                <div className="flex gap-4 items-end ">
                    
                    {/* <div className="flex gap-4">
                        <div className="underline">Open</div>
                        <div>Close</div>
                    </div> */}
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="mt-10 text-sm">
                            <div className="text-primary mr-10 flex items-start">
                                All Listing
                            </div>
                            <TabsTrigger
                                className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-accent data-[state=active]:text-foreground data-[state=inactive]:text-[#5F6A63] data-[state=active]:shadow-none "
                                value="account">Open</TabsTrigger>
                            <TabsTrigger 
                                className="relative  rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-accent data-[state=active]:text-foreground data-[state=inactive]:text-[#5F6A63] data-[state=active]:shadow-none "
                                value="password">Completed</TabsTrigger>
                        </TabsList>
                        <TabsContent className="mt-8" value="account">
                            <TasksItem />
                            <TasksItem />
                            <TasksItem />
                        </TabsContent>
                        <TabsContent className="mt-8" value="password">

                            <TasksItem />
                            <TasksItem />
                        </TabsContent>
                    </Tabs>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default TasksBody