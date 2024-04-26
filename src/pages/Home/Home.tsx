import { useEffect, useState } from "react";
import { MoviesCarousel, NavButton } from "../../components";
import './Home.css';
import { IMovieResponse } from "../../services/movies/types";
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies } from "../../services";
import { ROUTES } from "../../routes/constants";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<Array<IMovieResponse>>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Array<IMovieResponse>>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<IMovieResponse>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPopular = async () => {
    await getPopularMovies()
      .then(res => {
        if (res && res.results)
          setPopularMovies(res.results);
      }).catch(error => {
        setError(error);
      });
    await getTopRatedMovies()
      .then(res => {
        if (res && res.results)
          setTopRatedMovies(res.results);
      }).catch(error => {
        setError(error);
      });
    await getNowPlayingMovies()
      .then(res => {
        if (res && res.results)
          setNowPlayingMovies(res.results);
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
      {popularMovies.length > 0 && (
        <section id="popular-section">
          <div className="section-header">
            <h3 className="section-title">Popular</h3>
            <NavButton text={"View All"} color={"red"} link={ROUTES.POPULAR} />
          </div>
          <MoviesCarousel movies={popularMovies} />
        </section>
      )}
      {topRatedMovies.length > 0 && (
        <section id="top-rated-section">
          <div className="section-header">
            <h3 className="section-title">Top rated</h3>
            <NavButton text={"View All"} color={"red"} link={ROUTES.TOP_RATED} />
          </div>
          <MoviesCarousel movies={topRatedMovies} />
        </section>
      )}
      {nowPlayingMovies.length > 0 && (
        <section id="now-playing-section">
          <div className="section-header">
            <h3 className="section-title">Now playing</h3>
            <NavButton text={"View All"} color={"red"} link={ROUTES.NOW_PLAYING} />
          </div>
          <MoviesCarousel movies={nowPlayingMovies} />
        </section>
      )}
    </>
  );
};

export default Home;
