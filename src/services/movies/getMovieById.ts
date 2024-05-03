import httpInstance from "../httpInstance";
import { IMovieDetailsResponse } from "./types";

const getMovieById = async (movieId: string) => {
    let res;
    const endpoint = `/${movieId}?api_key=${import.meta.env.VITE_MOVIES_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint)
        .then(response => {
            res = response.data;
        })
        .catch(error => {
            throw new Error(error);
        });
    return res || {} as IMovieDetailsResponse;
}

export default getMovieById;
