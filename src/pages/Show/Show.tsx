import Config from "../../config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovieDetailsResponse, IMovieResponse } from "../../services/movies/types";
import { getMovieById, getRecomByMovieId } from "../../services";
import './Show.css'
import { Button, FavButton, MoviesCarousel, Pill } from "../../components";

const Show: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const [movieData, setMovieData] = useState<IMovieDetailsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<IMovieResponse[]>([]);

  const goBack = () => {
    console.log("Go back");
    navigate(-1);
  }

  const getMovieData = async (id: string | undefined) => {
    if (!id) return;
    await getMovieById(id)
      .then(res => {
        if (res)
          setMovieData(res);
      }).catch(error => {
        setError(error);
      });
    await getRecomByMovieId(id)
      .then(res => {
        if (res.results)
          setRecommendations(res.results);
      }).catch(error => {
        setError(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    getMovieData(id);
  }, [id]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>An error has ocurred...</p>}
      {movieData &&
        <>
          <div id="movie" className="flex flex-col sm:flex-row">
            <img id="poster"
              className="self-center"
              src={Config.IMAGE_SOURCE + movieData?.poster_path}
              alt={movieData.title}
            />
            <div className="p-8 flex flex-col space-y-8 w-fit">
              <div id="title-and-go-back" className="flex justify-between">
                <h1 className="text-4xl uppercase font-bold">{movieData.title}</h1>
                <Button onClick={goBack} isActive={false}>Regresar</Button>
              </div>
              <div id="movie-info" className="flex flex-wrap font-medium">
                <div id="adult-category" className="flex mx-2">
                  <svg className="w-7 px-1" aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor"
                      d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64
                  64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64
                  64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7
                  0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9
                  32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9
                  16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5
                  21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5
                  263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4
                  34.9-87.3 75.2-109.4z">
                    </path>
                  </svg>
                  18{movieData.adult ? "+" : "-"}
                </div>
                <div id="duration" className="flex mx-2">
                  <svg className="w-6 px-1" aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,
                  25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,
                  0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z">
                    </path>
                  </svg>
                  {movieData.runtime} min.
                </div>
                <div id="release-date" className="flex mx-2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-day"
                    className="w-6 px-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5
                      48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2
                      16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8
                      0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5
                      64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z">
                    </path>
                  </svg>
                  {movieData.release_date.split('-')[0]}
                </div>
                <div id="vote-average" className="flex mx-2">
                  <svg className="w-6 px-1" aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5
                  26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                  105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                    </path>
                  </svg>
                  {movieData.vote_average.toPrecision(2)}
                </div>
                <div id="vote-count" className="flex mx-2">
                  <svg className="w-6 px-1" aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="poll" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5
                    48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84
                    7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84
                    0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0
                    8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z">
                    </path>
                  </svg>
                  {movieData.vote_count}
                </div>
              </div>
              <div id="movie-description">
                <p>{movieData.overview}</p>
              </div>
              <div id="movie-more-info" className="flex flex-col show:flex-row justify-between space-y-4">
                <div id="movie-genres" className="flex flex-col space-y-4">
                  <h3 className="font-bold text-xl">Genres</h3>
                  <ul className="flex space-x-2">
                    {movieData.genres.map((genre, index) =>
                      <Pill key={index} text={genre.name} color={"green"} />
                    )}
                  </ul>
                </div>
                <div id="movie-favorite" className="flex flex-col space-y-3">
                  <h3 className="font-bold text-xl show:text-right">Favorite</h3>
                  <FavButton id={movieData.id} />
                </div>
              </div>
            </div>
          </div>
          <div id="recommendations" className="p-6 flex flex-col space-y-6">
            <h2 className="uppercase text-3xl font-medium">Recommendations</h2>
            {recommendations && <MoviesCarousel movies={recommendations} />}
          </div>
        </>
      }
    </>
  );
};

export default Show;
