import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, Flame, Clock3 } from "lucide-react";

const sorts = [
  {
    name: "Trending",
    icon: <Flame size={18} />,
  },
  {
    name: "Newest",
    icon: <Clock3 size={18} />,
  },
];

const SortDropdown = ({ sort, setSort }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = sorts.find((item) => item.name === sort);

  return (
    <div ref={ref} className="relative w-full shrink-0 md:w-56">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-14
          w-full
          items-center
          justify-between
          rounded-full
          border
          border-white/50
          bg-white/50
          px-6
          backdrop-blur-xl
          transition
          hover:border-[#3E828E]
        "
      >
        <div className="flex items-center gap-3 text-[#27153D]">
          {current.icon}
          <span>{current.name}</span>
        </div>

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            left-0
            top-16
            z-50
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/50
            bg-white/80
            shadow-xl
            backdrop-blur-2xl
          "
        >
          {sorts.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setSort(item.name);
                setOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                justify-between
                px-5
                py-4
                text-left
                transition
                hover:bg-[#F6B6B7]/30
              "
            >
              <div className="flex items-center gap-3 text-[#27153D]">
                {item.icon}
                {item.name}
              </div>

              {sort === item.name && (
                <Check size={18} className="text-[#3E828E]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
