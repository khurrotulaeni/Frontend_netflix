import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); 
  const [dateEvent, setDateEvent] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [pembicaraId, setPembicaraId] = useState("");

  // --- STATE BARU UNTUK MENAMPUNG LIST DROPDOWN ---
  const [categories, setCategories] = useState<any[]>([]);
  const [pembicaraList, setPembicaraList] = useState<any[]>([]);

  // --- FETCH DATA UNTUK ISI DROPDOWN ---
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        // Fetch data Category
        const resCategory = await fetch("https://beckendnetflix-production.up.railway.app/categories");
        if (resCategory.ok) {
          const dataCat = await resCategory.json();
          setCategories(dataCat);
        }

        // Fetch data Pembicara
        const resPembicara = await fetch("https://beckendnetflix-production.up.railway.app/pembicara");
        if (resPembicara.ok) {
          const dataPem = await resPembicara.json();
          setPembicaraList(dataPem);
        }
      } catch (error) {
        console.log("Gagal memuat data dropdown", error);
      }
    };

    fetchDropdownData();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("https://beckendnetflix-production.up.railway.app/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          dateEvent,
          location,
          description,
          categoryId: Number(categoryId),
          pembicaraId: Number(pembicaraId),
        }),
      });

      if (response.ok) {
        alert("Event berhasil ditambahkan ke Railway!");
        navigate("/dashboard/event");
      } else {
        alert("Gagal menambahkan event ke server");
      }

    } catch (error) {
      console.log("Gagal tambah event", error);
      alert("Terjadi kesalahan koneksi ke server");
    }
  }

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Tambah Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          type="text"
          placeholder="Nama Event"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="date"
          value={dateEvent}
          onChange={(e) => setDateEvent(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="text"
          placeholder="Lokasi"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

        {/* --- DROPDOWN CATEGORY (MENGGANTIKAN INPUT NUMBER) --- */}
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-gray-300"
        >
          <option value="">-- Pilih Kategori --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* --- DROPDOWN PEMBICARA (MENGGANTIKAN INPUT NUMBER) --- */}
        <select
          value={pembicaraId}
          onChange={(e) => setPembicaraId(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-gray-300"
        >
          <option value="">-- Pilih Pembicara --</option>
          {pembicaraList.map((pembicara) => (
            <option key={pembicara.id} value={pembicara.id}>
              {pembicara.name} ({pembicara.role})
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Simpan
        </button>

      </form>
    </div>
  );
}