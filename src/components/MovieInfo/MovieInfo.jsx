import PropTypes from 'prop-types';
import { Overview, Title, Wrapper, Genre, Poster } from './MovieInfo.styled';

export const MovieInfo = ({
  details: { poster_path, title, overview, vote_average, genres, release_date },
}) => {
  return (
    <Wrapper>
      <Poster>
        <img
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
      </Poster>
      <div style={{ padding: '10px' }}>
        <Title>
          {title} ({release_date.split('-')[0]})
        </Title>
        <p style={{ fontWeight: '500' }}>
          User Score: {(vote_average * 10).toFixed()} %
        </p>
        <Title>Overview</Title>
        <Overview> {overview}</Overview>
        <Title>Genres</Title>
        {genres?.map(genre => (
          <Genre key={genre.id}>{genre.name}</Genre>
        ))}
      </div>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.objectOf(PropTypes.string),
  release_date: PropTypes.string,
};
