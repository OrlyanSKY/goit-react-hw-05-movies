import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { thmdAPI } from 'Services/tmdbAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      const response = await thmdAPI.get(`/movie/${movieId}/reviews`);
      setReviews(response.data.results);
    }
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return reviews.length === 0 ? (
    <p>We don't have any reviews for this movie.</p>
  ) : (
    <ul style={{ listStyle: 'none' }}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
