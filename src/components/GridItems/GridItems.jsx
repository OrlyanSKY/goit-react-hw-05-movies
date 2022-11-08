import { Link } from 'react-router-dom';
import { Card, Image, MovieName, Thumb } from './GridItems.styled';
export const GridItems = ({ items }) => {
  return (
    <>
      {items.map(({ id, title, backdrop_path }) => (
        <Card key={id}>
          <Link to={`movies/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
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
