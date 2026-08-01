import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { AppContent } from "../../context/AppContext";

const links = [
  { name: "Home", path: "/" },
  { name: "Discover", path: "/discover" },
  { name: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedin } = useContext(AppContent);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/20 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#27153D]"
                    : "text-[#3E828E] hover:text-[#27153D]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop User */}
        <div className="hidden md:block">
          {isLoggedin ? (
            <NavLink
              to="/profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#27153D] text-white transition hover:bg-[#3E828E]"
            >
              <User size={20} />
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="rounded-full bg-[#27153D] px-4 py-2 text-white transition hover:bg-[#3E828E] sm:px-6"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[#27153D] md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <MobileMenu
        open={isOpen}
        setOpen={setIsOpen}
        links={links}
        isLoggedin={isLoggedin}
      />
    </header>
  );
};

export default Navbar;
