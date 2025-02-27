import React from "react";

interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition transform hover:scale-110 hover:opacity-80"
    >
      <img src={src} alt={alt} className="h-10" />
    </a>
  );
};

export default SocialIcon;
