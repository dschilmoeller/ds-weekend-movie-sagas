import { useSelector } from "react-redux";
import './Details.css'

function Details () {
    const movieDetails = useSelector(store => store.movieDetails)
    let genreArray = []
    let movieName = movieDetails[0].title
    let movieDesc = movieDetails[0].description
    // console.log(`Title:`, movieName);
    console.log(`Details!`, movieDetails);
    for (let movie of movieDetails) {
        genreArray = [...genreArray, movie.name]
    }
    // console.log(`movieDetails`, genreArray);

    return (
        <div>
            <h1>Details for the Film: {movieName}</h1>
               <ul>
                <li class="title3">Genres:</li>
                {genreArray.map(item => {
                return <li>{item}</li>
            })}
          </ul>
            <p>{movieDesc}</p>
        </div>
    )
}

export default Details