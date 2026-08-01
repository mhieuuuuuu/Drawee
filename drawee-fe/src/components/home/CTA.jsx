import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div
        className="
          rounded-[40px]
          bg-[#27153D]
          px-8
          py-16
          text-center
          shadow-xl
        "
      >
        <h2 className="font-['Pixelify_Sans'] text-4xl text-white md:text-5xl">
          Ready to Create?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Turn your imagination into pixel masterpieces and start drawing today.
        </p>

        <Link
          to="/projects"
          className="
            mx-auto
            mt-10
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#3E828E]
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:-translate-y-1
          "
        >
          Let's Draw!
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
