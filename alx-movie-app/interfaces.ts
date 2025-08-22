// interfaces.ts

// Movie-related types
export interface MoviesProps {
  id?: string;
  titleText?: { text: string };
  releaseYear?: { year: string | number };
  primaryImage?: { url: string };
}

// Button props
export interface ButtonProps {
  title: string;
  action: () => void;
}
