export interface IMovieCard {
    /**
     * The title of the movie.
     */
    title: string;
    /**
     * The genre id of the movie.
     */
    genreId: number;
    /**
     * The movie id.
     */
    movieId: number;
    /**
     * The vote average of the movie.
     */
    voteAverage: number;
    /**
     * The poster path url of the movie.
     */
    posterPath: string;
}
