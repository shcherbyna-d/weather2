import React from 'react';
import './Suggestion.scss';
import PropTypes from 'prop-types';

const Suggestion = ({cityId, cityName, country, closeSuggestion, addToFavorite}) => {
    return (
        <div className='search-form__suggestion suggestion' >
            <button className='suggestion__city'>
                <div className='suggestion__city-name'>{cityName}</div>
                <div className='suggestion__country'>{country}</div>
            </button>
            <button className='suggestion__add-to-favorite' onClick={() => addToFavorite(cityId, cityName)} ><i className="fas fa-star"></i></button>
            <button className='suggestion__close' onClick={closeSuggestion} ><i className="fas fa-times"></i></button>
        </div>
    )
}

Suggestion.propTypes = {
	cityId: PropTypes.number,
	cityName: PropTypes.string,
	country: PropTypes.string,
	closeSuggestion: PropTypes.func,
	addToFavorite: PropTypes.func
}

export default Suggestion;