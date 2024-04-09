import { IMAGE_SOURCE } from "../../constants/moviesMock"
import { IMovieCard } from "./types"

const MovieCard: React.FC<IMovieCard> = ({
  title,
  genreId,
  movieId,
  voteAverage,
  posterPath
}) => {

  const poster = IMAGE_SOURCE + posterPath;
  const styles = {
    backgroundImage: `url(${poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '200px',
    height: '500px',
  };

  const getGenre = (genreId: number): string => {
    return
  }

  return (
    <div style={styles}>
      <div>
        <div>
        </div>
        <div>
          <p>{title}</p>

        </div>
      </div>
    </div>
  )
}

export default MovieCard