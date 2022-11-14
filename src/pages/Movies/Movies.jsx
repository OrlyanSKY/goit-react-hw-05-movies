import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { thmdAPI } from 'Services/tmdbAPI';

export default function Movies() {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    async function getMovieByKeyword() {
      try {
        const response = await thmdAPI.get('/search/movie', {
          params: { query: searchQuery },
        });
        if (response.data.results.length === 0) {
          alert('Nothing found');
        }
        setFoundMovies(response.data.results);
      } catch (error) {
        alert('somthing went wrong!Try again');
      }
    }
    getMovieByKeyword();
  }, [searchQuery]);

  const getQuery = query => {
    setSearchParams(query.trim() !== '' ? { query } : {});
  };
  return (
    <>
      <SearchBar onSubmit={getQuery} />
      <ul>
        {foundMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
