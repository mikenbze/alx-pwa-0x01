// pages/movies/index.tsx
import React, { useState, useEffect, useCallback } from "react";
import Button from "@/components/commons/Button";
import MovieCard from "@/components/commons/MovieCard";
import Loading from "@/components/commons/Loading";
import type { MoviesProps } from "@/interfaces";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetch-movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page,
          year,
          genre: genre === "All" ? "" : genre,
        }),
      });
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      setMovies(data.movies);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44">
      <div className="py-16">
        <div className="flex flex-col md:flex-row justify-between mb-4 items-center">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="border-2 w-full md:w-96 border-[#E2D609] outline-none bg-transparent px-4 py-2 rounded-full text-white placeholder-gray-400"
          />
          <select
            onChange={(e) => setYear(Number(e.target.value))}
            className="border-2 border-[#E2D609] outline-none bg-transparent px-4 md:px-8 py-2 mt-4 md:mt-0 rounded-full w-full md:w-auto"
          >
            <option value="">Select Year</option>
            {[2024, 2023, 2022, 2021, 2020, 2019].map((y) => (
              <option value={y} key={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <h1 className="text-lg md:text-6xl font-bold">{year} {genre} Movie List</h1>
          <div className="flex flex-wrap space-x-0 md:space-x-4 mt-4 md:mt-0">
            {["All", "Animation", "Comedy", "Fantasy"].map((g) => (
              <Button key={g} title={g} action={() => setGenre(g)} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-10">
          {movies.map((movie, i) => (
            <MovieCard
              key={i}
              title={movie.titleText?.text || "Unknown"}
              posterImage={movie.primaryImage?.url}
              releaseYear={movie.releaseYear?.year}
            />
          ))}
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <Button title="Previous" action={() => setPage((p) => Math.max(1, p - 1))} />
          <Button title="Next" action={() => setPage((p) => p + 1)} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Movies;
