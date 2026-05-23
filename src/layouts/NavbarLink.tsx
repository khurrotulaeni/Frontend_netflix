import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const NavbarLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
}) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }: { isActive: boolean }) =>
        [
          "flex items-center gap-2 transition",
          isActive
            ? "text-red-500 font-semibold"
            : "text-gray-400 hover:text-white",
        ].join(" ")
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};