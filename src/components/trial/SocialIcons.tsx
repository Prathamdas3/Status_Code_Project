import React from "react";
const SocialIcons: React.FC = () => {
  const icons = Array(4).fill(null);

  return (
    <div className="flex gap-4 self-start mt-12 max-md:mt-10">
      {icons.map((_, index) => (
        <div key={index} className="flex shrink-0 w-20 h-20 rounded-full bg-zinc-300" />
      ))}
    </div>
  );
};

export default SocialIcons;