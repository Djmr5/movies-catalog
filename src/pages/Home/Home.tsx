import { MovieCard, NavButton } from "../../components";
import { movies } from "../../constants/moviesMock"
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="popular-section">
        <div className="section-header">
          <h3 className="section-title">Popular</h3>
          <NavButton text={"View All"} color={"red"} link={"popular"} />
        </div>
        <div className="movie-list">
          <MovieCard
            movieId={movies[0].id}
            title={movies[0].title}
            genreId={movies[0].genre_ids[0]}
            voteAverage={movies[0].vote_average}
            posterPath={movies[0].poster_path}
          />
          <MovieCard
            movieId={movies[1].id}
            title={movies[1].title}
            genreId={movies[1].genre_ids[1]}
            voteAverage={movies[1].vote_average}
            posterPath={movies[1].poster_path}
          />
          <MovieCard
            movieId={movies[2].id}
            title={movies[2].title}
            genreId={movies[2].genre_ids[2]}
            voteAverage={movies[2].vote_average}
            posterPath={movies[2].poster_path}
          />
          <MovieCard
            movieId={movies[3].id}
            title={movies[3].title}
            genreId={movies[3].genre_ids[3]}
            voteAverage={movies[3].vote_average}
            posterPath={movies[3].poster_path}
          />
          <MovieCard
            movieId={movies[4].id}
            title={movies[4].title}
            genreId={movies[4].genre_ids[4]}
            voteAverage={movies[4].vote_average}
            posterPath={movies[4].poster_path}
          />
          <MovieCard
            movieId={movies[5].id}
            title={movies[5].title}
            genreId={movies[5].genre_ids[5]}
            voteAverage={movies[5].vote_average}
            posterPath={movies[5].poster_path}
          />
          <MovieCard
            movieId={movies[6].id}
            title={movies[6].title}
            genreId={movies[6].genre_ids[6]}
            voteAverage={movies[6].vote_average}
            posterPath={movies[6].poster_path}
          />
        </div>
      </section>
      <MovieCard
        movieId={movies[0].id}
        title={movies[0].title}
        genreId={movies[0].genre_ids[0]}
        voteAverage={movies[0].vote_average}
        posterPath={movies[0].poster_path}
      />
    </>
  );
};

export default Home;
