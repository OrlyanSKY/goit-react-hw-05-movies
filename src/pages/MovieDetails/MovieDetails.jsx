import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { thmdAPI } from 'Services/tmdbAPI';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const { poster_path, title, overview, popularity, genres } = movieDetails;

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await thmdAPI.get(`/movie/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <div>
        {' '}
        <Link to="/">
          <button type="button">Go back</button>
        </Link>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <h2>{title}</h2>
        <p>User Score: {Math.round(popularity)}%</p>
        <p>{overview}</p>
        <p>Genres</p>
        {genres?.map(genre => (
          <span>{genre.name}</span>
        ))}
      </div>
    </>
  );
}
