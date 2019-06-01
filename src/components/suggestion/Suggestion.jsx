import React from 'react';
import './Suggestion.scss';

const Suggestion = ({cityId, cityName, country, closeSuggestion, addToFavorite}) => {

    return (
        <div className='search-form__suggestion suggestion list-group-item list-group-item-action d-flex justify-content-between align-items-center' >
            <div className='suggestion__city'>
                <div className='suggestion__city-name'>{cityName}</div>
                <div className='suggestion__country'>{country}</div>
            </div>
            <button className='suggestion__add-to-favorite btn btn-success' onClick={() => addToFavorite(cityId, cityName)} ><i className="fas fa-star"></i></button>
            <button className='suggestion__close btn btn-danger' onClick={closeSuggestion} ><i className="fas fa-times"></i></button>
        </div>
    )
}

export default Suggestion;