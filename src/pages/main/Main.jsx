import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import City from '../city/City';
import './Main.scss';
import PropTypes from 'prop-types';

const Main = ({currentCityWeather, favoritesCitiesWeather}) => {
	return (
		<main className='weather__main main container'>
			<Switch>
				<Route exact path='/' render={() => <Home currentCityWeather={currentCityWeather} favoritesCitiesWeather={favoritesCitiesWeather} />} />
				<Route path='/city/:cityId' component={City}/>
			</Switch>
		</main>
	)	

}

Main.propTypes = {
	currentCityWeather: PropTypes.object,
	favoritesCitiesWeather: PropTypes.array,
}

export default Main;