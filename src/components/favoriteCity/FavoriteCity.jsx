import React from 'react';
import './FavoriteCity.scss';
import { Link } from 'react-router-dom';

const FavoriteCity = () => {

    return (
        <div className='menu__favorite-city favorite-city'>
            <Link to={`/city/`} className='favorite-city__name-btn'>City1</Link>
            <button className='favorite-city__close-btn' >X</button>
        </div>
    )
}

export default FavoriteCity;