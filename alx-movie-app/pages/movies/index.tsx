// pages/movies/index.tsx
import React, { useCallback, useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";

const MoviesPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetch-movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          page,
          year,
          genre: genre === "All" ? "" : genre,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch movies");

      const data = await response.json();
      setMovies(data.movies || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const years = [2024, 2023, 2022, 2021, 2020, 2019];
  const genres = ["All", "Animation", "Comedy", "Fantasy"];

  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44">
      {/* Header */}
      <div className="py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="border-2 w-full md:w-96 border-[#E2D609] outline-none bg-transparent px-4 py-2 rounded-full text-white placeholder-gray-400"
          />

          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setYear(Number(e.target.value))
            }
            className="border-2 border-[#E2D609] outline-none bg-transparent px-4 md:px-8 py-2 rounded-full w-full md:w-auto"
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option value={y} key={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-lg md:text-4xl font-bold">
            {year ? `${year}` : ""} {genre} Movie List
          </h1>

          <div className="flex flex-wrap mt-4 md:mt-0 space-x-0 md:space-x-4">
            {genres.map((g, idx) => (
              <Button title={g} key={idx} action={() => setGenre(g)} />
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-10">
          {movies.map((movie, idx) => (
            <MovieCard
              key={idx}
              title={movie?.titleText?.text || "Unknown Title"}
              posterImage={movie?.primaryImage?.url || ""}
              releaseYear={movie?.releaseYear?.year || "Unknown"}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-6 space-x-4">
          <Button
            title="Previous"
            action={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
          />
          <Button title="Next" action={() => setPage((prev) => prev + 1)} />
        </div>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default MoviesPage;
