import axios from "axios";
import type { Movie } from "../types/movie";

const myToken = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  return response.data.results;
}