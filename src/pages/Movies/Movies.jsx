import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { thmdAPI } from 'Services/tmdbAPI';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    async function getMovie() {
      try {
        const response = await thmdAPI.get('/search/movie', {
          params: { query },
        });
        if (response.data.results.length === 0) {
          alert('Nothing found');
        }
        setFoundMovies(response.data.results);
      } catch (error) {
        alert('somthing went wrong!Try again');
      }
    }
    getMovie();
  }, [query]);

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

//   setSearchParams(
//     e.target.value.trim() !== '' ? { query: e.target.value } : {}
//   )
