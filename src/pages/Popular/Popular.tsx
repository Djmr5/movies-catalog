import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services";
import { MovieCard } from "../../components";
import { IMovieResponse } from "../../services/movies/types";

const Popular: React.FC = () => {
  const [movies, setMovies] = useState<Array<IMovieResponse>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPopular = async () => {
    await getPopularMovies()
      .then(res => {
        if (res && res.results)
        setMovies(res.results);
      console.log(res.results);
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
        movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))
      }
    </>
  );
};

export default Popular;