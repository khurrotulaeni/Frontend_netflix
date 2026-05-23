import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../../../store/useEventStore";

export default function EventIndex() {
  const events = useEventStore((state) => state.events);
  const fetchEvents = useEventStore((state) => state.fetchEvents);
  const removeEvent = useEventStore((state) => state.removeEvent);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Events</h1>

        <Link
          to="/dashboard/event/create"
          className="bg-red-600 px-4 py-2 rounded"
        >
          + Tambah Event
        </Link>
      </div>

      <div className="space-y-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-zinc-900 p-5 rounded flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {event.title}
                </h2>

                <p className="text-sm text-gray-400">
                  {event.dateEvent}
                </p>

                <p className="text-sm text-gray-400">
                  {event.location}
                </p>

                <p className="text-gray-300 mt-2">
                  {event.description}
                </p>
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/dashboard/event/edit/${event.id}`}
                  className="bg-yellow-500 px-3 py-1 rounded text-black hover:bg-yellow-600"
                >
                  Edit
                </Link>

                <button
                  onClick={() => removeEvent(event.id)}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Belum ada event</p>
        )}
      </div>
    </div>
  );
}