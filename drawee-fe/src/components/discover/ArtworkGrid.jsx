import ArtworkCard from "./ArtworkCard";

const ArtworkGrid = ({ artworks, onSelect }) => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 pb-20 md:grid-cols-3 xl:grid-cols-4">
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          onClick={() => onSelect(index)}
        />
      ))}
    </section>
  );
};

export default ArtworkGrid;
