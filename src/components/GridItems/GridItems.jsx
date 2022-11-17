import { Link, useLocation } from 'react-router-dom';
import { Card, Image, MovieName, Thumb } from './GridItems.styled';
export const GridItems = ({ items }) => {
  const location = useLocation();

  return (
    <>
      {items.map(({ id, title, poster_path }) => (
        <Card key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              width={'200px'}
            />
            <Thumb>
              <MovieName>{title}</MovieName>
            </Thumb>
          </Link>
        </Card>
      ))}
    </>
  );
};
