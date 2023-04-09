import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

// important later
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const clickMovieDetail = (event) => {
        // console.log(`In movie detail, event:`, event.target.id);
        dispatch({ type: 'GET_MOVIE_DETAILS', payload: event.target.id })
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className='movieCard' >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} id={movie.id} onClick={clickMovieDetail} />

                        </div>

                    );
                })}

            </section>
        </main>

    );
}

export default MovieList;