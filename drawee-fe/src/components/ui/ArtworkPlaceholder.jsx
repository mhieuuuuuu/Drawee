const ArtworkPlaceholder = ({ variant = "default" }) => {
  const isCompact = variant === "compact";
  const isModal = variant === "modal";

  const pattern = [
    "0000000000",
    "0010003000",
    "0002200000",
    "0002220000",
    "0000200000",
    "0000004400",
    "0030004000",
    "0000000000",
    "0001000000",
    "0000000000",
  ];

  const colors = {
    0: "bg-[#F4F4F4]",
    1: "bg-[#27153D]",
    2: "bg-[#F6B6B7]",
    3: "bg-[#3E828E]",
    4: "bg-[#A6C9B6]",
  };

  const pixelSize = isCompact ? "w-2" : isModal ? "w-2.5 md:w-3" : "w-3 md:w-4";

  return (
    <div
      className={`
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/60
        bg-gradient-to-br
        from-[#FFF9F5]
        via-[#FFEBED]
        to-[#F8FBFA]
        ${isCompact ? "p-4" : isModal ? "p-5" : "p-8"}
      `}
    >
      {/* Pixel Artwork */}

      <div
        className={`
          grid
          rounded-lg
          border-4
          border-[#27153D]
          bg-white
          shadow-lg
          ${
            isCompact
              ? "gap-[2px] p-2"
              : isModal
                ? "gap-[2px] p-2.5"
                : "gap-[3px] p-3"
          }
        `}
        style={{
          gridTemplateColumns: `repeat(${pattern[0].length}, auto)`,
        }}
      >
        {pattern.flatMap((row, rowIndex) =>
          row.split("").map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                aspect-square
                rounded-[2px]
                ${pixelSize}
                ${colors[cell]}
              `}
            />
          )),
        )}
      </div>

      {!isCompact && (
        <h3
          className={`
            mt-5
            font-['Pixelify_Sans']
            text-[#27153D]
            ${isModal ? "text-xl md:text-2xl" : "text-3xl"}
          `}
        >
          Artwork unavailable
        </h3>
      )}
    </div>
  );
};

export default ArtworkPlaceholder;
