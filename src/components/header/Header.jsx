import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../utilities/assets/iconfinder_weather_87934.png';

const Header = () => {
    return (
        <header className='weather__header header navbar navbar-expand-lg navbar-dark bg-primary'>
            <h3 className='header__text-logo text-white'>Your weather app</h3>
            <div className='header__logo'>
                <Link to='/'>
                    <img className='navbar-brand' src={logo}/>
                </Link>
            </div>
        </header>
    )
}

export default Header;