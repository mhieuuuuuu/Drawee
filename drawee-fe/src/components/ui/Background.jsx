import Noise from "./Noise";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FFEBED]">
      {/* Fixed background layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6B6B7] opacity-90 blur-[50px] sm:h-[450px] sm:w-[450px] lg:h-[750px] lg:w-[750px]" />

        <div className="absolute left-[20%] top-[45%] h-[250px] w-[250px] rounded-full bg-[#3E828E] opacity-70 blur-[50px] sm:h-[350px] sm:w-[350px] lg:h-[550px] lg:w-[550px]" />

        <div className="absolute left-[50%] top-[35%] h-[200px] w-[200px] rounded-full bg-[#A6C9B6] opacity-60 blur-[50px] sm:h-[280px] sm:w-[280px] lg:h-[450px] lg:w-[450px]" />

        <Noise />
      </div>

      {/* Nội dung */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
