export interface User {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    role: UserRole;
}

export type UserRole = 'user' | 'admin' | 'editor'