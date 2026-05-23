import { Link } from "react-router-dom";
import { useEffect } from "react";

import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraIndex() {

  const pembicara = usePembicaraStore(
    (state: any) => state.pembicara
  );

  const setPembicara = usePembicaraStore(
    (state: any) => state.setPembicara
  );

  const removePembicara = usePembicaraStore(
    (state: any) => state.removePembicara
  );

  // FETCH PEMBICARA
  useEffect(() => {

    const fetchPembicara = async () => {

      try {

        const response = await fetch(
          "http://localhost:3000/pembicara"
        );

        const data = await response.json();

        console.log(data);

        setPembicara(data);

      } catch (error) {

        console.log(
          "Gagal fetch pembicara",
          error
        );

      }

    };

    fetchPembicara();

  }, []);

  // DELETE PEMBICARA
  const handleDelete = async (id: number) => {

    try {

      await fetch(
        `http://localhost:3000/pembicara/${id}`,
        {
          method: "DELETE",
        }
      );

      removePembicara(id);

    } catch (error) {

      console.log(
        "Gagal hapus pembicara",
        error
      );

    }

  };

  return (
    <div className="bg-black text-white min-h-screen p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Pembicara
        </h1>

        <Link
          to="/dashboard/pembicara/create"
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          + Tambah Pembicara
        </Link>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {pembicara.length > 0 ? (

          pembicara.map((item: any) => {

            return (

              <div
                key={item.id}
                className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"
              >

                <img
                  src={
                    item.image ||
                    "https://i.pravatar.cc/300"
                  }
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-4">

                  <h2 className="text-lg font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.role}
                  </p>

                  {/* BUTTON */}
                  <div className="flex gap-2 mt-4">

                    <Link
                      to={`/dashboard/pembicara/edit/${item.id}`}
                      className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>

                  </div>

                </div>

              </div>

            );

          })

        ) : (

          <p className="text-gray-400">
            Belum ada pembicara
          </p>

        )}

      </div>

    </div>
  );
}