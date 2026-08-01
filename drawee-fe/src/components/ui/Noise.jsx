const Noise = () => {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default Noise;
