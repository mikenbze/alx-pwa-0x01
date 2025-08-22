// alx-movie-app/interfaces.ts

export interface ButtonProps {
  title: string;
  action: () => void;
}

export interface MoviesProps {
  id?: string;
  titleText?: {
    text: string;
  };
  primaryImage?: {
    url: string;
  };
  releaseYear?: {
    year: number;
  };
}

export interface MovieCardProps {
  title: string;
  posterImage: string;
  releaseYear: number | string;
}
