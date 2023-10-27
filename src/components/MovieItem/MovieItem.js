import { MovieListItem } from "./MovieItem.styled"

export const MovieItem =  ({onMovieItem}) => {
    return <MovieListItem>{onMovieItem.original_title}</MovieListItem>
        
}



