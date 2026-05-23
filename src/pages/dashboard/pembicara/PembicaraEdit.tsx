import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PembicaraEdit() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  // FETCH DETAIL PEMBICARA
  useEffect(() => {

    const fetchPembicara = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/pembicara/${id}`
        );

        const data = await response.json();

        console.log(data);

        setName(data.name || "");
        setRole(data.role || "");
        setImage(data.image || "");

      } catch (error) {

        console.log(
          "Gagal fetch detail pembicara",
          error
        );

      }

    };

    fetchPembicara();

  }, [id]);

  // UPDATE PEMBICARA
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:3000/pembicara/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            role,
            image,
          }),

        }
      );

      const data =
        await response.json();

      console.log(data);

      navigate("/dashboard/pembicara");

    } catch (error) {

      console.log(
        "Gagal update pembicara",
        error
      );

    }

  };

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-6">
        Edit Pembicara
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md"
      >

        <input
          type="text"
          placeholder="Nama Pembicara"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Update Pembicara
        </button>

      </form>

    </div>
  );
}