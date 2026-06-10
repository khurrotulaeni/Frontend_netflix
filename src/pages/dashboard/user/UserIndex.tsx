import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUserStore } from "../../../store/useUserStore";

export default function UserIndex() {
  const users = useUserStore((state: any) => state.users) || [];
  const setUsers = useUserStore((state: any) => state.setUsers);
  const removeUser = useUserStore((state: any) => state.removeUser);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://beckendnetflix-production.up.railway.app/users"
        );

        const data = await response.json();

        console.log("DATA USER:", data);

        setUsers(data);
      } catch (error) {
        console.log("Gagal fetch user", error);
      }
    };

    fetchUsers();
  }, [setUsers]);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User</h1>

        <Link
          to="/dashboard/users/create"
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          + Tambah User
        </Link>
      </div>

      <div className="space-y-4">
        {users.length > 0 ? (
          users
            .filter((u: any) => u !== null)
            .map((u: any) => (
              <div
                key={u.id}
                className="bg-zinc-900 p-4 rounded-lg flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      u.foto ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QMIeKPROE2T0kipLp5oLAEcygEoB-ZLP-g&s"
                    }
                    alt={u.name}
                    className="w-16 h-16 object-cover rounded-full bg-zinc-800"
                    onError={(e: any) => {
                      e.target.src =
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QMIeKPROE2T0kipLp5oLAEcygEoB-ZLP-g&s";
                    }}
                  />

                  <div>
                    <h2 className="text-lg font-semibold">
                      {u.name}
                    </h2>

                    <p className="text-sm text-gray-400">
                      {u.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/dashboard/users/edit/${u.id}`}
                    className="bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600 text-black"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => removeUser(u.id)}
                    className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p className="text-gray-400">
            Belum ada user
          </p>
        )}
      </div>
    </div>
  );
}