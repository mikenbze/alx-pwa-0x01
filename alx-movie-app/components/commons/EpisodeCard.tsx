import React from "react";
import type { EpisodeProps } from "@/interfaces";

const EpisodeCard: React.FC<EpisodeProps> = ({ name, air_date, episode }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold">{name}</h3>
      <p>{episode}</p>
      <p className="text-gray-500">{air_date}</p>
    </div>
  );
};

export default EpisodeCard;
