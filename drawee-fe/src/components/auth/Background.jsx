import Noise from "../ui/Noise";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFEBED]">
      {/* Pink */}
      <div
        className="
      absolute
      left-1/2
      top-1/2
      w-[750px]
      h-[750px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#F6B6B7]
      blur-[50px]
      opacity-90
    "
      />

      <div
        className="
      absolute
      left-[20%]
      top-[45%]
      w-[550px]
      h-[550px]
      rounded-full
      bg-[#3E828E]
      blur-[50px]
      opacity-70
    "
      />

      <div
        className="
      absolute
      left-[50%]
      top-[35%]
      w-[450px]
      h-[450px]
      rounded-full
      bg-[#A6C9B6]
      blur-[50px]
      opacity-60
    "
      />

      {/* Grain */}
      <Noise />

      {/* Nội dung */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
