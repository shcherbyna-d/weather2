import React from 'react';
import './FavoriteCity.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FavoriteCity = ({cityName, cityId, removeFavoriteCity, toggleMenu}) => {
    return (
        <div className='menu__favorite-city favorite-city btn-group'>
            <Link to={`/city/${cityId}`} className='favorite-city__btn-city text-white btn btn-secondary' onClick={toggleMenu}>{cityName}</Link>
            <button className='favorite-city__btn-remove btn btn-danger' onClick={() => removeFavoriteCity(cityId)} ><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}

FavoriteCity.propTypes = {
	cityName: PropTypes.string,
	cityId: PropTypes.number,
	removeFavoriteCity: PropTypes.func,
}

export default FavoriteCity;