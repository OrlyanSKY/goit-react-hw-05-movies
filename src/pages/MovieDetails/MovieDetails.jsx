import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';
import { thmdAPI } from 'Services/tmdbAPI';

import { StyledLink } from 'pages/MovieDetails/MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();

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
      <BackLink location={location} />
      {movieDetails.length !== 0 && <MovieInfo details={movieDetails} />}
      <div style={{ marginBottom: '15px' }}>
        <h3>Additional information</h3>
        <nav style={{ display: 'flex' }}>
          <StyledLink to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </StyledLink>

          <StyledLink
            to="reviews"
            state={{ from: location.state?.from ?? '/' }}
          >
            Reviews
          </StyledLink>
        </nav>
      </div>
      <Suspense
        fallback={
          <Puff
            wrapperStyle={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
