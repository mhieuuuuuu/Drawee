import Noise from "./Noise";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FFEBED]">
      {/* Fixed background layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[320px]
            h-[320px]
            sm:w-[450px]
            sm:h-[450px]
            lg:w-[750px]
            lg:h-[750px]
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
            w-[250px]
            h-[250px]
            sm:w-[350px]
            sm:h-[350px]
            lg:w-[550px]
            lg:h-[550px]
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
            w-[200px]
            h-[200px]
            sm:w-[280px]
            sm:h-[280px]
            lg:w-[450px]
            lg:h-[450px]
            rounded-full
            bg-[#A6C9B6]
            blur-[50px]
            opacity-60
          "
        />

        <Noise />
      </div>

      {/* Nội dung */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
