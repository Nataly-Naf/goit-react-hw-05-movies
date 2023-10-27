import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { MovieList } from './TrandedMovieGallery.styled'
export const TrandedMovieGallery = ({ onMovies }) => {
    return <MovieList>
        {onMovies.map((item) => {
            return <Link to={`/movies/${item.id}`} key={nanoid()}> {item.original_title} </Link> })}
    </MovieList>
        }

       