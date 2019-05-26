import React from 'react';
import CityWeather from '../../components/cityWeather/CityWeather';
import './Home.scss';

const Home = ({currentCityWeather, getCurrentLocation}) => {
	let cityWeather;
	if (currentCityWeather !== undefined) {
		cityWeather = (
			<CityWeather currentCityWeather={currentCityWeather} />
		)
	} else {
		cityWeather = (
			<button className='home__get-current-location-btn btn btn-primary' onClick={getCurrentLocation}>Get my location</button>
		)
	}

	return (
		<div className='weather__home home'>
			<div className='home__current-location-block'>
				<h2 className='home__current-location-title'><strong>Your location city:</strong></h2>
				{cityWeather}
			</div>
			<h2 className='home__h2'><strong>Your favorites cities:</strong></h2>
			<CityWeather />
			<CityWeather />
			<CityWeather />
			<CityWeather />
			<CityWeather />
			<CityWeather />
		</div>
	)
}

export default Home;