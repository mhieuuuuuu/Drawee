import { useState } from "react";
import AvatarPlaceholder from "./AvatarPlaceholder";

const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <AvatarPlaceholder size={size} />;
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

export default Avatar;
