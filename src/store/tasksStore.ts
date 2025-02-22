import { create } from 'zustand'
import { Task, TasksResponse, fetchTasks, TaskUser, fetchUserById, fetchTaskById, AddTask, addTaskRequest } from '@/utils/api/tasks'

interface TasksState {
    openTasks: Task[]
    completedTasks: Task[]
    isLoading: boolean
    isLoadingMore: boolean
    currentPage: number
    hasMore: boolean
    errorMessage: string
    users: Record<string, TaskUser>
    userLoading: boolean
    userError: string | null
    currentTask: Task | null
    taskLoading: boolean
    taskError: string | null
    addTaskLoading: boolean,
    addTaskError: string | null,


    fetchTasksData: (page?: number) => Promise<void>
    loadMore: () => Promise<void>
    fetchUser: (userId: string) => Promise<TaskUser | undefined>
    getTaskById: (taskId: string) => Promise<Task | undefined>
    addTask: (taskData: AddTask) => Promise<Task | undefined>
}

export const useTasksStore = create<TasksState>((set, get) => ({
    openTasks: [],
    completedTasks: [],
    isLoading: true,
    isLoadingMore: false,
    currentPage: 1,
    hasMore: true,
    errorMessage: '',
    users: {},
    userLoading: false,
    userError: null,
    isAlertOpen: false,
    currentTask: null,
    taskLoading: false,
    taskError: null,
    addTaskLoading: false,
    addTaskError: null,


    fetchTasksData: async (page = 1) => {
        try {
            if (page === 1) set({ isLoading: true })
            const data = await fetchTasks({ page, limit: 20 })
            const now = new Date()
            const tasks = (data as TasksResponse).data || []

            if (tasks.length === 0) {
                set({ hasMore: false })
                return
            }

            const openTasksList = tasks.filter(task => new Date(task.expired_at) > now)
            const completedTasksList = tasks.filter(task => new Date(task.expired_at) <= now)

            set(state => ({
                openTasks: page === 1 ? openTasksList : [...state.openTasks, ...openTasksList],
                completedTasks: page === 1 ? completedTasksList : [...state.completedTasks, ...completedTasksList],
                currentPage: page
            }))
        } catch (error) {
            set({ errorMessage: 'Error fetching tasks' })
        } finally {
            set({ isLoading: false, isLoadingMore: false })
        }
    },

    loadMore: async () => {
        const { isLoadingMore, hasMore, currentPage } = get()
        if (isLoadingMore || !hasMore) return
        set({ isLoadingMore: true })
        await get().fetchTasksData(currentPage + 1)
    },

    fetchUser: async (userId: string) => {
        const { users } = get()
        
        // Return cached user if exists
        if (users[userId]) {
            return users[userId]
        }

        try {
            set({ userLoading: true, userError: null })
            const user = await fetchUserById(userId)
            
            if (user) {
                set(state => ({
                    users: {
                        ...state.users,
                        [userId]: user
                    }
                }))
                return user
            }
        } catch (error) {
            set({ userError: 'Failed to fetch user' })
        } finally {
            set({ userLoading: false })
        }
    },

    getTaskById: async (taskId: string) => {
        const { openTasks, completedTasks } = get()
        
        // Check in existing tasks first
        const existingTask = [...openTasks, ...completedTasks].find(
            task => task.id === taskId
        )
        
        if (existingTask) {
            set({ currentTask: existingTask })
            return existingTask
        }

        try {
            set({ taskLoading: true, taskError: null })
            
            const task = await fetchTaskById(taskId);
            
            set({ currentTask: task })
            
            return task
        } catch (error) {
            set({ taskError: 'Failed to fetch task' })
            return undefined
        } finally {
            set({ taskLoading: false })
        }
    },

    addTask: async (taskData: AddTask) => {
        try {
            set({ addTaskLoading: true, addTaskError: null })
            const { data: newTask } = (await addTaskRequest(taskData) as any as { data: Task });

            // Update tasks list
            set(state => ({
                openTasks: [newTask, ...state.openTasks]
            }))

            return newTask
        } catch (error) {
            set({ addTaskError: 'Failed to create task' })
            return undefined
        } finally {
            set({ addTaskLoading: false })
        }
    },
}))