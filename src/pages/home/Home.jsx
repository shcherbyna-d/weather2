import React from 'react';
import CityWeather from '../../components/cityWeather/CityWeather';
import './Home.scss';

const Home = ({currentCityWeather, favoritesCitiesWeather}) => {

	
	let currentLocationWeather;
	if (currentCityWeather !== undefined) {
		currentLocationWeather = (
			<div className='home__current-location-block'>
				<h2 className='home__current-location-title'><strong>Your location city:</strong></h2>
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

	}

	return (
		<div className='weather__home home'>
			{currentLocationWeather}
			<h2 className='home__h2'><strong>Your favorites cities:</strong></h2>
			{cityWeatherElements}
		</div>
	)
}

export default Home;