import React from 'react';
import './SearchInput.scss';
import Suggestion from '../suggestion/Suggestion';

const SearchInput = ({searchPlaceholder, searchValue, onChangeSearchValue, suggestionCities, closeSuggestion, addToFavorite}) => {
    let suggestionElement = null;
    if (suggestionCities !== undefined) {
        suggestionElement = (
            <Suggestion cityId={suggestionCities.cityId} 
                cityName={suggestionCities.cityName} 
                country={suggestionCities.country}
                closeSuggestion={closeSuggestion}
                addToFavorite={addToFavorite} 
            />
        )
    }
    
    return (
        <div className='search-form__input-block input-block'>
            <input className='input-block__input form-control form-control-lg' 
                type="text" 
                value={searchValue} 
                placeholder={searchPlaceholder}
                onChange={onChangeSearchValue} 
            />
            <div className='input-block__suggestions list-group'>
                {suggestionElement}
            </div>
        </div>
    )
}

export default SearchInput;