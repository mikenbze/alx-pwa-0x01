// interfaces.ts

// Props for Button component
export interface ButtonProps {
  title: string;
  action: () => void;
}

// Movie-related interfaces
export interface MoviesProps {
  id: string; // Unique identifier
  titleText?: { text: string };
  primaryImage?: { url: string };
  releaseYear?: { year: number | string };
}

// Props for MovieCard component
export interface MovieCardProps {
  title: string;
  posterImage: string;
  releaseYear: number | string;
}

// Props for Loading component (if needed)
export interface LoadingProps {
  message?: string;
}
