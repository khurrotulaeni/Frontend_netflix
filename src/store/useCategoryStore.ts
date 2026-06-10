import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  name: string;
  createdAt?: string;
}

interface CategoryState {
  categories: Category[];

  setCategories: (data: Category[]) => void;
  fetchCategories: () => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  removeCategory: (id: number) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set, get) => ({
      categories: [],

      setCategories: (data) => set({ categories: data }),

      // GET DATA
      fetchCategories: async () => {
        const res = await fetch("https://beckendnetflix-production.up.railway.app/categories");
        const data = await res.json();
        set({ categories: data });
      },

      // ADD CATEGORY
      addCategory: async (name) => {
        await fetch("https://beckendnetflix-production.up.railway.app/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        });

        // refresh otomatis
        get().fetchCategories();
      },

      // DELETE CATEGORY
      removeCategory: async (id) => {
        await fetch(
          `https://beckendnetflix-production.up.railway.app/categories/${id}`,
          {
            method: "DELETE",
          }
        );

        get().fetchCategories();
      },
    }),
    {
      name: "category-storage",
    }
  )
);