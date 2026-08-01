import {
  X,
  Heart,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ArtworkImage from "../ui/ArtworkImage";
import ArtworkPlaceholder from "../ui/ArtworkPlaceholder";
import Avatar from "../ui/Avatar";

const ArtworkModal = ({
  artworks,
  selectedIndex,
  setSelectedIndex,
  onClose,
}) => {
  if (selectedIndex === null) return null;

  const artwork = artworks[selectedIndex];

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
        p-4
      "
    >
      {/* Close when click outside */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            max-h-[90vh]
            w-full
            max-w-6xl
            overflow-hidden
            rounded-3xl
            bg-[#FFF9F5]
            "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-20
            rounded-full
            bg-white
            p-2
            shadow
            hover:bg-[#F6B6B7]
          "
        >
          <X />
        </button>

        {/* LEFT */}
        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            bg-[#27153D]
            p-4
            lg:flex-1
            "
        >
          <ArtworkImage
            src={artwork.image}
            alt={artwork.title}
            className="
    max-h-[75vh]
    max-w-full
    rounded-2xl
    object-contain
  "
            fallback={
              <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
                <div className="aspect-square w-[70%] max-w-[420px] min-w-[220px]">
                  <ArtworkPlaceholder variant="modal" />
                </div>
              </div>
            }
          />

          {/* Prev */}
          <button
            onClick={() =>
              setSelectedIndex((i) => (i === 0 ? artworks.length - 1 : i - 1))
            }
            className="
              absolute
              left-4
              rounded-full
              bg-white/20
              p-3
              text-white
              backdrop-blur
              hover:bg-white/30
            "
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={() =>
              setSelectedIndex((i) => (i === artworks.length - 1 ? 0 : i + 1))
            }
            className="
              absolute
              right-4
              rounded-full
              bg-white/20
              p-3
              text-white
              backdrop-blur
              hover:bg-white/30
            "
          >
            <ChevronRight />
          </button>
        </div>

        {/* RIGHT */}
        <div
          className="
            w-full
            lg:w-[360px]
            overflow-y-auto
            bg-white
            p-6
            "
        >
          {/* Artist */}

          <div className="flex items-center gap-3">
            <Avatar
              src={artwork.avatar}
              alt={artwork.artist}
              size="md"
              className="
                    h-14
                    w-14
                    rounded-full
                    border-2
                    border-[#3E828E]
                    object-cover
                "
            />

            <div>
              <h3 className="font-semibold text-[#27153D]">{artwork.artist}</h3>

              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>

          {/* Title */}

          <h1
            className="
              mt-8
              text-3xl
              font-bold
              text-[#27153D]
            "
          >
            {artwork.title}
          </h1>

          {/* Description */}

          <p className="mt-5 leading-8 text-gray-600">{artwork.description}</p>

          {/* Stats */}

          <div className="mt-8 flex gap-6">
            <div className="flex items-center gap-2">
              <Eye size={20} />

              {artwork.views}
            </div>

            <div className="flex items-center gap-2">
              <Heart size={20} />

              {artwork.likes}
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex gap-4">
            <button
              className="
                flex-1
                rounded-xl
                bg-[#27153D]
                py-3
                text-white
                transition
                hover:bg-[#3E828E]
              "
            >
              <Heart className="mr-2 inline" size={18} />
              Like
            </button>

            <button
              className="
                flex-1
                rounded-xl
                border-2
                border-[#27153D]
                py-3
                text-[#27153D]
                transition
                hover:bg-[#27153D]
                hover:text-white
              "
            >
              <Download className="mr-2 inline" size={18} />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
