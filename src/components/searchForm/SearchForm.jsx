import React from 'react';
import './SearchForm.scss';
import SearchInput from '../searchInput/SearchInput';

const SearchForm = ({searchPlaceholder, searchValue, onChangeSearchValue, getSearchCityWeather, suggestionCities, closeSuggestion, addToFavorite}) => {
    
    return (
        <form className='menu__search search-form form-group' onSubmit={(event) => {
            event.preventDefault();
            getSearchCityWeather();
        }}>
            <SearchInput searchValue={searchValue} 
                onChangeSearchValue={onChangeSearchValue}
                searchPlaceholder={searchPlaceholder}
                getSearchCityWeather={getSearchCityWeather}
                suggestionCities={suggestionCities}
                closeSuggestion={closeSuggestion}
                addToFavorite={addToFavorite}
            />
        </form>
    )
}

export default SearchForm;