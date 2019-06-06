import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../utilities/assets/iconfinder_weather_87934.png';
import PropTypes from 'prop-types';

const Header = ({url}) => {
	const style = {
        backgroundImage: `url(${url})`,
    }

    return (
        <header className='weather__header header' style={style}>
			<h1 className='header__title'>Your weather app</h1>
			<Link to='/'>
				<img className='header__logo' src={logo}/>
			</Link>
        </header>
    )
}

Header.propTypes = {
	url: PropTypes.string,
}

export default Header;