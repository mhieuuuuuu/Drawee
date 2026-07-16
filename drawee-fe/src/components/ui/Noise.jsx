const Noise = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none">
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
