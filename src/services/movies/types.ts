export interface IMovieResponse {
    adult:             boolean;
    backdrop_path:     string | null;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface IMovieDetailsResponse {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                IGenre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    origin_country:        string[];
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  IProductionCompany[];
    production_countries:  IProductionCountry[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      ISpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface IGenre {
    id:   number;
    name: string;
}

export interface IProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface IProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface ISpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

export const convertToMovieResponse = (movieDetails: IMovieDetailsResponse): IMovieResponse => {
    return {
        adult: movieDetails.adult,
        backdrop_path: movieDetails.backdrop_path,
        genre_ids: movieDetails.genres.map(genre => genre.id),
        id: movieDetails.id,
        original_language: movieDetails.original_language,
        original_title: movieDetails.original_title,
        overview: movieDetails.overview,
        popularity: movieDetails.popularity,
        poster_path: movieDetails.poster_path,
        release_date: movieDetails.release_date,
        title: movieDetails.title,
        video: movieDetails.video,
        vote_average: movieDetails.vote_average,
        vote_count: movieDetails.vote_count
    };
}
