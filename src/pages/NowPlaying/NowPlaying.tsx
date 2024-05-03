import { useEffect, useState } from "react";
import { IMovieResponse } from "../../services/movies/types";
import { getNowPlayingMovies } from "../../services";
import { MovieCard } from "../../components";

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<Array<IMovieResponse>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPopular = async () => {
    await getNowPlayingMovies()
      .then(res => {
        if (res && res.results)
          setMovies(res.results);
      }).catch(error => {
        setError(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>An error has ocurred...</p>}
      {movies.length > 0 &&
        <ul className="flex flex-wrap w-full">
          {movies.map((movie, index) => (
            <li key={index} className="flex-grow">
              <MovieCard {...movie} />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default NowPlaying;