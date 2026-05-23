import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMovieStore } from "../../../store/useMovieStore";

export default function FilmCreate() {

  const navigate = useNavigate();

  const addMovie = useMovieStore(
    (state: any) => state.addMovie
  );

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // URL GAMBAR
  const [foto, setFoto] = useState("");

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    if (!name || !role || !foto) {

      alert("Semua field wajib diisi!");

      return;

    }

    // DATA MOVIE
    const movieData = {
      name,
      role,
      foto,
    };

    try {

      // KIRIM KE BACKEND
      const response = await fetch(
        "http://localhost:3000/movies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movieData),
        }
      );

      const data = await response.json();

      // MASUKKAN KE ZUSTAND
      addMovie(data);

      alert("Film berhasil ditambahkan!");

      navigate("/dashboard/filmnetflix");

    } catch (error) {

      console.log(
        "Gagal tambah film",
        error
      );

    }

  };

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Tambah Film
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-lg max-w-md"
      >

        <div className="mb-5">

          <label className="block mb-2">
            Nama Film
          </label>

          <input
            type="text"
            placeholder="Contoh: Avengers"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          />

        </div>

        <div className="mb-5">

          <label className="block mb-2">
            Genre / Role
          </label>

          <input
            type="text"
            placeholder="Contoh: Action"
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          />

        </div>

        <div className="mb-5">

          <label className="block mb-2">
            URL Foto
          </label>

          <input
            type="text"
            placeholder="https://..."
            value={foto}
            onChange={(e) =>
              setFoto(e.target.value)
            }
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          />

        </div>

        <div className="flex gap-3">

          <button
            type="submit"
            className="bg-red-600 px-5 py-2 rounded hover:bg-red-700"
          >
            Simpan
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/dashboard/filmnetflix")
            }
            className="bg-gray-700 px-5 py-2 rounded"
          >
            Batal
          </button>

        </div>

      </form>

    </div>
  );
}