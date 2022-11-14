import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiChevronsLeft } from 'react-icons/bi';
import { thmdAPI } from 'Services/tmdbAPI';

import { Wrapper } from './MovieDetails.styled';
import { StyledLink } from 'pages/MovieDetails/MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

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

  const { poster_path, title, overview, vote_average, genres, release_date } =
    movieDetails;

  return (
    <>
      <Link to="/">
        <button type="button">
          <BiChevronsLeft />
          Go back
        </button>
      </Link>
      {movieDetails.length !== 0 && (
        <Wrapper>
          <div style={{ maxWidth: '320px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={title}
            />
          </div>
          <div style={{ padding: '5px' }}>
            <h2>
              {title} ({release_date.split('-')[0]})
            </h2>
            <p>User Score: {(vote_average * 10).toFixed()} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres?.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </Wrapper>
      )}
      <div>
        <p>Additional information</p>
        <nav style={{ display: 'flex' }}>
          <StyledLink to="cast">Cast</StyledLink>

          <StyledLink to="reviews">Reviews</StyledLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
