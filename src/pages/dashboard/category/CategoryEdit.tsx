import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(`http://localhost:3000/categories/${id}`);
      const data = await res.json();
      setName(data.name);
    };

    fetchCategory();
  }, [id]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    alert("Category berhasil diupdate!");
    navigate("/dashboard/category");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Category</h1>

      <form onSubmit={handleUpdate} className="bg-zinc-900 p-6 rounded-lg max-w-md">
        <input
          className="w-full p-3 bg-zinc-800 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="mt-4 bg-yellow-500 px-5 py-2 rounded text-black">
          Update
        </button>
      </form>
    </div>
  );
}