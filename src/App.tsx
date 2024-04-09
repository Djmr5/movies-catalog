import { MovieCard } from "./components"
import { movies } from "./constants/moviesMock"

function App() {

  return (
    <>
      <MovieCard
        movieId={movies[0].id}
        title={movies[0].title}
        genreId={movies[0].genre_ids[0]}
        voteAverage={movies[0].vote_average}
        posterPath={movies[0].poster_path}
      />
    </>
  )
}

export default App
