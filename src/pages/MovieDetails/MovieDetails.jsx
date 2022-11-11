import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiChevronsLeft } from 'react-icons/bi';
import { thmdAPI } from 'Services/tmdbAPI';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const { poster_path, title, overview, popularity, genres } = movieDetails;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await thmdAPI.get(`/movie/${movieId}`);

        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {movieDetails.length !== 0 && (
        <div>
          <Link to="/">
            <button type="button">
              <BiChevronsLeft />
              Go back
            </button>
          </Link>
          <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt="" />
          <h2>{title}</h2>
          <p>User Score: {Math.round(popularity)}</p>
          <p>{overview}</p>
          <p>Genres</p>
          {genres?.map(genre => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
