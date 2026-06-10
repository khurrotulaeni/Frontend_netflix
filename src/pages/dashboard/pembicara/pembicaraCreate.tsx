import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const addPembicara = usePembicaraStore(
    (state) => state.addPembicara
  );

  const [form, setForm] = useState({
    name: "",
    role: "",
    image: "",
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
        "http://localhost:3000/pembicara",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      // masukin ke store
      addPembicara(data);

      // pindah ke index
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.log("Gagal tambah pembicara", error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Tambah Pembicara
        </h1>

        <Link
          to="/dashboard/pembicara"
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
          type="text"
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black border border-gray-700"
        />

        <input
          type="text"
          name="image"
          placeholder="URL Image"
          value={form.image}
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