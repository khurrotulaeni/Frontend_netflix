import { Link } from "react-router-dom";
import { useEffect } from "react";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraIndex() {
  const pembicara = usePembicaraStore((state: any) => state.pembicara) || [];
  const setPembicara = usePembicaraStore((state: any) => state.setPembicara);
  const removePembicara = usePembicaraStore((state: any) => state.removePembicara);

  useEffect(() => {
    const fetchPembicara = async () => {
      try {
        const response = await fetch(
          "https://beckendnetflix-production.up.railway.app/pembicara"
        );
        const data = await response.json();

        console.log("DATA PEMBICARA:", data); 

        setPembicara(data);
      } catch (error) {
        console.log("Gagal fetch pembicara", error);
      }
    };

    fetchPembicara();
  }, [setPembicara]);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pembicara</h1>

        <Link
          to="/dashboard/pembicara/create"
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          + Tambah Pembicara
        </Link>
      </div>

      <div className="space-y-4">
        {pembicara.length > 0 ? (
          pembicara
            .filter((p: any) => p !== null)
            .map((p: any) => (
              <div
                key={p.id}
                className="bg-zinc-900 p-4 rounded-lg flex justify-between items-center"
              >
               
                <div className="flex items-center gap-4">
                  <img 
                    src={p.image || "https://via.placeholder.com/150"} 
                    alt={p.name} 
                    className="w-16 h-16 object-cover rounded-full bg-zinc-800"
                    onError={(e: any) => {
                     
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{p.name}</h2>
                    <p className="text-sm text-gray-400">{p.role}</p>
                  </div>
                </div>
                {/* -------------------------------------------------------- */}

                <div className="flex gap-2">
                  <Link
                    to={`/dashboard/pembicara/edit/${p.id}`}
                    className="bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600 text-black"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => removePembicara(p.id)}
                    className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p className="text-gray-400">Belum ada pembicara</p>
        )}
      </div>
    </div>
  );
}