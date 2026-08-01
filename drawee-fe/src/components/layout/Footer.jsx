import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#27153D]/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="font-['Pixelify_Sans'] text-3xl text-[#27153D]">
            Drawee
          </h2>

          <p className="mt-2 text-[#27153D]/60">Draw • Create • Share</p>
        </div>

        <nav className="flex gap-8 text-[#27153D]/70">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/discover">Discover</NavLink>

          <NavLink to="/projects">Projects</NavLink>
        </nav>

        <p className="text-sm text-[#27153D]/50">© 2026 Drawee</p>
      </div>
    </footer>
  );
};

export default Footer;
