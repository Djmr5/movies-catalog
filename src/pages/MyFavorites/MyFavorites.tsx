import { useEffect, useState } from "react";
import { IMovieResponse, convertToMovieResponse } from "../../services/movies/types";
import { getMovieById } from "../../services";
import { MovieCard } from "../../components";

const MyFavorites: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [favorites, setFavorites] = useState<Array<IMovieResponse>>([]);
    const localStorageFavorites = localStorage.getItem('favorites') || '';

    const getAllFavorites = async (storedFavs: string) => {
        if (storedFavs.length > 0) {
            const favoritesArray = JSON.parse(storedFavs);
            console.log(favoritesArray);
            favoritesArray.forEach(async (id: string) => {
                await getMovieById(id)
                    .then(res => {
                        if (res)
                            setFavorites(prev => [...prev, convertToMovieResponse(res)]);
                    });
            });
        }
        setLoading(false);
    }

    useEffect(() => {
        getAllFavorites(localStorageFavorites);
    }, [localStorageFavorites]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {favorites && favorites.length ? (
                <div className="flex flex-wrap justify-center">
                    {favorites.map((movie: IMovieResponse) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))}
                </div>
            ) : (
                <p>No favorites yet</p>
            )}
        </>
    );
};

export default MyFavorites;