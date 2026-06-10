import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Pembicara {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface PembicaraState {
  pembicara: Pembicara[];

  fetchPembicara: () => Promise<void>;

  setPembicara: (pembicara: Pembicara[]) => void;
  addPembicara: (item: Pembicara) => void;
  removePembicara: (id: number) => void;
}

const API_URL = "http://localhost:3000/pembicara";

export const usePembicaraStore =
  create<PembicaraState>()(
    persist(
      (set) => ({
        pembicara: [],

        fetchPembicara: async () => {
        try {
          const response = await fetch(API_URL);
          if (response.ok) {
            const data = await response.json();
            
            set({ pembicara: data }); 
          }
        } catch (error) {
          console.error("Gagal mengambil data dari Railway:", error);
        }
      },

        setPembicara: (pembicara) =>
          set({ pembicara }),

        addPembicara: (item) =>
        set((state) => ({
          pembicara: [...state.pembicara, item],
        })),

        removePembicara: (id) =>
        set((state) => ({
          pembicara: state.pembicara.filter((p) => p.id !== id),
        })),

      }),
      {
        name: "pembicara-storage",
      }
    )
  );