import { StateFilter } from "@/components/reuse/filter";
import { Search } from "@/components/reuse/search";
import UserTable from "@/components/superAdmin/dashboard/task-assignment-table";


export default function AssignPage() {
  return (
    <div className="min-h-screen bg-black p-6">
      <header className="mb-8">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-[#51FF00]">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11.5,3.5l-2-2L1,10l8.5,8.5l2-2L5,10L11.5,3.5z" />
          </svg>
          ASSIGN / RELEASE
        </h1>
      </header>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Search />
        <StateFilter />
      </div>

      <UserTable />
    </div>
  );
}
