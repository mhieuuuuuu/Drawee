import FeatureCard from "./FeatureCard";
import { Palette, FolderOpen, Compass } from "lucide-react";

const features = [
  {
    icon: <Palette size={34} className="text-[#F6B6B7]" strokeWidth={2.2} />,
    title: "Pixel Drawing",
    description:
      "Create beautiful pixel art with a simple yet powerful editor designed for artists of every skill level.",
  },
  {
    icon: <FolderOpen size={34} className="text-[#3E828E]" strokeWidth={2.2} />,
    title: "Projects",
    description:
      "Save, organize and revisit all your artworks in one place whenever inspiration strikes.",
  },
  {
    icon: <Compass size={34} className="text-[#A6C9B6]" strokeWidth={2.2} />,
    title: "Discover",
    description:
      "Browse community creations, discover new styles and get inspired by talented pixel artists.",
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-['Pixelify_Sans'] text-4xl text-[#27153D] md:text-5xl">
          Why Drawee?
        </h2>

        <p className="mt-5 text-base leading-7 text-[#27153D]/70 md:text-lg">
          Everything you need to create, manage and share pixel art in one
          beautiful workspace.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
