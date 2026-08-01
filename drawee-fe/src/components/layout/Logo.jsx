import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt="logo"
        className="h-20 w-20 object-contain rounded-xl"
      />

      <div>
        <h1 className="font-['Pixelify_Sans'] text-3xl leading-none text-[#27153D]">
          Drawee
        </h1>

        <p className="text-xs tracking-widest text-[#3E828E]">PIXEL DRAWING</p>
      </div>
    </Link>
  );
};

export default Logo;
