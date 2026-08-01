import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full bg-white/60 px-4 py-2 text-sm text-[#3E828E] backdrop-blur">
        Pixel Art • Creativity • Community
      </p>

      <h1 className="font-['Pixelify_Sans'] text-[64px] leading-none sm:text-[80px] lg:text-[120px]">
        Draw.
        <br />
        Create.
        <br />
        Share.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-[#27153D]/70">
        Create pixel masterpieces with friends and share them with the world.
      </p>

      <Link
        to="/discover"
        className="mt-10 flex items-center gap-2 rounded-full bg-[#27153D] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3E828E]"
      >
        Discover Artworks!
        <ArrowRight size={20} />
      </Link>

      {/* <button
        onClick={() =>
          document
            .getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 group"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/40 transition group-hover:scale-110">
          <ArrowDown size={24} className="animate-bounce text-[#27153D]" />
        </div>
      </button> */}
    </section>
  );
};

export default Hero;
