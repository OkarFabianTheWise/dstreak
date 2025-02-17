import { demoProfilePics } from "@/assets/image";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import OpenTasks from "./OpenTasks";
import CompletedTasks from "./CompletedTaska";
import AlertModal from "../ui/api-error-alert";
import { useTasksStore } from "@/store/tasksStore";

const TasksBody: React.FC = () => {
    // const [openTasks, setOpenTasks] = useState<Task[]>([]);
    // const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    // const [errorMessage, setErrorMessage] = useState("");
    const { fetchTasksData, isLoading, openTasks, completedTasks, errorMessage, } = useTasksStore()
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isLoadingMore, setIsLoadingMore] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [hasMore, setHasMore] = useState(true);

    // const fetchTasksData = async (page: number = 1) => {
    //     try {
    //         if (page === 1) setIsLoading(true);
    //         const data = await fetchTasks({ page, limit: 20 });
    //         const now = new Date();
    //         const tasks = (data as TasksResponse).data || [];

    //         if (tasks.length === 0) {
    //             setHasMore(false);
    //             return;
    //         }

    //         if (tasks) {
    //             const openTasksList = tasks.filter(task => new Date(task.expired_at) > now);
    //             const completedTasksList = tasks.filter(task => new Date(task.expired_at) <= now);

    //             if (page === 1) {
    //                 setOpenTasks(openTasksList);
    //                 setCompletedTasks(completedTasksList);
    //             } else {
    //                 setOpenTasks(prev => [...prev, ...openTasksList]);
    //                 setCompletedTasks(prev => [...prev, ...completedTasksList]);
    //             }
    //             setCurrentPage(page);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching tasks:', error);
    //         setErrorMessage('Error fetching tasks');
    //     } finally {
    //         setIsLoading(false);
    //         setIsLoadingMore(false);
    //     }
    // };

    // const loadMore = async () => {
    //     if (isLoadingMore || !hasMore) return;
    //     setIsLoadingMore(true);
    //     await fetchTasksData(currentPage + 1);
    // };

    useEffect(() => {
        fetchTasksData();
    }, []);

    return (
        <div className="p-8 text-accent">
            <div className="bg-[url('./src/assets/image/green_bg_header.svg')] flex p-10 items-center rounded-lg">
                <img src={demoProfilePics} className="h-12" />
                <div className="ml-4">
                    <div>Ready, set, earn XPs</div>
                    <div className="text-[#5F6A63]">complete tasks</div>
                </div>
            </div>
            <div>
                <div className="flex gap-4 items-end ">
                    {
                        isLoading && <div>Loading...</div>
                    }
                    {
                        !isLoading && (
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
                                    <OpenTasks
                                        tasks={openTasks} />
                                </TabsContent>
                                <TabsContent className="mt-8" value="password">
                                    <CompletedTasks
                                        tasks={completedTasks} />
                                </TabsContent>
                            </Tabs>
                        )
                    }
                </div>

                {/* Modals */}
                <AlertModal
                    message={errorMessage}
                    isOpen={isAlertOpen}
                    onClose={() => setIsAlertOpen(false)}
                />
            </div>
        </div>
    )
}

export default TasksBody