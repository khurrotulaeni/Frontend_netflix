import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
  id: number;
  title: string;
  dateEvent: string;
  location: string;
  description: string;
  categoryId?: number;
  pembicaraId?: number;
}

interface EventState {
  events: Event[];

  setEvents: (events: Event[]) => void;
  fetchEvents: () => Promise<void>;
  addEvent: (data: Omit<Event, "id">) => Promise<void>;
  updateEvent: (id: number, data: Omit<Event, "id">) => Promise<void>;
  removeEvent: (id: number) => Promise<void>;
}

export const useEventStore = create<EventState>()(
  persist(
    (set, get) => ({
      events: [],

      setEvents: (events) => set({ events }),

      fetchEvents: async () => {
        const res = await fetch("http://localhost:3000/events");
        const data = await res.json();
        set({ events: data });
      },

      addEvent: async (data) => {
        await fetch("http://localhost:3000/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        await get().fetchEvents(); 
      },

      updateEvent: async (id, data) => {
        await fetch(`http://localhost:3000/events/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        await get().fetchEvents();
      },

      removeEvent: async (id) => {
        await fetch(`http://localhost:3000/events/${id}`, {
          method: "DELETE",
        });

        await get().fetchEvents();
      },
    }),
    {
      name: "event-storage",
      partialize: (state) => ({ events: state.events }), // 🔥 FIX PERSIST BUG
    }
  )
);