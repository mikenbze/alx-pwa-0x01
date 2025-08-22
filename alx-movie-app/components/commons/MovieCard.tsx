// components/commons/MovieCard.tsx
import React from "react";
import { MovieCardProps } from "@/interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      {posterImage && (
        <img
          src={posterImage}
          alt={title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-400">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
