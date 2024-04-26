import httpInstance from "../httpInstance";
import { ITMDBResponse } from "../types";
import { IMovieResponse } from "./types";

const getNowPlayingMovies = async () => {
    let res;
    const endpoint = `/now_playing?api_key=${import.meta.env.VITE_MOVIES_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint)
        .then(response => {
            res = response.data;
        })
        .catch(error => {
            throw new Error(error);
        });
    return res || {} as ITMDBResponse<IMovieResponse>;
}

export default getNowPlayingMovies;
