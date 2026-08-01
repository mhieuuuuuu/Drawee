import { Heart, Eye } from "lucide-react";
import ArtworkImage from "../ui/ArtworkImage";
import Avatar from "../ui/Avatar";
import ArtworkPlaceholder from "../ui/ArtworkPlaceholder";

const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/40 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <ArtworkImage
          src={artwork.image}
          alt={artwork.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          fallback={<ArtworkPlaceholder variant="compact" />}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#27153D]/95 via-[#27153D]/55 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        {/* Stats */}
        <div className="mb-4 flex gap-5 text-white">
          <div className="flex items-center gap-1">
            <Eye size={18} />
            <span>{artwork.views}</span>
          </div>

          <div className="flex items-center gap-1">
            <Heart size={18} />
            <span>{artwork.likes}</span>
          </div>
        </div>

        {/* Artist */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              src={artwork.avatar}
              alt={artwork.artist}
              size="sm"
              className="h-11 w-11 rounded-full border-2 border-[#3E828E] object-cover"
            />

            <div>
              <h3 className="font-semibold text-white">{artwork.title}</h3>

              <p className="text-sm text-white/80">by {artwork.artist}</p>
            </div>
          </div>

          <button
            onClick={(e) => e.stopPropagation()}
            className="rounded-full bg-white/20 p-2 backdrop-blur transition hover:bg-[#F6B6B7] hover:text-[#27153D]"
          >
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
