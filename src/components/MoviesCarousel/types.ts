import { IMovieCard } from "../MovieCard/types";

export interface IMoviesCarousel {
    /**
     * The list of movies to display in the carousel.
     */
    movies: IMovieCard[];
}
