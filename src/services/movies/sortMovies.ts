import { IMovieResponse } from "./types";

interface ISortBy {
    movies: IMovieResponse[]
    key: 'title' | 'popularity' | 'vote_average' | 'id'
}

export const sortBy = ({ movies, key }: ISortBy) => {
    if (key === 'title') {
        return movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (key === 'popularity') {
        return movies.sort((a, b) => b.popularity - a.popularity);
    } else if (key === 'vote_average') {
        return movies.sort((a, b) => b.vote_average - a.vote_average);
    } else if (key === 'id') {
        return movies.sort((a, b) => a.id - b.id);
    } else {
        return movies;
    }
}

export default sortBy;
