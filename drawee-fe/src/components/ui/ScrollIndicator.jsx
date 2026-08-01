import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });

    setShow(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed
        bottom-8
        left-1/2
        -translate-x-1/2
        z-50
        transition-all
        duration-300
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }
      `}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/40 shadow-lg">
        <ArrowDown size={24} className="animate-bounce text-[#27153D]" />
      </div>
    </button>
  );
};

export default ScrollIndicator;
