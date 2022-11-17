import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { thmdAPI } from 'Services/tmdbAPI';
import { StyledGrid } from 'components/Grid/Grid';

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
      <StyledGrid items={foundMovies} />
    </>
  );
}
