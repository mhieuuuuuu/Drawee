import { useMemo, useState } from "react";

import SearchBar from "../components/discover/SearchBar";
import CategoryTabs from "../components/discover/CategoryTabs";
import ArtworkModal from "../components/discover/ArtworkModal";

import { artworks } from "../data/mockArtworks";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Background from "../components/ui/Background";
import ArtworkGrid from "../components/discover/ArtworkGrid";

const Discover = () => {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("Trending");
  const [category, setCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredArtworks = useMemo(() => {
    let result = artworks.filter((artwork) => {
      const matchSearch =
        artwork.title.toLowerCase().includes(search.toLowerCase()) ||
        artwork.artist.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" || artwork.category === category;

      return matchSearch && matchCategory;
    });

    if (sort === "Trending") {
      result = [...result].sort((a, b) => b.likes - a.likes);
    }

    if (sort === "Newest") {
      result = [...result].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    }

    return result;
  }, [search, category, sort]);

  return (
    <>
      <Background>
        <Navbar />
        <main className="pt-[90px]">
          <section className="mx-auto max-w-7xl px-6 pt-12">
            <h1 className="font-['Pixelify_Sans'] text-center text-5xl text-[#27153D] md:text-6xl">
              Discover
            </h1>

            <p className="mt-4 text-center text-[#27153D]/70">
              Explore pixel artworks from creators around the world.
            </p>
          </section>
          <SearchBar
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
          />
          <CategoryTabs category={category} setCategory={setCategory} />
          <ArtworkGrid
            artworks={filteredArtworks}
            onSelect={setSelectedIndex}
          />
        </main>

        <ArtworkModal
          artworks={filteredArtworks}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
        <Footer />
      </Background>
    </>
  );
};

export default Discover;
