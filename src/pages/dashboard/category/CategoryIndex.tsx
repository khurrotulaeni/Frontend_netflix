import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryIndex() {
  const categories =
    useCategoryStore((state: any) => state.categories) || [];

  const setCategories = useCategoryStore(
    (state: any) => state.setCategories
  );

  const removeCategory = useCategoryStore(
    (state: any) => state.removeCategory
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/categories"
        );
        const data = await response.json();

        console.log("DATA CATEGORY:", data); 
        
        setCategories(data);
      } catch (error) {
        console.log("Gagal fetch category", error);
      }
    };

    fetchCategories();
  }, [setCategories]);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Category</h1>

        <Link
          to="/dashboard/category/create"
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          + Tambah
        </Link>
      </div>

<div className="space-y-4">
  {categories.length > 0 ? (
    categories
      .filter((category: any) => category !== null)
      .map((category: any) => (
        <div
          key={category.id}
          className="bg-zinc-900 p-4 rounded-lg flex justify-between items-center"
        >
          <h2 className="text-lg">
            {category.name}
          </h2>

          <div className="flex gap-2">
            <Link
              to={`/dashboard/category/edit/${category.id}`}
              className="bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600 text-black"
            >
              Edit
            </Link>

            <button
              onClick={() =>
                removeCategory(category.id)
              }
              className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>
        </div>
      ))
  ) : (
    <p className="text-gray-400">
      Belum ada category
    </p>
  )}
</div>
    </div>
  );
}