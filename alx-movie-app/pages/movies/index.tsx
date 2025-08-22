// alx-movie-app/pages/movies/index.tsx
import React, { useCallback, useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import type { MoviesProps } from "@/interfaces";

const Movies: React.FC = () => {
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
        body: JSON.stringify({
          page,
          year,
          genre: genre === "All" ? "" : genre,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      if (!response.ok) throw new Error("Something went wrong");

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

  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44">
      {/* Filters */}
      <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="border-2 w-full md:w-96 border-[#E2D609] outline-none bg-transparent px-4 py-2 rounded-full text-white placeholder-gray-400"
        />
        <select
          onChange={(e) => setYear(Number(e.target.value))}
          className="border-2 border-[#E2D609] outline-none bg-transparent px-4 md:px-8 py-2 rounded-full w-full md:w-auto"
        >
          <option value="">Select Year</option>
          {[2024, 2023, 2022, 2021, 2020, 2019].map((yr) => (
            <option value={yr} key={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      {/* Genre buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        {["All", "Animation", "Comedy", "Fantasy"].map((g, idx) => (
          <Button key={idx} title={g} action={() => setGenre(g)} />
        ))}
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-10">
        {movies.map((movie, idx) => (
          <MovieCard
            key={idx}
            title={movie.titleText?.text || "Untitled"}
            posterImage={movie.primaryImage?.url}
            releaseYear={movie.releaseYear?.year}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-4 mt-6">
        <Button title="Previous" action={() => setPage((prev) => Math.max(prev - 1, 1))} />
        <Button title="Next" action={() => setPage((prev) => prev + 1)} />
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Movies;
