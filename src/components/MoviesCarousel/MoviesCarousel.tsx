import { IMoviesCarousel } from "./types";
import './MoviesCarousel.css'
import { MovieCard } from "..";

const MoviesCarousel: React.FC<IMoviesCarousel> = ({ movies }) => {
  return (
    <div className="movies-carousel">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  )
}

export default MoviesCarousel;
