import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  foto: string;
}

interface UserState {
  users: User[];

  fetchUsers: () => Promise<void>;

  setUsers: (users: User[]) => void;
  addUser: (item: User) => void;
  removeUser: (id: number) => void;
}

const API_URL ="http://localhost:3000/users";

export const useUserStore =
  create<UserState>()(
    persist(
      (set) => ({
        users: [],

        fetchUsers: async () => {
          try {
            const response = await fetch(API_URL);

            if (response.ok) {
              const data = await response.json();

              set({ users: data });
            }
          } catch (error) {
            console.error(
              "Gagal mengambil data user:",
              error
            );
          }
        },

        setUsers: (users) =>
          set({ users }),

        addUser: (item) =>
          set((state) => ({
            users: [...state.users, item],
          })),

        removeUser: (id) =>
          set((state) => ({
            users: state.users.filter(
              (u) => u.id !== id
            ),
          })),
      }),
      {
        name: "user-storage",
      }
    )
  );