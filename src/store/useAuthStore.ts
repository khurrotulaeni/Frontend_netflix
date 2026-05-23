import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState{
    isAuthenticated: boolean;
    user: string | null;

    categories: string[];

    login: (userName: string) => void;
    logout: () => void;
    addCategory: (name: string) => void;

    removeCategory: (name: string) => void;
}

export const useAuthStore =  create<AuthState>() (
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            categories: [],

            login: (userName: string) =>
                set({ isAuthenticated: true, user: userName }),
            logout: () => set({ isAuthenticated: false, user: null }),

            addCategory: (name) =>
                set((state) => ({
            categories: [...state.categories, name],
        })),
            removeCategory: (name) =>
                set((state) => ({
            categories: state.categories.filter((cat) => cat !== name),
            })),
        }),
        {
            name: "auth-storage",
        },
    ),
);
