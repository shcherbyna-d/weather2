import React from 'react';
import './SearchInput.scss';
import Suggestion from '../suggestion/Suggestion';
import PropTypes from 'prop-types';

const SearchInput = ({searchPlaceholder, searchValue, onChangeSearchValue, suggestionCity, closeSuggestion, addToFavorite}) => {
    let suggestionElement = null;
    if (suggestionCity !== undefined) {
        suggestionElement = (
            <Suggestion cityId={suggestionCity.cityId} 
                cityName={suggestionCity.cityName} 
                country={suggestionCity.country}
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

SearchInput.propTypes = {
	searchPlaceholder: PropTypes.string,
	searchValue: PropTypes.string,
	onChangeSearchValue: PropTypes.func,
	suggestionCity: PropTypes.object,
	closeSuggestion: PropTypes.func,
	addToFavorite: PropTypes.func,
}

export default SearchInput;