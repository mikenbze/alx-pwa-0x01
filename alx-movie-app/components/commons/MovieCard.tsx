// components/commons/MovieCard.tsx
import React from "react";
import type { MovieCardProps } from "@/interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="bg-[#222] p-4 rounded-lg flex flex-col items-center">
      {posterImage && <img src={posterImage} alt={title} className="w-full h-auto rounded-md" />}
      <h3 className="text-white mt-2 font-semibold">{title}</h3>
      {releaseYear && <p className="text-gray-400">{releaseYear}</p>}
    </div>
  );
};

export default MovieCard;
