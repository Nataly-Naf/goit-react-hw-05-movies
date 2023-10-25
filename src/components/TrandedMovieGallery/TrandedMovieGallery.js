import { nanoid } from 'nanoid'
export const TrandedMovieGallery = ({ onMovies }) => {
    return <ul>
        {onMovies.map((movie) => {
            return <li key={nanoid()}>{movie.original_title}</li> })}
    </ul>
        }

       