import React from "react";
import { Home, Notebook, UserCircle, LandPlot, Clapperboard, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const menuItems = [
    { label: "Discover", href: "/", icon: <Home size={18} /> },
    { label: "Arena", href: "/arena", icon: <LandPlot size={18} /> },
    { label: "Academy", href: "/academy", icon: <Notebook size={18} /> },
    { label: "Studio", href: "/studio", icon: <Clapperboard size={18} /> },
    { label: "Spotlight", href: "/spotlight", icon: <Sparkles size={18} /> },
  ];

  const activeStyle = "text-red-500";
  const defaultStyle = "text-gray-300 hover:text-red-500";

  return (
    <header className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md text-white px-6 py-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          className="w-64"
        />

        <div className="flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                  isActive ? activeStyle : defaultStyle
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                isActive ? activeStyle : defaultStyle
              }`
            }
          >
            <UserCircle size={18} />
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default Header;