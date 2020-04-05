import React, {useContext} from 'react';
import './Nav.css';
import {MovieContext} from './MovieContext';

const Nav = ({ name, price}) => {

    const [movies, setMovies] = useContext (MovieContext);

    return (
        <div className = 'nav'>
            <h3>IMDB</h3>
            <p>List of movies: {movies.length}</p>
        </div>
    );
};

export default Nav;

