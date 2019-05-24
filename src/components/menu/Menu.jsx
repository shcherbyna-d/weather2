import React from 'react';
import './Menu.scss';
import SearchForm from '../searchForm/SearchForm';
import FavoriteCity from '../favoriteCity/FavoriteCity';

class Menu extends React.Component {
    render() {
        let hiddenClassName = 'weather__menu menu';
        
        return (
            <div className={hiddenClassName}>
                <div className='menu__block'>
                    <SearchForm placeholder='Find city...'/>
                    <h3>Favorites cities:</h3>
                    <FavoriteCity />
                    <FavoriteCity />
                    <FavoriteCity />
                </div>
                <button className='menu__open-btn'>
                    <div className='menu__btn-line'></div>
                    <div className='menu__btn-line'></div>
                    <div className='menu__btn-line'></div>
                </button>
            </div>
        )
    }
}

export default Menu;