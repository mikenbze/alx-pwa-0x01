import React from "react";
import { MovieCardProps } from "@/interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-200">
      {posterImage ? (
        <img src={posterImage} alt={title} className="w-full h-64 object-cover" />
      ) : (
        <div className="w-full h-64 bg-gray-600 flex items-center justify-center">
          <span className="text-gray-300">No Image</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-400">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
