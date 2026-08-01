import { useState } from "react";
const ArtworkImage = ({ src, alt, className = "", fallback }) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return fallback;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className={className}
    />
  );
};

export default ArtworkImage;
