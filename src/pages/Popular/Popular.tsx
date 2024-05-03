import { useEffect, useState } from "react";
import { getPopularMovies, sortBy } from "../../services";
import { MovieCard, Button } from "../../components";
import { IMovieResponse } from "../../services/movies/types";

const Popular: React.FC = () => {
  const [movies, setMovies] = useState<Array<IMovieResponse>>([]);
  const [isSortedByName, setSelectedSortByName] = useState<boolean>(false);
  const [isSortedByRating, setSelectedSortByRating] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const sortByTitle = () => {
    if (isSortedByName) {
      setSelectedSortByName(false);
      setMovies(sortBy({ movies, key: 'popularity' }));
      return;
    }
    else if (isSortedByRating) {
      setSelectedSortByRating(false);
      setSelectedSortByName(true);
    }
    setSelectedSortByName(true);
    setMovies(sortBy({ movies, key: 'title' }));
  }

  const sortByVoteAverage = () => {
    if (isSortedByRating) {
      setSelectedSortByRating(false);
      setMovies(sortBy({ movies, key: 'popularity' }));
      return;
    }
    else if (isSortedByName) {
      setSelectedSortByName(false);
      setSelectedSortByRating(true);
    }
    setSelectedSortByRating(true);
    setMovies(sortBy({ movies, key: 'vote_average' }));
  }

  const getPopular = async () => {
    await getPopularMovies()
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
        <>
          <div id="section-header" className="m-2 flex justify-between">
            <h2 className="m-6 text-3xl font-medium">POPULAR</h2>
            <div className="m-6 flex space-x-5">
              <Button
                onClick={sortByTitle}
                isActive={isSortedByName}
              >
                <svg className="h-5" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="sort-alpha-down" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19
                  0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26
                  190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16
                  16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16
                  16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432
                  321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72
                  32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16
                  16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16
                  16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z">
                  </path>
                </svg>
                Sort by Name
              </Button>
              <Button
                onClick={sortByVoteAverage}
                isActive={isSortedByRating}
              >
                <svg className="h-5" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="sort-numeric-down-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36
                  17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm224
                  64h-16V304a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304
                  352h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0
                  0-16-16zM330.17 34.91a79 79 0 0 0-55 54.17c-14.27 51.05 21.19 97.77 68.83 102.53a84.07
                  84.07 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9
                  9.91 58-24.77 86.25-61.61 86.25-132V112c-.02-51.21-48.4-91.34-101.85-77.09zM352 132a20 20
                  0 1 1 20-20 20 20 0 0 1-20 20z">
                  </path>
                </svg>
                Sort by Rating
              </Button>
            </div>
          </div>
          <ul className="flex flex-wrap w-full">
            {movies.map((movie) =>
              <li key={movie.id} className="flex-grow">
                <MovieCard {...movie} />
              </li>
            )}
          </ul>
        </>
      }
    </>
  );
};

export default Popular;