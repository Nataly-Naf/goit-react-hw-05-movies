import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
export const TrandedMovieGallery = ({ onMovies }) => {
    return <ul>
        {onMovies.map((item) => {
            return <Link to={`/movies/${item.id}`} key={nanoid()}> {item.original_title} </Link> })}
    </ul>
        }

       