import httpInstance from "../httpInstance";
import { ITMDBResponse } from "../types";
import { IMovieResponse } from "./types";

const getRecomByMovieId = async (movieId: string) => {
    let res;
    const endpoint = `/${movieId}/recommendations?api_key=${import.meta.env.VITE_MOVIES_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint)
        .then(response => {
            res = response.data;
        })
        .catch(error => {
            throw new Error(error);
        });
    return res || {} as ITMDBResponse<IMovieResponse>;
}

export default getRecomByMovieId;
