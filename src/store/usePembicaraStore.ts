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

  setPembicara: (pembicara: Pembicara[]) => void;
  addPembicara: (item: Pembicara) => void;
  removePembicara: (id: number) => void;
}

export const usePembicaraStore =
  create<PembicaraState>()(
    persist(
      (set) => ({
        pembicara: [],

        setPembicara: (pembicara) =>
          set({ pembicara }),

        addPembicara: (item) =>
          set((state) => ({
            pembicara: [
              ...state.pembicara,
              item,
            ],
          })),

        removePembicara: (id) =>
          set((state) => ({
            pembicara: state.pembicara.filter(
              (p) => p.id !== id
            ),
          })),
      }),
      {
        name: "pembicara-storage",
      }
    )
  );