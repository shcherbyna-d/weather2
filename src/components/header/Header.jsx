import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../utilities/assets/favicon.png';
import PropTypes from 'prop-types';

const Header = ({url, title}) => {
	const style = {
        backgroundImage: `url(${url})`,
    }
    let titleValue = 'Your weather app';
    if (title !== undefined) {
        titleValue = title;
    }

    return (
        <header className='weather__header header' style={style}>
			<h1 className='header__title'>{titleValue} </h1>
			<Link to='/' className='header__link-logo'>
				<img className='header__logo' src={logo}/>
			</Link>
            <div className='header__background'></div>
        </header>
    )
}

Header.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
}

export default Header;