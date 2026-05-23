import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FilmEdit() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {

    const fetchMovie = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/movies/${id}`
        );

        const movie = await response.json();

        setName(movie.name);
        setRole(movie.role);

        setFoto(movie.image);

      } catch (error) {

        console.log(
          "Gagal mengambil movie",
          error
        );

      }

    };

    fetchMovie();

  }, [id]);

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    try {

      await fetch(
        `http://localhost:3000/movies/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            role,
            foto,
          }),
        }
      );

      alert("Film berhasil diupdate!");

      navigate("/dashboard/filmnetflix");

    } catch (error) {

      console.log(
        "Gagal update movie",
        error
      );

    }

  };

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Edit Film
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
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

        </div>

        <div className="mb-5">

          <label className="block mb-2">
            Genre
          </label>

          <input
            type="text"
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

        </div>

        <div className="mb-5">

          <label className="block mb-2">
            URL Foto
          </label>

          <input
            type="text"
            value={foto}
            onChange={(e) =>
              setFoto(e.target.value)
            }
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

        </div>

        <button
          type="submit"
          className="bg-yellow-500 px-5 py-2 rounded hover:bg-yellow-600"
        >
          Update
        </button>

      </form>

    </div>
  );
}