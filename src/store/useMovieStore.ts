import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Movie {
  id: number;
  name: string;
  role: string;
  foto: string;
}

interface MovieState {

  movies: Movie[];

  // TAMBAHAN
  setMovies: (movies: Movie[]) => void;

  addMovie: (movie: Movie) => void;

  removeMovie: (id: number) => void;

}

export const useMovieStore =
  create<MovieState>()(
    persist(
      (set) => ({

        movies: [],

        // TAMBAHAN
        setMovies: (movies) =>
          set({
            movies,
          }),

        addMovie: (movie) =>
          set((state) => ({
            movies: [
              ...state.movies,
              movie,
            ],
          })),

        removeMovie: (id) =>
          set((state) => ({
            movies:
              state.movies.filter(
                (movie) => movie.id !== id
              ),
          })),

      }),
      {
        name: "movie-storage",
      }
    )
  );