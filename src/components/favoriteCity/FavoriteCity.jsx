import React from 'react';
import './FavoriteCity.scss';
import { Link } from 'react-router-dom';

const FavoriteCity = ({cityName, cityId, removeFavoriteCity}) => {

    return (
        <div className='menu__favorite-city favorite-city btn-group'>
            <Link to={`/city/${cityId}`} className='favorite-city__btn-city text-white btn btn-secondary'>{cityName}</Link>
            <button className='favorite-city__btn-remove btn btn-danger' onClick={removeFavoriteCity(cityId)} ><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}

export default FavoriteCity;