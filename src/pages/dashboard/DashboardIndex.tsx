import { useEffect } from "react";

import { useMovieStore } from "../../store/useMovieStore";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useEventStore } from "../../store/useEventStore";
import { usePembicaraStore } from "../../store/usePembicaraStore";

export default function DashboardIndex() {

  const movies = useMovieStore(
    (state) => state.movies
  ) || [];

  const categories = useCategoryStore(
    (state) => state.categories
  ) || [];

  const events = useEventStore(
    (state) => state.events
  ) || [];

  const pembicara = usePembicaraStore(
    (state) => state.pembicara
  ) || [];

  const setEvents = useEventStore(
    (state) => state.setEvents
  );

  const setPembicara = usePembicaraStore(
    (state) => state.setPembicara
  );

  // FETCH EVENT
  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const response = await fetch(
          "http://localhost:3000/events"
        );

        const data = await response.json();

        console.log(data);

        if (Array.isArray(data)) {
          setEvents(data);
        }

      } catch (error) {

        console.log(
          "Gagal fetch event",
          error
        );

      }

    };

    fetchEvents();

  }, []);

  // FETCH PEMBICARA
  useEffect(() => {

    const fetchPembicara = async () => {

      try {

        const response = await fetch(
          "http://localhost:3000/pembicara"
        );

        const data = await response.json();

        console.log(data);

        if (Array.isArray(data)) {
          setPembicara(data);
        }

      } catch (error) {

        console.log(
          "Gagal fetch pembicara",
          error
        );

      }

    };

    fetchPembicara();

  }, []);

  const stats = [
    {
      title: "Total Movies",
      total: movies.length,
    },
    {
      title: "Categories",
      total: categories.length,
    },
    {
      title: "Events",
      total: events.length,
    },
    {
      title: "Pembicara",
      total: pembicara.length,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Dashboard Admin
        </h1>

        <p className="text-gray-400 mt-2">
          Selamat datang di panel admin Netflix
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl"
          >

            <p className="text-gray-400 text-sm mb-2">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold">
              {item.total}
            </h2>

          </div>

        ))}

      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">

        <h2 className="text-xl font-semibold mb-5">
          Latest Movies
        </h2>

        <div className="space-y-4">

          {movies.length === 0 ? (

            <p className="text-gray-500 text-sm">
              Belum ada film yang ditambahkan.
            </p>

          ) : (

            movies.slice(0, 4).map((movie, index) => (

              <div
                key={movie.id || index}
                className="flex justify-between items-center border-b border-zinc-800 pb-3"
              >

                <p>{movie.name}</p>

                <button className="bg-red-600 px-4 py-1 rounded hover:bg-red-700">
                  Detail
                </button>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}