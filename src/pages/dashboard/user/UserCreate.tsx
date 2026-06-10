import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

export default function UserCreate() {
  const navigate = useNavigate();

  const addUser = useUserStore(
    (state) => state.addUser
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    foto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://beckendnetflix-production.up.railway.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      addUser(data);

      navigate("/dashboard/users");
    } catch (error) {
      console.log("Gagal tambah user", error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Tambah User
        </h1>

        <Link
          to="/dashboard/users"
          className="text-gray-300 hover:text-white"
        >
          Kembali
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-4 bg-zinc-900 p-6 rounded-lg"
      >

        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black border border-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black border border-gray-700"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black border border-gray-700"
        />

        <input
          type="text"
          name="foto"
          placeholder="URL Foto"
          value={form.foto}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black border border-gray-700"
        />

        <button
          type="submit"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full"
        >
          Simpan
        </button>

      </form>
    </div>
  );
}