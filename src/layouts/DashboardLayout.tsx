import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react"; 
import { Home, Folder, Film, Calendar, Search, Bell, User, } from "lucide-react";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const [openUser, setOpenUser] = useState(false); 

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Category", path: "/dashboard/category", icon: Folder },
    { name: "Film Netflix", path: "/dashboard/filmnetflix", icon: Film },
    { name: "Event", path: "/dashboard/event", icon: Calendar },
    { name: "Pembicara", path: "/dashboard/pembicara", icon: User },
    { name: "Biodata", path: "/dashboard/biodata", icon: User },
  ];

  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes("/category/create")) {
      return "Create Category";
    }
    if (location.pathname.includes("/category")) {
      return "Category";
    }
    if (location.pathname.includes("/filmnetflix")) {
      return "Film Netflix";
    }
    if (location.pathname.includes("/event")) {
      return "Event";
    }
    if (location.pathname.includes("/pembicara")) {
      return "Pembicara";
    }
    return "Dashboard";
  };

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      
      <div className="w-52 bg-zinc-900 h-screen fixed left-0 top-0 flex flex-col p-6">
        
        <h1 className="text-4xl font-bold text-red-600 mb-16">
          NETFLIX
        </h1>

        <ul className="flex flex-col gap-2">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition
                    ${
                      isActive
                        ? "bg-zinc-800 text-red-500"
                        : "hover:bg-zinc-800 hover:text-red-500"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button
          onClick={handleLogout}
          className="mt-auto w-full py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <div className="ml-52 flex-1 p-6 bg-zinc-950">
        <div className="sticky top-0 z-50 bg-zinc-950 py-2 flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            {getTitle()}
          </h1>

          <div className="flex items-center gap-4">

            <div className="bg-zinc-800 p-2 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-110 transition">
              <Search size={18} />
            </div>

            <div className="bg-zinc-800 p-2 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-110 transition">
              <Bell size={18} />
            </div>

            <div className="relative">

              <div
                onClick={() => setOpenUser(!openUser)}
                className="bg-zinc-800 p-2 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-110 transition"
              >
                <User size={18} />
              </div>

              {openUser && (
                <div className="absolute right-0 mt-2 w-40 bg-zinc-900 rounded-lg shadow-lg p-2">

                  <button className="w-full text-left px-3 py-2 hover:bg-zinc-800 rounded">
                    Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 hover:bg-zinc-800 rounded text-red-500"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow">
          <Outlet />
        </div>

      </div>
    </div>
  );
}