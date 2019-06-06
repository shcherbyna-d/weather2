import React from 'react';
import './CityWeather.scss';
import { Link } from 'react-router-dom';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';
import PropTypes from 'prop-types';

const CityWeather = ({currentCityWeather}) => {
	const getWeatherIcon = () => {
		const {weatherId} = {...currentCityWeather}
        if (weatherId >= 200 && weatherId < 300) {
            return storm;
        }
        if (weatherId >= 300 && weatherId < 500) {
            return rain;
        }
        if (weatherId >= 500 && weatherId < 600) {
            return rain;
        }
        if (weatherId >= 600 && weatherId < 700) {
            return snow;
        }
        if (weatherId >= 700 && weatherId < 800) {
            return fog;
        }
        if (weatherId === 800) {
            return sun;
        }
        if (weatherId >= 801 && weatherId < 900) {
            return cloud;
        }
    }

    return (
        <Link to={`/city/${currentCityWeather.cityId}`} className='home__city-weather city-weather card bg-light'>
            <h4 className='city-weather__header card-header'>
                <span>{currentCityWeather.cityName}</span>
                <span>wether today</span>
            </h4>
            <div className='city-weather__body card-body'>
                <img className='city-weather__weather-icon' src={getWeatherIcon()}/>
                <h4 className='city-weather__temperature card-title'>{currentCityWeather.temperature} °C</h4>
                <h4 className='city-weather__weather-main card-title'>{currentCityWeather.weatherMain}</h4>
            </div>
        </Link>
    )
}

CityWeather.propTypes = {
	currentCityWeather: PropTypes.object,
}

export default CityWeather;