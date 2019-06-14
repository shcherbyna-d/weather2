import React from 'react';
import './SearchForm.scss';
import SearchInput from '../searchInput/SearchInput';
import PropTypes from 'prop-types';

const SearchForm = ({
	searchPlaceholder, 
	searchValue, 
	onChangeSearchValue, 
	getSearchCityWeather, 
	suggestionCity, 
	closeSuggestion, 
	addToFavorite
}) => {
    return (
        <form className='menu__search search-form' onSubmit={(event) => {
            event.preventDefault();
            getSearchCityWeather();
        }}>
            <SearchInput searchValue={searchValue} 
                onChangeSearchValue={onChangeSearchValue}
                searchPlaceholder={searchPlaceholder}
                getSearchCityWeather={getSearchCityWeather}
                suggestionCity={suggestionCity}
                closeSuggestion={closeSuggestion}
                addToFavorite={addToFavorite}
            />
        </form>
    )
}

SearchForm.propTypes = {
	searchPlaceholder: PropTypes.string,
	searchValue: PropTypes.string,
	onChangeSearchValue: PropTypes.func,
	getSearchCityWeather: PropTypes.func,
	suggestionCity: PropTypes.object,
	closeSuggestion: PropTypes.func,
	addToFavorite: PropTypes.func,
}

export default SearchForm;