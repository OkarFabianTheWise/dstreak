const endpoint = import.meta.env.VITE_DEV_URL as string;

export interface Task {
    id: string,
    title: string,
    description: string,
    slug: string,
    points: number,
    author_id: string,
    created_at: string,
    updated_at: string,
    expired_at: string,
}

export interface TasksResponse {
    data: Task[];
    page: number;
    limit: number;
    total: number;
    total_pages: number;
}

export interface TaskUser {
    id: string;
    username: string;
    full_name: string;
    email: string;
    chapter: string | null;
    discord: string | null;
    telegram: string | null;
    github: string | null;
    twitter: string | null;
    wallet_address: string | null;
    password: string | null;
    skills: string[];
    created_at: string;
    updated_at: string;
}

export interface UserResponse {
    success: boolean;
    message: string;
    data: TaskUser;
}

export interface AddTask {
    title: string
    description: string
    task_type: string
    points: number
    expired_at: string
    is_published: boolean
}


export const fetchTasks = async ({
    page = 1,
    limit = 100,
}: {
    page?: number;
    limit?: number;
}): Promise<TasksResponse | undefined> => {
    try {
        const token = localStorage.getItem('accessToken');

        const response = await fetch(
            `${endpoint}/tasks?page=${page}&limit=${limit}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
            }
        );

        const data: TasksResponse = await response.json();

        return data;
    } catch (error: any) {
        console.error(error);
    }
}

export const fetchUserById = async (userId: string): Promise<TaskUser | undefined> => {
    try {
        console.log("userId");
        console.log("userId");
        console.log("userId");

        const token = localStorage.getItem('accessToken');

        const response = await fetch(
            `${endpoint}/users/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data: UserResponse = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return undefined;
    }
}

export const fetchTaskById = async (taskId: string): Promise<Task | undefined> => {
    try {
        const token = localStorage.getItem('accessToken');

        const response = await fetch(
            `${endpoint}/tasks/${taskId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch task');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching task:', error);
        return undefined;
    }
}

export const addTaskRequest = async (task: AddTask): Promise<Task | undefined> => {
    try {
        const token = localStorage.getItem('accessToken');

        const response = await fetch(
            `${endpoint}/tasks`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
                body: JSON.stringify(task),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to add task');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error adding task:', error);
        return undefined;
    }
}