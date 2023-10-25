
export const MovieList = ({ onMovies }) => {
    return <ul>
        {onMovies.map((movie) => {
            return <li>{movie.original_title}</li>
        })}
    </ul>
}

