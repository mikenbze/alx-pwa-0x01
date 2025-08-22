import { useState, useCallback } from "react";
import { MoviesProps } from "@/interfaces";

export function useMovies() {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async (year?: number, page = 1, genre?: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/fetch-movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ year, page, genre }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (!data.movies || !Array.isArray(data.movies)) {
        throw new Error("Invalid response format from server");
      }

      setMovies(data.movies);
    } catch (err: any) {
      console.error("Error fetching movies:", err);
      setError(err.message || "Something went wrong while fetching movies");
      setMovies([]); // ensure state is still valid
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, loading, error, fetchMovies };
}
