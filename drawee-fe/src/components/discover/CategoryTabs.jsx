const categories = ["All", "Fantasy", "Nature", "Anime", "Game"];

const CategoryTabs = ({ category, setCategory }) => {
  return (
    <div
      className="
        mx-auto
        flex
        w-full
        max-w-7xl
        gap-3
        overflow-x-auto
        overflow-y-hidden
        px-4
        pb-6
        overscroll-x-contain
      "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`
            whitespace-nowrap
            rounded-full
            px-5
            py-2
            transition
            ${
              category === item
                ? "bg-[#27153D] text-white shadow-lg"
                : "bg-white/40 text-[#27153D] backdrop-blur hover:bg-[#F6B6B7]"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
