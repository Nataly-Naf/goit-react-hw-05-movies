export const Cast = ({ cast_id, profile_path, character, name }) => {
    console.log(cast_id)
    return <ul>
        <li key={cast_id}>
            <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={character} />
            <p>{character}</p>
            <p>{name}</p>            
        </li>
    </ul>    
} 

