
const TasksItem = ()=>{
    return (
        <a href="/tasks-details">
            <div className="w-full hover:opacity-50 flex justify-between bg-[#151515] items-center p-4 my-4">
                <div className="flex gap-5">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/814a/832f/d9a74116f1026acaac092b23d8de1f50?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cozsOzVr5hFrbblXoOCnaNyzny0sA6GrI8pUd02WVNqGmtGPQhCfagrGqt7PeR3HVH~fmQw1GTdrrm3zAZHPHciewaTtU6LhEJrxj853wC5tcZEgcTwutOvkFbGRWclOgRTWvl-HZeT30QLzk2I7tm4CgyOEe-vwBntRpWbPJ-ffcZ7zCrbwe74Rl9tgfmZXQaXIxq2cFOdTadWRLNZRcLhSpch4FPQhQeiUd7cGYpwIOI~rIvDNpI~NUDvzi1~zSqSwijo5PrKME4UJjCXy5rzsVPruAd-elu5sXi2i4MaSgGVjaQOrRxdkYvz6TtJwP8PKNuLvd2knfrJImnYz3g__"
                        className="w-20 h-20" />
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Alex</div>
                            <div className="text-greytext text-sm">@alexfavour</div>
                        </div>
                        <div className="text-xs font-sans text-greytext">Due in 19d</div>
                    </div>
                </div>
                <div className="text-sm">
                    25XP
                </div>
            </div>
        </a>
    )
}

export default TasksItem