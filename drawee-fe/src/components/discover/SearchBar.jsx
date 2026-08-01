import { Search } from "lucide-react";
import SortDropdown from "./SortDropdown";

const SearchBar = ({ search, setSearch, sort, setSort }) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row">
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#3E828E]"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search artworks..."
          className="
            h-14
            w-full
            rounded-full
            border
            border-white/50
            bg-white/50
            pl-14
            pr-5
            text-[#27153D]
            backdrop-blur-xl
            outline-none
            transition
            focus:border-[#3E828E]
            focus:ring-2
            focus:ring-[#3E828E]/20
          "
        />
      </div>

      <SortDropdown sort={sort} setSort={setSort} />
    </div>
  );
};

export default SearchBar;
