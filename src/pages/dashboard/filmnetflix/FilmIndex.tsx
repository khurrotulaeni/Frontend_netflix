import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useMovieStore } from "../../../store/useMovieStore";

export default function FilmIndex() {

  const movies = useMovieStore(
    (state: any) => state.movies
  );

  const setMovies = useMovieStore(
    (state: any) => state.setMovies
  );

  const removeMovie = useMovieStore(
    (state: any) => state.removeMovie
  );

  // FETCH MOVIES DARI BACKEND
  useEffect(() => {

    const fetchMovies = async () => {

      try {

        const response = await fetch(
          "http://localhost:3000/movies"
        );

        const data = await response.json();

        console.log(data);

        setMovies(data);

      } catch (error) {

        console.log(
          "Gagal fetch movies",
          error
        );

      }

    };

    fetchMovies();

  }, []);

  // DELETE MOVIE
  const handleDelete = async (id: number) => {

    try {

      await fetch(
        `http://localhost:3000/movies/${id}`,
        {
          method: "DELETE",
        }
      );

      removeMovie(id);

    } catch (error) {

      console.log(
        "Gagal hapus movie",
        error
      );

    }

  };

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Movies
        </h1>

        <Link
          to="/dashboard/filmnetflix/create"
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          + Tambah Film
        </Link>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {movies.length > 0 ? (

          movies.map((movie: any) => {

            console.log(movie.foto);

            return (

              <div
                key={movie.id}
                className="bg-zinc-900 rounded-lg overflow-hidden"
              >

                <img
                  src={
                    movie.foto ||
                    "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"
                  }
                  alt={movie.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-4">

                  <h2 className="text-lg font-semibold">
                    {movie.name}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    {movie.role}
                  </p>

                  <div className="flex gap-2 mt-3">

                    <Link
                      to={`/dashboard/filmnetflix/edit/${movie.id}`}
                      className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(movie.id)
                      }
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>

                  </div>

                </div>

              </div>

            );

          })

        ) : (

          <p className="text-gray-400">
            Belum ada film
          </p>

        )}

      </div>

    </div>
  );
}