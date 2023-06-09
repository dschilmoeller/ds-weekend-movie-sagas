import { useSelector } from "react-redux";
import './Details.css'
import { useHistory } from "react-router-dom";

function Details() {
    const history = useHistory();


    // this setup allows pulling the title, description, and poster info correctly regardless of
    // the number of genres (duplicating data). 
    // The array is for aggregating the genres.
    const movieDetails = useSelector(store => store.movieDetails)
    let genreArray = []
    let movieName = movieDetails[0].title
    let movieDesc = movieDetails[0].description
    let movieImage = movieDetails[0].poster

    // this adds all genre matches to the page.
    for (let movie of movieDetails) {
        genreArray = [...genreArray, movie.name]
    }

    const headBack = () => {
        history.push('/')
    }
    // display return - details w/ null show up at the bottom if not supplied. Going back does result
    // in details showing up at the bottom of the list. Needs to be wrapped in a link on app.js page?
    // needed to be wrapped in Router. Completed. Deals with going back and forth by treating both pages
    // as unique in classic HTML.

    if (movieName === 'NULL') {
        return (<><div className="uhoh"></div></>)
    } else {
        return (
            <div>
                <h1>{movieName}</h1>
                <img src={movieImage} />
                <ul>
                    <li className="title3">Genres:</li>
                    {genreArray.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
                <p>{movieDesc}</p>

                <button onClick={headBack}>Return to List</button>
            </div>
        )
    }
}
export default Details