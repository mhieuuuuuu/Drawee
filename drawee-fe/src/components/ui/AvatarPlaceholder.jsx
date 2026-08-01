const AvatarPlaceholder = ({ size = "md" }) => {
  const config = {
    sm: {
      wrapper: "h-10 w-10",
      pixel: "w-1",
      border: "border-2",
      gap: "gap-[1px]",
      padding: "p-1.5",
    },
    md: {
      wrapper: "h-14 w-14",
      pixel: "w-1.5",
      border: "border-[3px]",
      gap: "gap-[1px]",
      padding: "p-2",
    },
    lg: {
      wrapper: "h-20 w-20",
      pixel: "w-2",
      border: "border-4",
      gap: "gap-[2px]",
      padding: "p-2.5",
    },
  }[size];

  // Pixel face (10x10)
  const pattern = [
    "0000000000",
    "0003303300",
    "0033333330",
    "0033223330",
    "0003333300",
    "0000420000",
    "0002420000",
    "0000400000",
    "0000400000",
    "0000000000",
  ];

  const colors = {
    0: "bg-[#F4F4F4]", // canvas
    1: "bg-[#27153D]", // frame
    2: "bg-[#3E828E]", // teal
    3: "bg-[#F6B6B7]", // pink
    4: "bg-[#A6C9B6]", // mint
  };

  return (
    <div
      className={` ${config.wrapper} flex items-center justify-center overflow-hidden rounded-full ${config.border} border-[#3E828E] bg-gradient-to-br from-[#FFF9F5] via-[#FFEBED] to-[#F8FBFA]`}
    >
      <div
        className={`grid ${config.gap} rounded-md bg-white shadow-sm ${config.padding} `}
        style={{
          gridTemplateColumns: `repeat(${pattern[0].length}, auto)`,
        }}
      >
        {pattern.flatMap((row, rowIndex) =>
          row
            .split("")
            .map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`aspect-square ${config.pixel} rounded-[1px] ${colors[cell]} `}
              />
            )),
        )}
      </div>
    </div>
  );
};

export default AvatarPlaceholder;
