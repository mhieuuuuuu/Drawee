import Noise from "../ui/Noise";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFEBED]">
      {/* Pink */}
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6B6B7] opacity-90 blur-[50px]" />

      <div className="absolute left-[20%] top-[45%] h-[550px] w-[550px] rounded-full bg-[#3E828E] opacity-70 blur-[50px]" />

      <div className="absolute left-[50%] top-[35%] h-[450px] w-[450px] rounded-full bg-[#A6C9B6] opacity-60 blur-[50px]" />

      {/* Grain */}
      <Noise />

      {/* Nội dung */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
