import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Card from '@mui/material/Card';

// important later
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // sends details of clicked item and moves to details page.
    const clickMovieDetail = (event) => {
        // console.log(`In movie detail, event:`, event.target.id);
        dispatch({ type: 'GET_MOVIE_DETAILS', payload: event.target.id })
        history.push('/details')
    }

    return (
        <main>
            <h1>Movie List</h1>
            <h2>Click Post for Movie Details!</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card sx={{ minWidth: 400 }}a>
                        <div key={movie.id} className='movieCard' >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} id={movie.id} onClick={clickMovieDetail} />

                        </div>
                        </Card>
                    );
                })}

            </section>
        </main>

    );
}

export default MovieList;