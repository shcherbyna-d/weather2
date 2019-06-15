import React from 'react';
import CityWeather from '../../components/cityWeather/CityWeather';
import './Home.scss';
import PropTypes from 'prop-types';

const Home = ({currentCityWeather, favoritesCitiesWeather}) => {
	let currentLocationWeather;
	if (currentCityWeather !== undefined) {
		currentLocationWeather = (
			<div className='home__current-location-block'>
				<h2 className='home__current-location-title'>Your location city</h2>
				<CityWeather currentCityWeather={currentCityWeather} />
			</div>
		)
	} else {
		currentLocationWeather = null;
	}

	let cityWeatherElements;
	if (favoritesCitiesWeather !== undefined) {
		cityWeatherElements = favoritesCitiesWeather.map((cityWeather) => {
			return (
				<CityWeather currentCityWeather={cityWeather} key={cityWeather.cityId} />
			)
		})
	} else {
		cityWeatherElements = null;
	}

	return (
		<div className='weather__home home'>
			{currentLocationWeather}
			<h2 className='home__h2'>Your favorites cities</h2>
			{cityWeatherElements}
		</div>
	)
}

Home.propTypes = {
	currentCityWeather: PropTypes.object,
	favoritesCitiesWeather: PropTypes.array,
}

export default Home;