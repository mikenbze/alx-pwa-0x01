// alx-movie-app/components/commons/MovieCard.tsx
import React from "react";
import type { MovieCardProps } from "@/interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden text-white">
      {posterImage && (
        <img src={posterImage} alt={title} className="w-full h-64 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {releaseYear && <p className="text-gray-400">{releaseYear}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
