import { thmdAPI } from 'Services/tmdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardList, Photo, Thumb } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const response = await thmdAPI.get(`/movie/${movieId}/credits`);
        setCasts(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <>
      {casts.length > 0 && (
        <CardList>
          {casts.map(cast => (
            <Card key={cast.cast_id}>
              <div style={{ width: '200px', height: '300px' }}>
                <Photo
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                      : `https://cdn.pixabay.com/photo/2014/07/02/21/26/love-382533_960_720.jpg`
                  }
                  alt={cast.name}
                />
              </div>
              <Thumb>
                <p style={{ fontWeight: '500' }}>{cast.name}</p>
                <p style={{ fontSize: '13px' }}>{cast.character}</p>
              </Thumb>
            </Card>
          ))}
        </CardList>
      )}
    </>
  );
}

// {
//   casts.map(cast => (
//     <div>
//       <img
//         key={cast.cast_id}
//         src={
//           cast.profile_path
//             ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
//             : `https://cdn.pixabay.com/photo/2014/03/24/17/18/smiley-295353__340.png`
//         }
//         alt={cast.name}
//         width="150"
//       />
//     </div>
//   ));
// }
