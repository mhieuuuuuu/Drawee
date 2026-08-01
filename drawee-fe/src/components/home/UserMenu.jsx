import { User } from "lucide-react";
import { useContext } from "react";
import { AppContent } from "../../context/AppContext";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const { isLoggedin } = useContext(AppContent);

  if (isLoggedin) {
    return (
      <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#27153D] text-white transition hover:scale-105">
        <User size={20} />
      </button>
    );
  }

  return (
    <Link
      to="/login"
      className="rounded-full bg-[#27153D] px-6 py-2 text-white transition hover:bg-[#3E828E]"
    >
      Login
    </Link>
  );
};

export default UserMenu;
