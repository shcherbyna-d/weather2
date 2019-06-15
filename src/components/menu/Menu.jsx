import React from 'react';
import './Menu.scss';
import SearchForm from '../searchForm/SearchForm';
import FavoriteCity from '../favoriteCity/FavoriteCity';
import PropTypes from 'prop-types';

const Menu = ({
	isMenuShow, 
	toggleMenu, 
	favoritesCities, 
	removeFavoriteCity, 
	searchPlaceholder, 
	searchValue, 
	onChangeSearchValue, 
	getSearchCityWeather, 
	suggestionCity, 
	closeSuggestion, 
	addToFavorite
}) => {
	let hiddenClassName = 'menu_hidden';
	if (isMenuShow === true) {
		hiddenClassName = '';
	}

	let favoritesCitiesElements = [];
	if (favoritesCities !== undefined) {
		for (const key in favoritesCities) {
			if (favoritesCities.hasOwnProperty(key)) {
				const name = favoritesCities[key];
				favoritesCitiesElements.push(
					<FavoriteCity 
						cityName={name} 
						cityId={parseInt(key, 10)}
						removeFavoriteCity={removeFavoriteCity}
						toggleMenu={toggleMenu}
						key={key}
					/>	
				)
			}
		}	
	} else {
		favoritesCitiesElements = null;
	}

	return (
		<div className={`weather__menu menu ${hiddenClassName}`} >
			<div className='menu__block'>
				<SearchForm searchPlaceholder={searchPlaceholder} 
					searchValue={searchValue} 
					onChangeSearchValue={onChangeSearchValue} 
					getSearchCityWeather={getSearchCityWeather}
					suggestionCity={suggestionCity}
					closeSuggestion={closeSuggestion} 
					addToFavorite={addToFavorite}
				/>
				<h3>Favorites cities</h3>
				{favoritesCitiesElements}
			</div>
			<button className='menu__open-btn' onClick={() => toggleMenu()} >
				<div className='menu__btn-line'></div>
				<div className='menu__btn-line'></div>
				<div className='menu__btn-line'></div>
			</button>
		</div>
	)
}

Menu.propTypes = {
	isMenuShow: PropTypes.bool,
	toggleMenu: PropTypes.func,
	favoritesCities: PropTypes.object,
	removeFavoriteCity: PropTypes.func,
	searchPlaceholder: PropTypes.string,
	searchValue: PropTypes.string,
	onChangeSearchValue: PropTypes.func,
	getSearchCityWeather: PropTypes.func,
	suggestionCity: PropTypes.object,
	closeSuggestion: PropTypes.func,
	addToFavorite: PropTypes.func,
}

export default Menu;