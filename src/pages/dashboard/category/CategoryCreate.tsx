import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryCreate() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchCategories = useCategoryStore(
    (state) => state.fetchCategories
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Nama category wajib diisi!");
      return;
    }

    try {
      setLoading(true);

      // 🔥 POST KE BACKEND
      const response = await fetch(
        "http://localhost:3000/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menambahkan category");
      }

      const data = await response.json();
      console.log("CATEGORY BARU:", data);

      // 🔥 refresh data di store
      await fetchCategories();

      alert("Category berhasil ditambahkan!");

      setName("");

      // kembali ke list
      navigate("/dashboard/category");
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat menambahkan category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        Tambah Category
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-lg max-w-md"
      >
        <div className="mb-5">
          <label className="block mb-2">
            Nama Category
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Horror"
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 px-5 py-2 rounded hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/dashboard/category")
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