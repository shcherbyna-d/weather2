import React from 'react';
import CityWeather from '../../components/cityWeather/CityWeather';
import './Home.scss';

const Home = ({currentCityWeather}) => {
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

	return (
		<div className='weather__home home'>
			{currentLocationWeather}
			<h2 className='home__h2'><strong>Your favorites cities:</strong></h2>
			{/* <CityWeather />
			<CityWeather />
			<CityWeather />
			<CityWeather />
			<CityWeather />
			<CityWeather /> */}
		</div>
	)
}

export default Home;