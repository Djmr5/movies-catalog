import { useEffect, useState } from "react";
import { MoviesCarousel, NavButton } from "../../components";
import './Home.css';
import { IMovieResponse } from "../../services/movies/types";
import { getPopularMovies } from "../../services";

const Home = () => {
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
      {movies.length > 0 && (
        <section id="popular-section">
          <div className="section-header">
            <h3 className="section-title">Popular</h3>
            <NavButton text={"View All"} color={"red"} link={"popular"} />
          </div>
          <MoviesCarousel movies={movies} />
        </section>
      )}
    </>
  );
};

export default Home;
