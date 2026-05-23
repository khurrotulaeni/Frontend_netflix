import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventStore } from "../../../store/useEventStore";

export default function EventCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); 
  const [dateEvent, setDateEvent] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [pembicaraId, setPembicaraId] = useState("");

  const addEvent = useEventStore((state) => state.addEvent);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await addEvent({
        title,
        dateEvent,
        location,
        description,
        categoryId: Number(categoryId),
        pembicaraId: Number(pembicaraId),
      });

      alert("Event berhasil ditambahkan!");

      navigate("/dashboard/event");

    } catch (error) {
      console.log("Gagal tambah event", error);
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

        <input
          type="number"
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="number"
          placeholder="Pembicara ID"
          value={pembicaraId}
          onChange={(e) => setPembicaraId(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

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