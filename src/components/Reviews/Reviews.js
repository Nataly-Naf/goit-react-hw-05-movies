import { getReviewById } from 'components/Api/Api';
import { AudioItem } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const params = useParams();
  const movieId = params.movieId;

    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    console.log(error)

  useEffect(() => {
    async function getReview() {
      try {
          const fetchedMovie = await getReviewById(movieId);
          console.log(fetchedMovie)
        setReview(fetchedMovie.results);
      } catch (error) {
          setError(true)
                   }
        finally {
        setLoading(false);
      }
    }
    getReview();
  }, [movieId]);
    
    if (review.length === 0) {
             return "We don't have any review on this movie"
        }

    return <div>
        {loading && <AudioItem />}
        <Review onReview={review} />
  </div>;
};

const Review = ({ onReview }) => {      
       
  return (
    <ul>
      {onReview.map(item => {
        return (
          <li key={item.id}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
