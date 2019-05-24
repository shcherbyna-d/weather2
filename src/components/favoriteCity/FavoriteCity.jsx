import React from 'react';
import './FavoriteCity.scss';
import { Link } from 'react-router-dom';

const FavoriteCity = () => {

    return (
        <div className='menu__favorite-city favorite-city btn-group'>
            <Link to={`/city/`} className='favorite-city__btn-city text-white btn btn-secondary'>City1</Link>
            <button className='favorite-city__btn-remove btn btn-danger'><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}

export default FavoriteCity;