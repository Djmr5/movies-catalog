import { IMAGE_SOURCE } from "../../constants/moviesMock"
import { IMovieCard } from "./types"
import './MovieCard.css'
import genres from "../../constants/genres.json"
import { Pill } from ".."

/**
 * A default moviecard poster that displays the movie title, genre, vote average, and poster path.
 * @param title The title of the movie.
 * @param genreId The genre id of the movie.
 * @param movieId The movie id.
 * @param voteAverage The vote average of the movie.
 * @param posterPath The poster path url of the movie.
 * 
 * @example
 * <MovieCard title="John Wick: Chapter 4" genreId={28} movieId={603692} voteAverage={8.1} posterPath="https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" />
 */
const MovieCard: React.FC<IMovieCard> = ({
  title,
  genreId,
  movieId,
  voteAverage,
  posterPath
}) => {

  const poster = IMAGE_SOURCE + posterPath;

  const getGenre = (genreId: number): string => {
    return genres.genres.find((genre: { id: number }) => genre.id === genreId)?.name || '';
  }


  return (
    <div className="movie-card" key={movieId}>
      
      <div className="movie-card__img">
        <img src={poster} alt={title} />
      </div>
      
      <div className="info-show">

        <div className="movie-card__details">

          <Pill text={getGenre(genreId)} color="red" />

          <p className="movie-title">{title}</p>

          <p className="movie-vote">
            <svg className="w-4 h-4 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {voteAverage} / 10
          </p>

        </div>
      </div>
    </div>
  )
}

export default MovieCard;
