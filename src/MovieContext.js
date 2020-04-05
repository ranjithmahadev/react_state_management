import React, {useState, createContext} from 'react';

export const MovieContext = createContext ();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Rocky',
            price: '$20',
            id: '1'
        },
        {
            name: 'Rambo',
            price: '$25',
            id: '2'
        },
        {
            name: 'Vacancy',
            price: '$35',
            id: '4'
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}