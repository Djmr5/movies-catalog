import { useEffect, useState } from "react";
import { IMovieResponse, convertToMovieResponse } from "../../services/movies/types";
import { getMovieById, sortBy } from "../../services";
import { Button, MovieCard } from "../../components";

const MyFavorites: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Array<IMovieResponse>>([]);
  const localStorageFavorites = localStorage.getItem('favorites') || '';
  const [sortByType, setSortByType] = useState<string | null>(null);

  const getAllFavorites = async (storedFavs: string) => {
    if (storedFavs.length > 0) {
      const favoritesArray = JSON.parse(storedFavs);
      console.log(favoritesArray);
      favoritesArray.forEach(async (id: string) => {
        await getMovieById(id)
          .then(res => {
            if (res)
              setFavorites(prev => [...prev, convertToMovieResponse(res)]);
          })
          .catch(err => console.log(err));
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    getAllFavorites(localStorageFavorites);
  }, [localStorageFavorites]);

  const sortByKey = (key: "id" | "title" | "popularity" | "vote_average") => {
    if (sortByType === key) {
      setFavorites(sortBy({ movies: favorites, key: 'popularity' }));
      return setSortByType(null);
    }
    setFavorites(sortBy({ movies: favorites, key }));
    setSortByType(key === sortByType ? null : key);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {favorites && favorites.length ? (
        <>
          <div id="section-header" className="m-2 flex justify-between">
            <h2 className="m-6 text-3xl font-medium">FAVORITES</h2>
            <div className="m-6 flex space-x-5">
              <Button onClick={() => sortByKey("title")} isActive={sortByType === "title"}>
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
                onClick={() => sortByKey("vote_average")}
                isActive={sortByType === "vote_average"}
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
          <div className="flex flex-wrap justify-center">
            {favorites.map((movie: IMovieResponse) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <p className="py-40 px-5 text-4xl">Oops... it seems this is empty. Explore more movies and add them to your favorites!</p>
      )}
    </>
  );
};

export default MyFavorites;