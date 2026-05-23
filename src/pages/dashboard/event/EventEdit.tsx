import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EventEdit() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [pembicaraId, setPembicaraId] = useState("");

  // FETCH DETAIL EVENT
  useEffect(() => {

    const fetchEvent = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/events/${id}`
        );

        const data = await response.json();

        console.log(data);

        setTitle(data.title || "");
        setDateEvent(
          data.dateEvent
            ? data.dateEvent.split("T")[0]
            : ""
        );
        setLocation(data.location || "");
        setDescription(data.description || "");
        setCategoryId(
          data.categoryId?.toString() || ""
        );
        setPembicaraId(
          data.pembicaraId?.toString() || ""
        );

      } catch (error) {

        console.log(
          "Gagal fetch detail event",
          error
        );

      }

    };

    fetchEvent();

  }, [id]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:3000/events/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title,
            dateEvent,
            location,
            description,
            categoryId:
              Number(categoryId),
            pembicaraId:
              Number(pembicaraId),
          }),

        }
      );

      const data =
        await response.json();

      console.log(data);

      navigate("/dashboard/event");

    } catch (error) {

      console.log(
        "Gagal update event",
        error
      );

    }

  };

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-6">
        Edit Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md"
      >

        <input
          type="text"
          placeholder="Judul Event"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="date"
          value={dateEvent}
          onChange={(e) =>
            setDateEvent(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="text"
          placeholder="Lokasi"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="number"
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) =>
            setCategoryId(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="number"
          placeholder="Pembicara ID"
          value={pembicaraId}
          onChange={(e) =>
            setPembicaraId(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Update Event
        </button>

      </form>

    </div>
  );
}