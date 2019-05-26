import React from 'react';
import './Menu.scss';
import SearchForm from '../searchForm/SearchForm';
import FavoriteCity from '../favoriteCity/FavoriteCity';

const Menu = ({isMenuShow, toggleMenu}) => {
	let hiddenClassName = 'menu_hidden';
	if (isMenuShow === true) {
		hiddenClassName = '';
	}

	return (
		<div className={`weather__menu menu ${hiddenClassName}`} >
			<div className='menu__block'>
				<SearchForm placeholder='Find city...'/>
				<h3>Favorites cities:</h3>
				<FavoriteCity />
				<FavoriteCity />
				<FavoriteCity />
			</div>
			<button className='menu__open-btn' onClick={() => toggleMenu()} >
				<div className='menu__btn-line'></div>
				<div className='menu__btn-line'></div>
				<div className='menu__btn-line'></div>
			</button>
		</div>
	)
}

export default Menu;