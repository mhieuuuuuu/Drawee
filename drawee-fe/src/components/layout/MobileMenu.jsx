import { NavLink } from "react-router-dom";
import { User } from "lucide-react";

const MobileMenu = ({ open, setOpen, links, isLoggedin }) => {
  if (!open) return null;

  return (
    <div
      className="
      absolute
      top-full
      right-6
      mt-3
      w-56
      rounded-2xl
      border
      border-white/40
      bg-white/80
      backdrop-blur-xl
      shadow-2xl
      overflow-hidden
      md:hidden
    "
    >
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `block px-6 py-4 transition ${
              isActive
                ? "bg-[#F6B6B7]/40 text-[#27153D]"
                : "text-[#27153D] hover:bg-[#F6B6B7]/20"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}

      <div className="border-t border-gray-200" />

      {isLoggedin ? (
        <NavLink
          to="/profile"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-6 py-4 text-[#27153D] hover:bg-[#F6B6B7]/20"
        >
          <User size={18} />
          Profile
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          onClick={() => setOpen(false)}
          className="block px-6 py-4 text-[#27153D] hover:bg-[#F6B6B7]/20"
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default MobileMenu;
