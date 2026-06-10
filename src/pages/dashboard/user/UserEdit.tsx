import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users/${id}`
        );

        const data = await response.json();

        console.log(data);

        setName(data.name || "");
        setEmail(data.email || "");
        setFoto(data.foto || "");
      } catch (error) {
        console.log(
          "Gagal fetch detail user",
          error
        );
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/users/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
            foto,
          }),
        }
      );

      const data =
        await response.json();

      console.log(data);

      navigate("/dashboard/users");
    } catch (error) {
      console.log(
        "Gagal update user",
        error
      );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Edit User
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md"
      >
        <input
          type="text"
          placeholder="Nama User"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Password Baru (Opsional)"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="text"
          placeholder="URL Foto"
          value={foto}
          onChange={(e) =>
            setFoto(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        {foto && (
          <img
            src={foto}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Update User
        </button>
      </form>
    </div>
  );
}