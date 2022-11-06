import { useEffect, useState } from 'react';
import { thmdAPI } from 'Services/tmdbAPI';

import { Container } from 'components/Container/Container.styled';
import { StyledGrid } from 'components/Grid/Grid';
import { GridItems } from 'components/GridItems/GridItems';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const response = await thmdAPI.get('/movie/top_rated');

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrends();
  }, []);

  return (
    <Container>
      <main>
        <h2>Trending today</h2>
        <StyledGrid items={movies}>
          <GridItems />
        </StyledGrid>
      </main>
    </Container>
  );
};
